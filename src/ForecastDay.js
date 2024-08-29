import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import './Forecast.css';

export default function ForecastDay (props){
    
    function MaxTemp (){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function MinTemp (){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day (){
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <>
        <div className="forecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={39}/>
            <div className="forecast-temp">
                <span className="forecast-tempmax">{MaxTemp()}</span>
                <span className="forecast-tempmin">{MinTemp()}</span>
            </div>
        </>
    )
}