import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

const ProductVariants = ({
  product,
  inventory,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}) => {
  const isVariant = Number(product?.product_type) === 1;

  const colors = [
    ...new Map(inventory.map((i) => [i.color.id, i.color])).values(),
  ];

  const sizes = [
    ...new Map(inventory.map((i) => [i.size.id, i.size])).values(),
  ];

  // ✅ Hooks MUST be here (before return)
  useEffect(() => {
    if (isVariant && colors.length > 0 && !selectedColor) {
      setSelectedColor(colors[0]);
    }
  }, [colors, isVariant]);

  useEffect(() => {
    if (isVariant && sizes.length > 0 && !selectedSize) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes, isVariant]);

  // after hooks you can return conditionally
  if (!isVariant) return null;

  return (
    <div className="text-start">
      {/* COLOR */}
      <h6>Select Color</h6>
      <div className="d-flex gap-2 mb-3">
        {colors.map((c) => (
          <Button
            key={c.id}
            style={{
              background: "#fff",
              color: "#f89a1c",
              border: "1px solid #f89a1c",
            }}
            onClick={() => setSelectedColor(c)}
            className={selectedColor?.id === c.id ? "active-option" : ""}
          >
            {c.color_name}
          </Button>
        ))}
      </div>

      {/* SIZE */}
      <h6>Select Size</h6>
      <div className="d-flex gap-2">
        {sizes.map((s) => (
          <Button
            key={s.id}
            style={{
              background: "#fff",
              color: "#f89a1c",
              border: "1px solid #f89a1c",
            }}
            onClick={() => setSelectedSize(s)}
            className={selectedSize?.id === s.id ? "active-option" : ""}
          >
            {s.size_name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductVariants;
