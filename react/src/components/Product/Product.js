import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name , image, old_price, new_price } = props.product;
  const baseUrl = "https://next.babuei.com/";

  return (
    <div className="product">
      <div>
        <img
          src={baseUrl + image.image}
          alt={name}
          width="120"
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p>{name}</p>
        <p><del>{old_price}</del> {new_price}</p>
      <button className="add-to-cart-btn" onClick={() => props.handleAddProduct(props.product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
