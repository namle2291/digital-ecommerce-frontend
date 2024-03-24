import React from "react";

function BottomFooter() {
  return (
    <div className="bg-[#000] py-[20px]">
      <div className="wrapper">
        <div className="text-center text-gray-300">
          © {new Date().getFullYear()}, Le Son Nam
        </div>
      </div>
    </div>
  );
}

export default BottomFooter;
