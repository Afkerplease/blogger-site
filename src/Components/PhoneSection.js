import React from "react";
import twoPhone from "../images/illustration-phones.svg";
import "../App.css";

function PhoneSection() {
  return (
    <section className=" mt-[20rem] md:mt-[10rem] phoneDiv md:mb-[10rem] h-[650px] md:h-[400px]  font-overpass  relative bg-Verydarkdesaturatedblue rounded-tr-[150px] rounded-bl-[150px]    pb-20 ">
      <div className="md:grid md:grid-cols-2">
        <div className=" ">
          <img
            src={twoPhone}
            className="absolute -top-[40%] md:-top-[10%] md:left-[10%] "
            alt=""
          />
        </div>
        <div className="flex  flex-col pt-[15rem] md:pt-[8rem]   md:items-start items-center">
          <h2 className=" md:text-start text-center text-4xl w-[70%] font-[600] text-White md:mt-0 md:mb-0 mt-10 mb-5 ">
            State of the Art Infrastructure
          </h2>
          <p className=" md:text-[18px] md:text-start text-center w-[60%] text-[16px] font-[300] text-Grayishblue">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhoneSection;
