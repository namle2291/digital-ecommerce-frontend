import React from "react";
import { CiMail } from "react-icons/ci";
function TopFooter() {
  return (
    <div className="bg-main_color py-[25px]">
      <div className="wrapper">
        <div className="grid grid-cols-2 items-center">
          <div>
            <div className="mt-[11px] font-[400] text-[20px] uppercase text-white">
              SIGN UP TO NEWSLETTER
            </div>
            <div className="text-gray-300">
              Subscribe now and receive weekly newsletter
            </div>
          </div>
          <div className="relative">
            <input
              className="px-[20px] h-[50px] w-full outline-none border-none 
                rounded-3xl 
                bg-[rgba(255,255,255,.2)] placeholder-white 
                text-white"
              type="email"
              placeholder="Email address"
            />
            <span className="absolute top-0 right-0 px-[25px] cursor-pointer">
              <CiMail className="h-[50px] leading-[50px] text-center text-[20px] text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
