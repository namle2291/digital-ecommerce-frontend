import React from "react";
import { CiBoxList } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b">
      <div className="wrapper">
        <div className="flex">
          <div className="w-[280px] relative group">
            <div className="py-[14px] px-[20px] flex items-center bg-main_color text-white">
              <CiBoxList className="mr-[10px] text-[20px]" />
              <span>ALL COLLECTIONS</span>
            </div>
            <div className="absolute left-0 right-0 border z-50 bg-white hidden group-hover:block">
              <ul className="border">
                <li className="group-hover:animate-slide_bottom">
                  <Link to={"/"} className="flex gap-[10px]">
                    <img
                      src="https://digital-world-5.myshopify.com/cdn/shop/t/7/assets/camera.png?v=45506051278225345681628340845"
                      alt=""
                      className="w-[20px] h-[20px] object-cover"
                    />
                    <span>Smartphone</span>
                  </Link>
                </li>
                <li className="group-hover:animate-slide_bottom">
                  <Link to={"/"} className="flex gap-[10px]">
                    <img
                      src="https://digital-world-5.myshopify.com/cdn/shop/t/7/assets/camera.png?v=45506051278225345681628340845"
                      alt=""
                      className="w-[20px] h-[20px] object-cover"
                    />
                    <span>Tablet</span>
                  </Link>
                </li>
                <li className="group-hover:animate-slide_bottom">
                  <Link to={"/"} className="flex gap-[10px]">
                    <img
                      src="https://digital-world-5.myshopify.com/cdn/shop/t/7/assets/camera.png?v=45506051278225345681628340845"
                      alt=""
                      className="w-[20px] h-[20px] object-cover"
                    />
                    <span>Laptop</span>
                  </Link>
                </li>
                <li className="group-hover:animate-slide_bottom">
                  <Link to={"/"} className="flex gap-[10px]">
                    <img
                      src="https://digital-world-5.myshopify.com/cdn/shop/t/7/assets/camera.png?v=45506051278225345681628340845"
                      alt=""
                      className="w-[20px] h-[20px] object-cover"
                    />
                    <span>Camera</span>
                  </Link>
                </li>
                <li className="group-hover:animate-slide_bottom">
                  <Link to={"/"} className="flex gap-[10px]">
                    <img
                      src="https://digital-world-5.myshopify.com/cdn/shop/t/7/assets/camera.png?v=45506051278225345681628340845"
                      alt=""
                      className="w-[20px] h-[20px] object-cover"
                    />
                    <span>Television</span>
                  </Link>
                </li>
                <li className="group-hover:animate-slide_bottom">
                  <Link to={"/"} className="flex gap-[10px]">
                    <img
                      src="https://digital-world-5.myshopify.com/cdn/shop/t/7/assets/camera.png?v=45506051278225345681628340845"
                      alt=""
                      className="w-[20px] h-[20px] object-cover"
                    />
                    <span>Printer</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <ul className="flex uppercase">
              <li className="py-[14px] px-[15px]">
                <Link to={"/"}>
                  <span>Home</span>
                </Link>
              </li>
              <li className="py-[14px] px-[15px]">
                <Link to={"/products"}>
                  <span>Products</span>
                </Link>
              </li>
              <li className="py-[14px] px-[15px]">
                <Link to={"/blogs"}>
                  <span>Blog</span>
                </Link>
              </li>
              <li className="py-[14px] px-[15px]">
                <Link to={"/contact-us"}>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
