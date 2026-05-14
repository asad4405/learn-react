import React from "react";

const ProductInfo = ({ product, price }) => {
  return (
    <div className="product-info text-start">
      <h2>{product?.product_name}</h2>

      <p>SKU: {product?.product_code}</p>

      <h3>৳{price}</h3>
    </div>
  );
};

export default ProductInfo;