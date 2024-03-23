import React from "react";

const section_header_style = `before:content-[''] 
  before:absolute 
  before:bottom-[15px] 
  before:border-b 
  before:border-main_color 
  before:h-[5px] 
  before:w-[40px] 
  before:left-[50%]
  before:translate-x-[-50%]`;

function SectionHeading({ text }: { text?: string }) {
  return (
    <h2
      className={`text-center text-[26px] font-[400] pb-[15px] relative ${section_header_style}`}
    >
      {text}
    </h2>
  );
}

export default SectionHeading;
