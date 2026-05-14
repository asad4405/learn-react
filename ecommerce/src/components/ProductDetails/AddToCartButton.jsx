import React from "react";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = ({
  apiUrl,
  product,
  isVariant,
  selectedColor,
  selectedSize,
  quantity,
  loading,
  setLoading,
}) => {
  const handleAdd = async () => {
    if (!product) return;

    if (isVariant) {
      if (!selectedColor || !selectedSize) {
        alert("Select color & size");
        return;
      }
    }

    const payload = {
      product_id: product.id,
      quantity,
    };

    if (isVariant) {
      payload.color_id = selectedColor.id;
      payload.size_id = selectedSize.id;
    }

    try {
      setLoading(true);

      const res = await fetch(`${apiUrl}/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="add-cart-btn mt-4"
      onClick={handleAdd}
      disabled={loading}
    >
      <FaShoppingCart />{" "}
      {loading ? "Adding..." : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;