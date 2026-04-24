import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, prd) => total + prd.new_price, 0);

  const [shipping, setShipping] = useState([]);
  useEffect(() => {
    fetch("https://next.babuei.com/api/shipping-area")
      .then((res) => res.json())
      .then((data) => setShipping(data.data));
  }, []);

  let shippingCharge = 0;
  if (cart.length > 0) {
    shippingCharge = Number(shipping[0]?.amount);
  }
  const grandTotal = totalPrice + shippingCharge;

  return (
    <div>
      <h3>This is Cart</h3>
      <p>Item Ordered: {cart.length}</p>
      <p>Product Price: {totalPrice}</p>
      <p>Shipping Cost: {shippingCharge}</p>
      <p>Total Price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
