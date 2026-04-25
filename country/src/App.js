import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country/Country";

function App() {
  const [countries , setCountries] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies')
    .then((res) => res.json())
    .then(data => setCountries(data))
  },[])

  return (
    <div className="App">
      <h3>Total Country: {countries.length}</h3>
      {countries.map(country => <Country country={country} key={country.name.common}></Country>)}
    </div>
  );
}


export default App;
