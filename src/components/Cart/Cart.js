import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,prd) => total + prd.new_price , 0);
    return (
        <div>
            <h3>This is Cart</h3>
            <p>Item Ordered: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;