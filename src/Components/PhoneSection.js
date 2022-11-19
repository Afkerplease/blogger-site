import React from "react";
import twoPhone from "../images/illustration-phones.svg";
import "../App.css";

function PhoneSection() {
  return (
    <section className=" mt-[15rem] phoneDiv h-[650px] font-overpass  relative bg-Verydarkdesaturatedblue rounded-tr-[130px] rounded-bl-[130px]   pb-20 ">
      <div className="phoneDiv ">
        <img src={twoPhone} className="absolute -top-[40%] " alt="" />
      </div>
      <div className="flex flex-col pt-[15rem] items-center">
        <h2 className=" text-center text-4xl w-[70%] font-[600] text-White mt-10 mb-5 ">
          State of the Art Infrastructure
        </h2>
        <p className=" text-center w-[60%] text-[16px] font-[300] text-Grayishblue">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
}

export default PhoneSection;
