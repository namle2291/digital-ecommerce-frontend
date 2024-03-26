import React from "react";
import ProductCol from "../Products/Cards/ProductCol";
import SectionHeading from "../Heading/SectionHeading";

function FeaturedProduct() {
  return (
    <div className="pb-[30px]">
      <SectionHeading text="Featured Products" />
      <div className="grid grid-cols-4 ml-[-20px]">
        <div className="col-span-1">
          <div className="grid grid-rows-2">
            <div className="">
              <ProductCol />
            </div>
            <div className="">
              <ProductCol />
            </div>
          </div>
        </div>
        <div className="col-span-2 ">
          <ProductCol isLarge={true} />
        </div>
        <div className="col-span-1">
          <div className="grid grid-rows-2">
            <div className="">
              <ProductCol />
            </div>
            <div className="">
              <ProductCol />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
