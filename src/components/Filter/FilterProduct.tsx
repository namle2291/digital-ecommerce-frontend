import React, { useCallback, useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import Select from "./Select";
import { sort_by } from "../../utils/constants/sort_by";

function FilterProduct() {
  const [active, setActive] = useState("");

  const handleActiveClick = useCallback(
    (name: string) => {
      active === name ? setActive("") : setActive(name);
    },
    [active]
  );

  useEffect(() => {
    const handleBlur = (event: any) => {
      let popup = document.getElementById("filter-popup");
      if (popup && event.target.contains(popup)) {
        setActive("");
      }
    };

    window.addEventListener("click", handleBlur);
    return () => {
      window.removeEventListener("click", handleBlur);
    };
  }, []);

  return (
    <div className="grid grid-cols-12 p-[10px] border my-[15px gap-[30px]">
      <div className="col-span-9">
        <p className="mb-[10px] font-semibold">Filter by</p>
        <div className="flex">
          <FilterItem
            title="Price"
            type="input"
            setActive={handleActiveClick}
            active={active}
          />
          <FilterItem
            title="Color"
            type="checkbox"
            setActive={handleActiveClick}
            active={active}
          />
        </div>
      </div>
      <div className="col-span-3">
        <p className="mb-[10px] font-semibold">Sort by</p>
        <Select data={sort_by} />
      </div>
    </div>
  );
}

export default FilterProduct;
