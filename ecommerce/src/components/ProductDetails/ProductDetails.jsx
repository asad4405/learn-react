import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Product.css";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductVariants from "./ProductVariants";
import ProductQuantity from "./ProductQuantity";
import AddToCartButton from "./AddToCartButton";
import ProductRightCard from "./ProductRightCard";

const ProductDetails = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [inventory, setInventory] = useState([]);

  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/product-details/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data.product);
        setInventory(data.data.inventory || []);
      });
  }, [slug]);

  const isVariant = Number(product?.product_type) === 1;

  const matchedVariant = inventory.find(
    (item) =>
      Number(item.color_id) === Number(selectedColor?.id) &&
      Number(item.size_id) === Number(selectedSize?.id)
  );

  const price = isVariant
    ? matchedVariant?.price || product?.new_price
    : product?.new_price;

  return (
    <Container fluid className="product-details-page py-3">
      <Row>
        <Col lg={5}>
          <ProductImages
            product={product}
            imageUrl={imageUrl}
            mainImage={mainImage}
            setMainImage={setMainImage}
          />
        </Col>

        <Col lg={4}>
          <ProductInfo product={product} price={price} />

          <ProductVariants
            product={product}
            inventory={inventory}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          <ProductQuantity
            quantity={quantity}
            setQuantity={setQuantity}
          />

          <AddToCartButton
            apiUrl={apiUrl}
            product={product}
            isVariant={isVariant}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            quantity={quantity}
            setLoading={setLoading}
            loading={loading}
          />
        </Col>

        <Col lg={3}>
          <ProductRightCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;