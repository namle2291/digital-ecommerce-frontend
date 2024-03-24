import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import {
  firstUpperCaseAll,
} from "../../utils/helpers/upperCase";

function Breadcrumb() {
  const [category, setCategory] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    let newPath = pathname.slice(1);
    setCategory(newPath);
  }, [location]);

  return (
    <div className="py-[15px] mb-[20px] bg-[#f7f7f7]">
      <div className="wrapper">
        <h3 className="uppercase mb-[10px] font-[600] text-[18px]">
          {firstUpperCaseAll(category)}
        </h3>
        <ul className="flex items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <FaAngleRight className="text-[8px] mx-[3px]" />
          </li>
          <li>
            <span>{firstUpperCaseAll(category)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumb;
