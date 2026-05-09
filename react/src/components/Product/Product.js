import React from "react";
import "./Product.css";
import { Link } from "react-router";

const Product = (props) => {
  const { name, image, old_price, new_price, slug } = props.product;
  const baseUrl = "https://next.babuei.com/";

  return (
    <div className="product">
      <div>
        <img src={baseUrl + image.image} alt={name} width="120" />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Link to={"/product-details/" + slug}>
          <p>{name}</p>
          <p>
            <del>{old_price}</del> {new_price}
          </p>
        </Link>
        {props.showAddToCart && (
          <button
            className="add-to-cart-btn"
            onClick={() => props.handleAddProduct(props.product)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
