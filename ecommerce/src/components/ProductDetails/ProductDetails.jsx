import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import {
  FaTruck,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

const ProductDetails = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [inventory, setInventory] = useState([]);

  const [mainImage, setMainImage] = useState("");

  const [selectedColor, setSelectedColor] =
    useState(null);
  const [selectedSize, setSelectedSize] =
    useState(null);

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  /* FETCH PRODUCT */
  useEffect(() => {
    fetch(`${apiUrl}/product-details/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data.product);
        setInventory(data.data.inventory || []);
      });
  }, [slug]);

  /* MAIN IMAGE */
  useEffect(() => {
    if (product?.product_image) {
      setMainImage(
        `${imageUrl}/${product.product_image}`
      );
    }
  }, [product]);

  /* IMAGES */
  const productImages =
    product?.sliderimages?.map(
      (img) =>
        `${imageUrl}/${img.slider_image}`
    ) || [];

  /* TYPE */
  const showVariant =
    Number(product?.product_type) === 1;

  /* COLORS */
  const colors = [
    ...new Map(
      inventory.map((item) => [
        item.color.id,
        item.color,
      ])
    ).values(),
  ];

  /* SIZES */
  const sizes = [
    ...new Map(
      inventory.map((item) => [
        item.size.id,
        item.size,
      ])
    ).values(),
  ];

  /* DEFAULT SELECT */
  useEffect(() => {
    if (
      showVariant &&
      colors.length > 0 &&
      !selectedColor
    ) {
      setSelectedColor(colors[0]);
    }
  }, [colors, showVariant]);

  useEffect(() => {
    if (
      showVariant &&
      sizes.length > 0 &&
      !selectedSize
    ) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes, showVariant]);

  /* MATCH VARIANT */
  const matchedVariant =
    inventory.find(
      (item) =>
        Number(item.color_id) ===
          Number(selectedColor?.id) &&
        Number(item.size_id) ===
          Number(selectedSize?.id)
    );

  /* PRICE */
  const price = showVariant
    ? matchedVariant?.price ||
      product?.new_price
    : product?.new_price;

  /* QTY */
  const increaseQty = () =>
    setQuantity((prev) => prev + 1);

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  /* ADD TO CART */
  const handleAddToCart =
    async () => {
      const payload = {
        product_id: product.id,
        quantity: quantity,
      };

      if (showVariant) {
        if (
          !selectedColor ||
          !selectedSize
        ) {
          alert(
            "Select Color & Size"
          );
          return;
        }

        payload.color_id =
          selectedColor.id;
        payload.size_id =
          selectedSize.id;
      }

      try {
        setLoading(true);

        const res =
          await fetch(
            `${apiUrl}/add-to-cart`,
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
                Accept:
                  "application/json",
              },
              body: JSON.stringify(
                payload
              ),
            }
          );

        const data =
          await res.json();

        alert(data.message);
      } catch (error) {
        alert(
          "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <Container
      fluid
      className="product-details-page py-3"
    >
      {/* BREADCRUMB */}
      <div className="breadcrumb-area text-start">
        <span>Home</span> /{" "}
        <span>Product</span> /{" "}
        <strong>
          {
            product?.product_name
          }
        </strong>
      </div>

      <Row className="mt-3">
        {/* LEFT */}
        <Col lg={5}>
          <div className="main-image-box">
            <img
              src={mainImage}
              className="main-product-image"
              alt=""
            />
          </div>

          <div className="thumbnail-wrapper">
            {productImages.map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  className="thumbnail-image"
                  alt=""
                  onClick={() =>
                    setMainImage(
                      img
                    )
                  }
                />
              )
            )}
          </div>
        </Col>

        {/* CENTER */}
        <Col lg={4}>
          <div className="product-info">
            <h2 className="product-title text-start">
              {
                product?.product_name
              }
            </h2>

            <p className="text-start">
              SKU:{" "}
              {
                product?.product_code
              }
            </p>

            <div className="price-area text-start">
              <span className="product-price">
                ৳{price}
              </span>
              <span className="per-piece">
                Per Piece
              </span>
            </div>

            {/* COLOR */}
            {showVariant &&
              colors.length >
                0 && (
                <div className="option-area text-start">
                  <h6>
                    Select
                    Color
                  </h6>

                  <div className="option-btns">
                    {colors.map(
                      (
                        color
                      ) => (
                        <Button
                          key={
                            color.id
                          }
                          className={`option-btn ${
                            selectedColor?.id ===
                            color.id
                              ? "active-option"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedColor(
                              color
                            )
                          }
                        >
                          {
                            color.color_name
                          }
                        </Button>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* SIZE */}
            {showVariant &&
              sizes.length >
                0 && (
                <div className="option-area mt-3 text-start">
                  <h6>
                    Select
                    Size
                  </h6>

                  <div className="option-btns">
                    {sizes.map(
                      (
                        size
                      ) => (
                        <Button
                          key={
                            size.id
                          }
                          className={`option-btn ${
                            selectedSize?.id ===
                            size.id
                              ? "active-option"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedSize(
                              size
                            )
                          }
                        >
                          {
                            size.size_name
                          }
                        </Button>
                      )
                    )}
                  </div>
                </div>
              )}

            {/* QUANTITY */}
            <div className="option-area mt-3 text-start">
              <h6>Quantity</h6>

              <div className="d-flex gap-2">
                <Button
                  className="option-btn"
                  onClick={
                    decreaseQty
                  }
                >
                  <FaMinus />
                </Button>

                <Button className="option-btn">
                  {quantity}
                </Button>

                <Button
                  className="option-btn"
                  onClick={
                    increaseQty
                  }
                >
                  <FaPlus />
                </Button>
              </div>
            </div>

            {/* ADD TO CART */}
            <div className="mt-4">
              <Button
                className="add-cart-btn"
                onClick={
                  handleAddToCart
                }
                disabled={
                  loading
                }
              >
                <FaShoppingCart />{" "}
                {loading
                  ? "Adding..."
                  : "Add to Bag"}
              </Button>
            </div>

            <hr />

            {/* DESCRIPTION */}
            <div
              className="description-area text-start"
              dangerouslySetInnerHTML={{
                __html:
                  product?.description,
              }}
            />
          </div>
        </Col>

        {/* RIGHT */}
        <Col lg={3}>
          <Card className="right-card">
            <div className="delivery-item">
              <FaTruck /> Fast
              delivery
            </div>

            <div className="delivery-item">
              <FaShieldAlt />{" "}
              Quality assured
            </div>

            <div className="location-box">
              <FaMapMarkerAlt />{" "}
              Delivery
              location
            </div>

            <hr />

            <div className="social-area">
              <FaHeart />
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;