import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../Rate/Rating";

import { numberFormat } from "../../../utils/helpers/formatPrice";

function ProductRow() {
  return (
    <div className="flex">
      <div className="max-w-[84px] pr-[20px]">
        <div className="mb-[20px]">
          <Link to={"/"}>
            <img
              className="object-cover"
              src="https://digital-world-5.myshopify.com/cdn/shop/products/Untitled-1_1_370x.jpg?v=1491405606"
              alt="product_thumb"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <Link to={""}>Xiaomi Mi Pad 3</Link>
        <span className="mb-[10px]">
          <Rating value={5} fs={13} />
        </span>
        <span className="text-[13px]">{numberFormat(4359274)} VND</span>
      </div>
    </div>
  );
}

export default ProductRow;
