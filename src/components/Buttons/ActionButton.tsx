import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineEye,
} from "react-icons/ai";
import { Link } from "react-router-dom";

type ButtonType = {
  showAddToCart?: boolean;
};

function ActionButton({ showAddToCart }: ButtonType) {
  return (
    <div className="flex justify-center">
      <ul className="flex">
        <li className="w-[40px] h-[40px] border rounded-full flex justify-center items-center text-[16px] mx-[5px] cursor-pointer hover:btn-hover transition-all">
          <AiOutlineHeart />
        </li>
        <li className="w-[40px] h-[40px] border rounded-full flex justify-center items-center text-[16px] mx-[5px] cursor-pointer hover:btn-hover transition-all">
          {showAddToCart ? <AiOutlineShoppingCart /> : <AiOutlineMenu />}
        </li>
        <li className="w-[40px] h-[40px] border rounded-full flex justify-center items-center text-[16px] mx-[5px] cursor-pointer hover:btn-hover transition-all">
          <AiOutlineEye />
        </li>
      </ul>
    </div>
  );
}

export default ActionButton;
