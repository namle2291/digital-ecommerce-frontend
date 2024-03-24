import React from "react";
import HomeProductItem from "./HomeProductItem";

function HomeProduct() {
  return (
    <div>
      <div className="wrapper">
        <div className="grid grid-cols-4">
          <HomeProductItem category="SMARTPHONE" />
          <HomeProductItem category="TABLET" />
          <HomeProductItem category="LAPTOP" />
          <HomeProductItem category="ACCESSORIES" />
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
