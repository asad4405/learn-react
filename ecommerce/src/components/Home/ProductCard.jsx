import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css";

const ProductCard = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;

  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    fetch(apiUrl + "/front-category-products")
      .then((res) => res.json())
      .then((data) => setCategoryProducts(data.data));
  }, []);

  console.log(categoryProducts);
  return (
    <div>
      {/* ========== product section ========== */}
      <Container fluid className="food-section py-5">
        {/* ========== CATEGORY ======== */}

        {categoryProducts.map((categoryProduct) => (
          <div className="mb-4">
            <h2 className="category-title text-center mb-4">
              {categoryProduct.category_name}
            </h2>
            <Row>
              {categoryProduct.products.map((product) => (
                <Col lg={2} md={6} sm={6} xs={6}>
                  <Card className="food-card">
                    <div className="food-image-box">
                      <Card.Img
                        variant="top"
                        src={imageUrl + "/" + product.product_image}
                        className="food-image"
                      />
                    </div>

                    <Card.Body>
                      <h5 className="food-name">{product.product_name}</h5>

                      <div className="price-section">
                        <span className="old-price">৳{product.old_price}</span>
                        <span className="new-price">৳{product.new_price}</span>
                      </div>

                      <Button className="add-btn">+ Order Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ProductCard;
