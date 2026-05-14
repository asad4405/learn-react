import React from "react";
import { Button } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";


const ProductQuantity = ({
  quantity,
  setQuantity,
}) => {
  return (
    <div className="mt-3 text-start">
      <h6>Quantity</h6>

      <div className="d-flex gap-2 align-items-center">
        <Button style={{
              background: "#f89a1c",
              color: "#fff",
              border: "1px solid #f89a1c",
            }}
          onClick={() =>
            quantity > 1 &&
            setQuantity(quantity - 1)
          }
        >
          <FaMinus />
        </Button>

        <span>{quantity}</span>

        <Button style={{
              background: "#f89a1c",
              color: "#fff",
              border: "1px solid #f89a1c",
            }}
          onClick={() =>
            setQuantity(quantity + 1)
          }
        >
          <FaPlus />
        </Button>
      </div>
    </div>
  );
};

export default ProductQuantity;