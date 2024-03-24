import React, { useState } from "react";
import { new_arrival_tabs } from "../../../utils/constants/new_arrival_tab";
import ProductCol from "../Cards/ProductCol";
import SectionHeading from "../../Heading/SectionHeading";

function NewArrival() {
  const [tabActive, setTabActive] = useState<number>(0);

  return (
    <div>
      <SectionHeading text="New Arrivals" />
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
        <ProductCol />
        <ProductCol />
        <ProductCol />
        <ProductCol />
        <ProductCol />
        <ProductCol />
        <ProductCol />
        <ProductCol />
      </div>
    </div>
  );
}

export default NewArrival;
