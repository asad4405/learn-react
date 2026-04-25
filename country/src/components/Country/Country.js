import React from "react";

const Country = (props) => {
  const { common,official } = props.country.name;
  const handleAddCountry = props.handleAddCountry;
  return (
    <div style={{ border: "1px solid #ccc",margin:'10px',padding:'10px' }}>
      <h4>Country Name: {common}</h4>
      <p>Capital:{props.country.capital}</p>
      <p>Offical:{official}</p>
      <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;
