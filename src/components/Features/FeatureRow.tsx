import React from "react";
import { Link } from "react-router-dom";

function FeatureRow() {
  return (
    <div className="pt-[30px]">
      <div className="wrapper">
        <div className="grid grid-cols-2 items-center">
          <div className="overflow-hidden">
            <img
              src="https://digital-world-5.myshopify.com/cdn/shop/files/70082005_600x600.png?v=1613675854"
              className="object-cover mx-auto"
              alt="product_image"
            />
          </div>
          <div className="pl-[35px] pt-[35px] pb-[35px]">
            <h2 className="mb-[30px] text-[30px] font-[600] uppercase">
              LAPTOP DELL INSPIRON
            </h2>
            <div className="mb-[30px]">
              <p className="mb-[10px]">
                Aliquam tristique ante nec ex lacinia, eget vestibulum risus
                molestie. Integer leo est, faucibus a porta a, vestibulum nec
                lectus. Aliquam sollicitudin faucibus nunc, nec ornare elit
                ultricies ac.{" "}
              </p>
            </div>
            <Link
              to={"/"}
              className="uppercase inline-block py-[11px] px-[30px] bg-[#333] text-white hover:bg-main_color transition-all"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureRow;
