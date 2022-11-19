import React from "react";
import laptopmob from "../images/illustration-laptop-mobile.svg";

function LaptopSection() {
  return (
    <section className="py-10 font-overpass ">
      <img src={laptopmob} className="mx-auto" />
      <div className=" flex  flex-col items-center">
        <h2 className=" font-[600] text-3xl mt-8 mb-4 text-Verydarkblue">
          Free,open,simple
        </h2>
        <p className=" mb-8 text-Verydarkgrayishblue text-[17px]  text-center w-[65%] ">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h2 className="font-[600] text-3xl mt-8 mb-5 text-Verydarkblue">
          Powerful tooling
        </h2>
        <p className="text-Verydarkgrayishblue text-[17px]  text-center w-[65%]">
          {" "}
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </section>
  );
}

export default LaptopSection;
