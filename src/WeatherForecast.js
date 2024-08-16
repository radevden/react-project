import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import './Forecast.css';

export default function WeatherForecast (){
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