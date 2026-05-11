import React from "react";
import { Carousel } from "react-bootstrap";

const Homepage = () => {
  return (
    <div>
      {/* ============== Banner Section ============= */}
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              className="d-block w-100"
              src="https://next.babuei.com/public/uploads/banner/1741698524Organic%20green%20tea.png"
              alt="banner1"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              className="d-block w-100"
              src="https://next.babuei.com/public/uploads/banner/1741698483Royal%20Green%20Tea.png"
              alt="banner2"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </a>
        </Carousel.Item>

        <Carousel.Item>
          <a href="#" style={{ textDecoration: "none" }}>
            <img
              className="d-block w-100"
              src="https://next.babuei.com/public/uploads/banner/1741698524Organic%20green%20tea.png"
              alt="banner3"
              style={{ height: "450px", objectFit: "cover" }}
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Homepage;
