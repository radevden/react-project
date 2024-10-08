import './App.css';
import Form from "./Form";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Form />
      <Footer/>
    </div>
  );
}

function Footer(){
  return (<footer>
    This project is coded by Denisa Radevová and is open-sourced on <a href="https://github.com/radevden/react-project.git" target="_blank" rel="noopener noreferrer">Github</a> and hosted on <a href="https://brilliant-salmiakki-9a4626.netlify.app/ " target="_blank" rel="noopener noreferrer">Netlify</a>
  </footer>);
}