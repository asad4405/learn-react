import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";

const ProductDetails = () => {
  let { slug } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://next.babuei.com/api/product-details/${slug}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.data));
  }, [slug]);
  const productDetails = product.product;
  console.log(productDetails);
  

  return (
    <div>
      <h4>Product Name {productDetails?.name}</h4>
      <h4>Details:</h4> <div dangerouslySetInnerHTML={{ __html: productDetails?.description }}></div>

      <h3>Product</h3>
       {productDetails && <Product showAddToCart={false} product={productDetails} ></Product>}
    </div>
  );
};

export default ProductDetails;
