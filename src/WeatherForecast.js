import React, { useState } from "react";
import './Forecast.css';
import axios from "axios";
import ForecastDay from "./ForecastDay.js"

export default function WeatherForecast (props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse (response){
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
if (loaded) {   
    console.log(forecast) 
    return (
            <div className="forecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index){
                        if (index < 5) {
                        return (
                            <div className="col" key={index}>
                                <ForecastDay data={dailyForecast}/>
                            </div>
                        );
                        } else {return null}
                    })}
                </div>
            </div>
        );    

} else {
    const apiKey = "d1a86552de255334f6117b348c4519bd";
    const longitude = props.coordinates.longitude;
    const latitude= props.coordinates.latitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;}
}