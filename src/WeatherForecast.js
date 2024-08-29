import React, { useState } from "react";
import './Forecast.css';
import axios from "axios";
import ForecastDay from "./ForecastDay.js"

export default function WeatherForecast (props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
if (loaded) {
    console.log(forecast);
        return (
            <div className="forecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index){
                        if (index < 6) {
                        return (
                            <div className="col" key={index}>
                                <ForecastDay data={dailyForecast}/>
                            </div>
                        );
                        } else {return null;}
                    })}
                </div>
            </div>
        );    

} else {
    let apiKey = "8161b4309ee03faae957729ba7104797";
    let longitude = props.coordinates.longitude;
    let latitude= props.coordinates.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;}
}