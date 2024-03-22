import React, { useState } from "react";
import { new_arrival_tabs } from "../../utils/constants/new_arrival_tab";
import ProductCard from "./ProductCard";

const section_header_style = `before:content-[''] 
  before:absolute 
  before:bottom-[15px] 
  before:border-b 
  before:border-main_color 
  before:h-[5px] 
  before:w-[40px] 
  before:left-[50%]
  before:translate-x-[-50%]`;

function NewArrival() {
  const [tabActive, setTabActive] = useState<number>(0);

  return (
    <div>
      <h2
        className={`text-center text-[26px] font-[400] pb-[15px] relative ${section_header_style}`}
      >
        New Arrivals
      </h2>
      <div className="flex justify-center mb-[30px]">
        <ul className="flex">
          {new_arrival_tabs?.map((item, index): any => {
            return (
              <li
                key={index}
                className={`${
                  tabActive === index
                    ? "font-[400]"
                    : "hover:text-main_color tab"
                } mx-[15px] cursor-pointer transition-all`}
                onClick={() => setTabActive(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default NewArrival;
