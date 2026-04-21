import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product } = props;
  const baseUrl = "https://next.babuei.com/";

  return (
    <div className="product">
      <div>
        <img
          src={baseUrl + product.image.image}
          alt={product.name}
          width="100"
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <p>{product.name}</p>
        
        <p><del>{product.old_price}</del> {product.new_price}</p>
      </div>
    </div>
  );
};

export default Product;
