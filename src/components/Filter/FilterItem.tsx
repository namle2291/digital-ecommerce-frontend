import React, { memo, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { colors_filter } from "../../utils/constants/colors";

type Props = {
  title?: string;
  type?: string;
  active?: string;
  setActive?: any;
};

function FilterItem({ title, type = "input", active, setActive }: Props) {
  const [colorSelected, setColorSelected] = useState<any[]>([]);

  const handleSelectColor = (color: any) => {
    setColorSelected((prev) => {
      const colorExists = prev.find((item) => item === color);

      return colorExists
        ? prev.filter((item) => item !== color)
        : [...prev, color];
    });
  };

  return (
    <div className="popup-btn relative px-[15px] h-[45px] border mr-[.5rem] cursor-pointer">
      <div
        className="flex items-center h-full text-text_grey gap-[20px]"
        onClick={() => setActive(title)}
      >
        <span>{title}</span>
        <FaAngleDown />
      </div>
      {active === title && (
        <>
          <div
            id="filter-popup"
            className="filter-popup absolute mt-[5px] z-[9999] bg-white w-[350px] left-0 border"
          >
            {type === "input" && (
              <>
                <div className="py-[15px] px-[20px] flex justify-between items-center border-b">
                  <span>The highest price is 13.627.376,16 VND</span>
                  <span className="underline underline-offset-[3px]">
                    Reset
                  </span>
                </div>
                <div className="border px-[20px] py-[15px] grid grid-cols-2 gap-[10px] w-full">
                  <div>
                    <label htmlFor="" className="flex items-center gap-[10px]">
                      <span>$</span>
                      <input
                        id="price_from"
                        type="number"
                        className="h-[44px] flex-1 pl-[10px] w-[50%]"
                        placeholder="From"
                        min={1}
                      />
                    </label>
                  </div>
                  <div>
                    <label htmlFor="" className="flex items-center gap-[10px]">
                      <span>$</span>
                      <input
                        id="price_from"
                        type="number"
                        className="h-[44px] flex-1 pl-[10px] w-[50%]"
                        placeholder="To"
                        min={1}
                      />
                    </label>
                  </div>
                </div>
              </>
            )}
            {type === "checkbox" && (
              <>
                <div className="py-[15px] px-[20px] flex justify-between items-center border-b">
                  <span>0 selected</span>
                  <span className="underline underline-offset-[3px]">
                    Reset
                  </span>
                </div>
                <ul className="px-[20px] py-[15px] flex flex-col">
                  {colors_filter.map((item) => (
                    <li key={item} className={`leading-[2.5em]`}>
                      <label
                        htmlFor={`color-${item}`}
                        className="relative flex items-center cursor-pointer"
                      >
                        <input
                          id={`color-${item}`}
                          className="mr-[5px]"
                          type="checkbox"
                          value={item}
                          onChange={() => handleSelectColor(item)}
                        />
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default memo(FilterItem);
