import React, {useState} from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit] = useState("celsius");
    
    function showCels (event){
        event.preventDefault();
        setUnit("celsius");
    }
    
    function convertFahr (event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    if (unit === "celsius") {
    return (
        <div className="tempConvert">
            <h1 className="todaystemp">{Math.round(props.celsius)}</h1>
            <span className="unit">°C |{" "}
                <a href="/" onClick={convertFahr}>°F</a>
            </span>
        </div>
    )} else {
        let fahrenheit = (props.celsius *9/5)+32;
        return (
            <div className="tempConvert">
            <h1 className="todaystemp">{Math.round(fahrenheit)}</h1>
            <span className="unit">
                <a href="/" onClick={showCels}>°C</a>{" "} | °F
            </span>
        </div>
        )
    }
}