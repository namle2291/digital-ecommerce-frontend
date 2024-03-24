import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function BlogItem() {
  return (
    <div className="flex flex-col mb-[30px] overflow-hidden">
      <div className="max-h-[253px] mb-[30px]">
        <Link to={""}>
          <img
            className="w-full h-full object-cover"
            src="https://digital-world-5.myshopify.com/cdn/shop/articles/blog13_1024x1024.jpg?v=1492596191"
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to={""} className="hover:text-main_color">
          <h2 className="font-[600] mb-[10px] text-[18px]">
            THESE ARE THE 5 BEST PHONES YOU CAN BUY RIGHT NOW
          </h2>
        </Link>
      </div>
      <div className="text-[13px] mb-[15px] text-[#999]">
        <span>By Le Son Nam</span>
        <span className="before:content-['-'] before:mx-[5px]">2016</span>
      </div>
      <div>
        <p className="mb-[10px]">
          From high-priced pocket-busters to our favorite budget beauties.
          You're up to date on everything you need to know before buying...
        </p>
        <Link
          to={""}
          className="flex items-center gap-[5px] text-main_color hover:text-black"
        >
          <span>Read more</span> <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
