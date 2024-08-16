import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import './Forecast.css';
import axios from "axios";

export default function WeatherForecast (){
    function handleResponse (response){
        console.log(response.data);
    }
    
    let apiKey = "8161b4309ee03faae957729ba7104797";
    let longitude = 40.7;
    let latitude= 74
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    
    return (
        <div className="forecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Fri</div>
                    <WeatherIcon code="clear-sky-day" size={39}/>
                    <div className="forecast-temp">
                        <span className="forecast-tempmax">30°</span>
                        <span className="forecast-tempmin"> 23°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}