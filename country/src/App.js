import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [cart, setCart] = useState([]);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <div className="country-container">
        <div className="country">
          {countries.map((country) => (
            <Country
              country={country}
              key={country.name.common}
              handleAddCountry={handleAddCountry}
            ></Country>
          ))}
        </div>
        <div className="cart">
          <Cart countries={countries} cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
