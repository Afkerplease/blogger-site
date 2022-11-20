import React from "react";
import NavBar from "./NavBar";
import "../App.css";

function Header() {
  return (
    <section className=" relative  w-[100%]   bg-gradient-to-r from-Verylightred to-Lightred  rounded-bl-[100px]    font-overpass  ">
      <NavBar />

      <div className="    p-20">
        <div className=" flex flex-col gap-8">
          <h1 className=" text-4xl md:text-[5rem] md:mb-8 font-[600]  mb-4 text-White text-center ">
            {" "}
            A modern publishing platform
          </h1>
          <p className=" md:text-[22px]  text-center text-[20px] text-Grayishblue">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className="flex gap-4 justify-center mt-8 ">
          <button className=" transition-all ease-out duration-150 bg-White p-4 rounded-full font-[600] hover:text-White hover:bg-Verylightred2 text-Lightred">
            Start for Free
          </button>
          <button className=" transition-all ease-out duration-150 hover:bg-White hover:text-Verylightred2 text-White bg-transparent border-[1px] border-White rounded-full p-4 font-[600] ">
            {" "}
            Learn more{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
