import React from "react";
import { Card } from "react-bootstrap";

import {
  FaTruck,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ProductRightCard = () => {
  return (
    <Card className="right-card">
      <div>
        <FaTruck /> Fast Delivery
      </div>

      <div>
        <FaShieldAlt /> Quality Assured
      </div>

      <div>
        <FaMapMarkerAlt /> Delivery Area
      </div>

      <hr />

      <div className="d-flex gap-2">
        <FaHeart />
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </Card>
  );
};

export default ProductRightCard;