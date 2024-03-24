import React from "react";
import { LuMapPin } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function MiddleFooter() {
  return (
    <div className="py-[50px]">
      <div className="wrapper">
        <div className="grid grid-cols-12">
          <div className="col-span-5">
            <div
              className="uppercase font-[600] text-[15px] pl-[15px] mb-[20px] border-l-[4px] 
                border-main_color"
            >
              ABOUT US
            </div>
            <ul>
              <li className="mb-[10px] text-[13px] flex gap-[10px] items-center">
                <LuMapPin /> <span>Address: Dong Thap</span>
              </li>
              <li className="mb-[10px] text-[13px] flex gap-[10px] items-center">
                <FaPhone />
                <span>Phone: 0123456789</span>
              </li>
              <li className="mb-[10px] text-[13px] flex gap-[10px] items-center">
                <MdEmail />
                <span>Mail: lnam6507@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="col-span-7 grid grid-cols-3">
            <div>
              <div
                className="uppercase font-[600] text-[15px] pl-[15px] mb-[20px] border-l-[4px] 
                border-main_color"
              >
                INFORMATION
              </div>
              <ul>
                <li className="mb-[10px] text-[13px]">Typography</li>
                <li className="mb-[10px] text-[13px]">Gallery</li>
                <li className="mb-[10px] text-[13px]">Store Location</li>
                <li className="mb-[10px] text-[13px]">Today's Deals</li>
                <li className="mb-[10px] text-[13px]">Contact</li>
              </ul>
            </div>
            <div>
              <div
                className="uppercase font-[600] text-[15px] pl-[15px] mb-[20px] border-l-[4px] 
                border-main_color"
              >
                INFORMATION
              </div>
              <ul>
                <li className="mb-[10px] text-[13px]">Help</li>
                <li className="mb-[10px] text-[13px]">Free Shipping</li>
                <li className="mb-[10px] text-[13px]">FAQs</li>
                <li className="mb-[10px] text-[13px]">Return & Exchange</li>
                <li className="mb-[10px] text-[13px]">Testimonials</li>
              </ul>
            </div>
            <div>
              <div
                className="uppercase font-[600] text-[15px] pl-[15px] mb-[20px] border-l-[4px] 
                border-main_color"
              >
                #DIGITALWORLDSTORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleFooter;
