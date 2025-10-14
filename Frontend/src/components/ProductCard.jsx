// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
      <h3>{product?.name || "Product Name"}</h3>
      <p>{product?.description || "Product description here."}</p>
      <p><strong>${product?.price || "0.00"}</strong></p>
    </div>
  );
}
