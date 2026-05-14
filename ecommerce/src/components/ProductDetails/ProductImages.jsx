import React, { useEffect } from "react";
import "./Product.css";

const ProductImages = ({
  product,
  imageUrl,
  mainImage,
  setMainImage,
}) => {
  const images =
    product?.sliderimages?.map(
      (img) => `${imageUrl}/${img.slider_image}`
    ) || [];

  useEffect(() => {
    if (product?.product_image) {
      setMainImage(
        `${imageUrl}/${product.product_image}`
      );
    }
  }, [product]);

  return (
    <div className="product-details-page">
      <img
        src={mainImage}
        className="main-product-image"
        alt=""
      />

      <div className="thumbnail-wrapper">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="thumbnail-image"
            onClick={() => setMainImage(img)}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;