import React from "react";

function Select({ data }: { data: any[] }) {
  return (
    <div className="pr-[10px] border">
      <select className="px-[20px] py-[15px] w-full outline-none">
        {data.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
