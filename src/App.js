import './App.css';
import Form from "./Form";

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
    This project is open sourced on <a href="">Github</a> and created by Denisa Radevová
  </footer>);
}