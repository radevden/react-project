import React, { useState } from "react";
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
  const [city, showCity] = useState("");
  const [temperature, setTemp] = useState(null);
  const [humidity, setHumid] = useState(null);
  const [description, setDesc] = useState(null);
  const [wind, setWind] = useState(null);
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState(null);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function setLocation(event) {
    const formattedCity = capitalizeFirstLetter(event.target.value);
    showCity(formattedCity);
  }

  function clickSubmit(event) {
    event.preventDefault();
    let apiKey = "a3e880fb200b2349fc28b9c2c1cc2f6a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setTemp(response.data.main.temp);
      setHumid(response.data.main.humidity);
      setDesc(response.data.weather[0].description);
      setWind(response.data.wind.speed);
      setIcon(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
      setLoading(true);
    });
  }

  let form = (
    <form onSubmit={clickSubmit}>
      <input
        className="text"
        type="text"
        placeholder="search for city..."
        onChange={setLocation}
      />
      <input className="submit" type="submit" value="submit" />
    </form>
  );

  function Today() {
    return (
      <div className="container-fluid todayData">
        <div className="row">
          <div className="col-md-6">
            <h2 className="city">{city}</h2>
            <ul>
              <li>Description: {description}</li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {Math.round(wind)} m/s</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h1 className="todaystemp">{Math.round(temperature)}°C</h1>
            <img src={icon} alt="weather icon" />
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
        <p>loading...</p>
      </>
    );
  }
}
