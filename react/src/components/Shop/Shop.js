import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    useEffect(() => {
        fetch('https://next.babuei.com/api/flash-sale')
        .then((res) => res.json())
        .then((data) => setProducts(data.data.data));
    },[]);
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;