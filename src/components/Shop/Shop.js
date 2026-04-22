import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (product) => {
        console.log('Product Added',product);
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
                dddddddddd
            </div>
            
        </div>
    );
};

export default Shop;