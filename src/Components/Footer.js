import React from "react";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <footer className=" font-overpass bg-Verydarkblackblue py-20 rounded-tr-[150px] mt-8 ">
      <div className=" flex flex-col items-center">
        <img src={logo} alt="" />
        <div className="mt-8 ">
          <h2 className=" text-center font-[600] text-xl mb-4 text-White">
            Product
          </h2>
          <ul className="flex text-Grayishblue items-center flex-col gap-2">
            <li>
              {" "}
              <a href="#">Overview</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Pricing</a>{" "}
            </li>
            <li>
              <a href="#">Marketplace</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Features</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Integrations</a>{" "}
            </li>
          </ul>
        </div>
        <div className="mt-8 ">
          <h2 className=" text-center text-xl font-[600] mb-4 text-White">
            Company
          </h2>
          <ul className="flex text-Grayishblue items-center flex-col gap-2">
            <li>
              {" "}
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              {" "}
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="mt-8 ">
          <h2 className=" text-center text-xl font-[600] mb-4 text-White">
            Connect
          </h2>
          <ul className="flex text-Grayishblue items-center flex-col gap-2">
            <li>
              {" "}
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
