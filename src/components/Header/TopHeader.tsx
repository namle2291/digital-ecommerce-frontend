import React from "react";

function TopHeader() {
  return (
    <div className="bg-grey_color py-[10px]">
      <div className="wrapper flex justify-between  text-[12px]">
        <div>
          <span className="px-[12px]">Welcome to my shop!</span>
        </div>
        <div>
          <a href="" className="px-[10px]">
            My Wishlist
          </a>
          <a href="" className="px-[10px]">
            My Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
