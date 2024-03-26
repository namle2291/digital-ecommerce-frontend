import React from "react";
import ProductCol from "../components/Products/Cards/ProductCol";
import FilterProduct from "../components/Filter/FilterProduct";

function Product() {
  return (
    <div>
      <div>
        <FilterProduct />
      </div>
      <div className="grid grid-cols-4 ml-[-20px]">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <ProductCol key={index} />
          ))}
      </div>
    </div>
  );
}

export default Product;
