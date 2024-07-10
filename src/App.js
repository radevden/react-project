import './App.css';
import Form from "./Form";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form />
      <Footer/>
    </div>
  );
}

function Footer(){
  return (<footer>
    This project is coded by Denisa Radevová and is open-sourced on <a href="https://github.com/radevden/react-project.git" target="_blank" rel="noreferrer">Github</a> and hosted on <a href="https://brilliant-salmiakki-9a4626.netlify.app/ " target="_blank" rel="noreferrer">Netlify</a>
  </footer>);
}