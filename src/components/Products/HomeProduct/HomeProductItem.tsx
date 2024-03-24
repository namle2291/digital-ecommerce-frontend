import React from "react";
import ProductRow from "../Cards/ProductRow";

function HomeProductItem({ category = "Category" }: { category?: string }) {
  return (
    <div>
      <div className="font-[600] uppercase mb-[30px] pb-[5px] border-b-2 text-[18px]">
        {category}
      </div>
      <div className="grid grid-rows-3 gap-[30px]">
        <ProductRow />
        <ProductRow />
        <ProductRow />
      </div>
    </div>
  );
}

export default HomeProductItem;
