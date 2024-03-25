import React from "react";

function Contact() {
  return (
    <div className="grid grid-cols-2 pb-[40px] gap-[15px]">
      <div className="h-full">
        <iframe
          title="my-house"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1773.764059349479!2d105.279149338603!3d10.723206453372294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a3b0dfa8ad30f%3A0x7a3e09bfb39d8cba!2zTWFpIFbDoG5nIFBow7ogVGh14bqtbg!5e1!3m2!1svi!2s!4v1711370847059!5m2!1svi!2s"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="h-full">
        <div className="flex flex-col gap-[15px]">
          <div className="flex flex-row gap-[15px]">
            <input
              type="text"
              className="px-[15px] py-[11px] w-full bg-grey_color outline-main_color"
              placeholder="Name"
            />
            <input
              type="text"
              className="px-[15px] py-[11px] w-full bg-grey_color outline-main_color"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="px-[15px] py-[11px] w-full bg-grey_color outline-main_color"
            placeholder="Phone Number"
          />
          <textarea
            className="flex-shrink-0 px-[15px] py-[11px] w-full bg-grey_color outline-main_color"
            placeholder="Message"
            rows={6}
          ></textarea>
          <div className="flex justify-end">
            <span className="uppercase cursor-pointer mb-[10px] px-[15px] py-[11px] bg-main_color text-white">
              SEND
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
