import React from "react";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className=" font-overpass bg-Verydarkblackblue py-20 md:px-[10rem]  rounded-tr-[150px] mt-8 ">
      <div className=" flex flex-col md:grid md:grid-cols-4 md:place-items-center items-center">
        <img src={logo} alt="" className=" md:mx-auto md:self-start" />
        <div className="mt-8 md:mt-0 ">
          <h2 className=" text-center font-[600] text-xl mb-4 text-White">
            Product
          </h2>
          <ul className="flex text-Grayishblue items-center flex-col gap-2">
            <li>
              {" "}
              <a href="#" className="hover:underline">
                Overview
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className=" hover:underline">
                Pricing
              </a>{" "}
            </li>
            <li>
              <a href="#" className=" hover:underline">
                Marketplace
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className=" hover:underline">
                Features
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className=" hover:underline">
                Integrations
              </a>{" "}
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col  ">
          <h2 className=" text-center text-xl font-[600] mb-4 text-White">
            Company
          </h2>
          <ul className="flex text-Grayishblue items-center flex-col gap-2">
            <li>
              {" "}
              <a href="#" className="hover:underline">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0 ">
          <h2 className=" text-center text-xl font-[600] mb-4 text-White">
            Connect
          </h2>
          <ul className="flex text-Grayishblue items-center flex-col gap-2">
            <li>
              {" "}
              <a href="#" className=" hover:underline">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className=" hover:underline">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
