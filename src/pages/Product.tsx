import React from "react";
import ProductCol from "../components/Products/Cards/ProductCol";

function Product() {
  return (
    <div>
      <div className="grid grid-cols-2"></div>
      <div className="grid grid-cols-4 ml-[-20px]">
        {Array(10)
          .fill(null)
          .map(() => (
            <ProductCol />
          ))}
      </div>
    </div>
  );
}

export default Product;
