import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Homepage = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  const [mainSliders, setMainsliders] = useState([]);
  useEffect(() => {
    fetch(apiUrl + "/mainslider")
      .then((res) => res.json())
      .then((data) => setMainsliders(data.data));
  }, []);

  return (
    <div>
      {/* ============== Banner Section ============= */}
      <Carousel fade interval={3000}>
        {mainSliders.map((slider) => (
          <Carousel.Item key={slider.id}>
            <a href={slider.link} style={{ textDecoration: "none" }}>
              <img
                className="d-block w-100"
                src={imageUrl +"/"+ slider.image}
                alt="banner1"
                style={{ height: "450px", objectFit: "cover" }}
              />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Homepage;
