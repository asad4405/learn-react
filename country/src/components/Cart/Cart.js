import React from "react";

const Cart = (props) => {
  const countries = props.countries;
  const cart = props.cart;

  return (
    <div>
      <h3>Total Country: {countries.length}</h3>
      <h3>Cart Added Country: {cart.length}</h3>

      <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
        <h4>Added Country List:</h4>
        {cart.map((country) => 
        <h4>{country.name.common}</h4>
        )}
      </div>
    </div>
  );
};

export default Cart;
