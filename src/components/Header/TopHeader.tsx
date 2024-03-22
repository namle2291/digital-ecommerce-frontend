import React from "react";

function TopHeader() {
  return (
    <div className="bg-grey_color py-[10px]">
      <div className="wrapper flex justify-between  text-[12px]">
        <div>
          <span className="px-[12px]">Welcome to our Shop!</span>
        </div>
        <div>
          <a
            href="home"
            className="px-[10px] cursor-pointer hover:text-main_color"
          >
            My Wishlist
          </a>
          <a
            href="home"
            className="px-[10px] cursor-pointer hover:text-main_color"
          >
            My Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
