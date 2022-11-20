import React from "react";
import machine from "../images/illustration-editor-mobile.svg";
import machineDesk from "../images/illustration-editor-desktop.svg";

function Second() {
  return (
    <section className="   mt-10 p-8  font-overpass md:mt-20 ">
      <h2 className=" text-center font-[600] mb-10 text-Verydarkblue md:text-4xl text-3xl">
        Designed for the future
      </h2>
      <div className="  grid md:grid md:grid-cols-2 md:px-[15rem] md:place-items-center ">
        <div className="mb-20 md:mb-0 md:order-2">
          <picture>
            <source media="(min-width:1000px )" srcSet={machineDesk} />
            <img className="  " src={machine} alt="" />
          </picture>
        </div>
        <div className=" flex flex-col items-center md:items-start md:order-1">
          <h3 className=" text-center md:text-start text-Verydarkblue font-[600] text-3xl w-[80%]  mb-4 ">
            Introducing an extensible editor
          </h3>
          <p className=" md:text-start text-center text-[18px] w-[80%] text-Verydarkgrayishblue ">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3 className="text-center md:text-start text-Verydarkblue font-[600] text-3xl w-[80%] mt-8  mb-4">
            Robust content management
          </h3>
          <p className="text-center md:text-start text-[18px] w-[80%] text-Verydarkgrayishblue">
            lexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Second;
