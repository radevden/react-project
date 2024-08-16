import React, { useState } from "react";
import './App.css';
import axios from "axios";
import FormattedDate from "./FormattedDate.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function Form() {
  const [city, showCity] = useState("");
  const [temperature, setTemp] = useState(null);
  const [humidity, setHumid] = useState(null);
  const [description, setDesc] = useState(null);
  const [wind, setWind] = useState(null);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(null);
  const [date, setDate] = useState(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function setLocation(event) {
    const formattedCity = capitalizeFirstLetter(event.target.value);
    showCity(formattedCity);
  }

  function clickSubmit(event) {
    event.preventDefault();
    let apiKey = "e1c36520c14f56fa74b8fob3tcc313d4";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setTemp(response.data.temperature.current);
      setHumid(response.data.temperature.humidity);
      setDesc(response.data.condition.description);
      setWind(response.data.wind.speed);
      setDate(new Date(response.data.time*1000));
      setIcon(response.data.condition.icon);
      setLoading(true);
    });
  }

  let form = (
    <form onSubmit={clickSubmit} className="form-inline">
                    <input
                        className="text"
                        type="text"
                        placeholder="search for city..."
                        autoFocus="on"
                        onChange={setLocation}
                    />
                    <input className="submit" type="submit" value="submit" />
    </form> 
  );

  function Today(props) {
    return (
      <div className="container-fluid todayData">
        <div className="row">
          <div className="col-sm-6">
            <h2 className="city">{city}</h2>
            <ul>
              <li>
                <FormattedDate date={date}/>, {description}
              </li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {Math.round(wind)} m/s</li>
            </ul>
          </div>
          <div className="col-sm-6 tempIcon">
            <WeatherTemperature celsius={temperature} />
            <WeatherIcon code={icon} alt={description}/>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <>
        {form}
        <Today />
      </>
    );
  } else {
    return (
      <>
        {form}
        <br/>
        <p className="loading">loading...</p>
      </>
    );
  }
}
