import React from "react";
import ProductCard from "../Products/ProductCard";
import SectionHeading from "../Heading/SectionHeading";

function FeaturedProduct() {
  return (
    <div>
      <div className="wrapper">
        <SectionHeading text="Featured Products" />
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <div className="grid grid-rows-2">
              <div className="">
                <ProductCard />
              </div>
              <div className="">
                <ProductCard />
              </div>
            </div>
          </div>
          <div className="col-span-2 ">
            <ProductCard isLarge={true} />
          </div>
          <div className="col-span-1">
            <div className="grid grid-rows-2">
              <div className="">
                <ProductCard />
              </div>
              <div className="">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
