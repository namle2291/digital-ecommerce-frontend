import { FaPhoneVolume, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-[40px] border-b-2 border-main_color">
      <div className="wrapper flex justify-between">
        <div className="w-[40%] flex">
          <div className="mt-[5px] mr-[15px]">
            <FaPhoneVolume className="text-[25px]" />
          </div>
          <div>
            <div>SUPPORT: (+001) 1234567XXXX</div>
            <div className="extra">Mon - Sat: 9:00AM-5:00PM</div>
          </div>
        </div>
        <div className="pl-[20px] w-[20%]">
          <a href="/">
            <img
              src={logo}
              className="max-w-[80%]  align-middle h-auto"
              alt=""
            />
          </a>
        </div>
        <div className="w-[40%] flex justify-end pl-[20px]">
          <div className="w-[50%] pl-[10px]">
            <form action="" className="relative max-w-[100%]">
              <input
                className="py-[8px] px-[10px] text-text_grey max-w-[100%] border-2 border-main_color"
                type="text"
                placeholder="Search..."
              />
              <button className="border-0 absolute right-0 top-0 w-[40px] h-[40px] outline-none  flex justify-center items-center bg-main_color text-white">
                <FaSearch className="text-[20px]" />
              </button>
            </form>
          </div>
          <div className="flex pl-[20px] hover:text-main_color cursor-pointer">
            <div className="w-[40px] h-[40px] mr-[8px] rounded-full flex justify-center items-center bg-main_color text-white">
              <FaCartShopping className="text-[20px]" />
            </div>
            <Link to={"/cart"}>
              <div className="uppercase font-semibold">Your cart</div>
              <div className="extra">1 item</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
