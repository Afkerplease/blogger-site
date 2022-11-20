import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

function NavBar() {
  const [iconClicked, setIconClicked] = useState(false);
  const [iconCompanyClicked, setIconCompanyClicked] = useState(false);
  const [iconConnectClicked, setIconConnectClicked] = useState(false);
  const iconhandle = () => {
    setIconClicked(!iconClicked);
  };
  const iconCompanyhandle = () => {
    setIconCompanyClicked(!iconCompanyClicked);
  };
  const iconConnecthandle = () => {
    setIconConnectClicked(!iconConnectClicked);
  };
  return (
    <nav className="  font-overpass p-8 md:px-[5rem] md:py-[3rem] flex justify-between w-[100%] ">
      <div className=" flex items-center  ">
        <img src={logo} alt="" />
        <div className=" relative hidden md:block">
          <ul className="flex gap-8 ml-10 text-White ">
            <li className=" flex items-center gap-1 ">
              <a
                href="#"
                className=" hover:underline font-[600] hover:text-White text-Verydarkgrayishblue"
              >
                Product
              </a>{" "}
              {iconClicked ? (
                <MdKeyboardArrowUp
                  onClick={iconhandle}
                  className=" text-Verydarkgrayishblue cursor-pointer text-[20px] hover:text-White "
                />
              ) : (
                <MdKeyboardArrowDown
                  onClick={iconhandle}
                  className=" text-Verydarkgrayishblue cursor-pointer text-[20px] hover:text-White "
                />
              )}
              {iconClicked && (
                <div className=" font-overpass rounded-[10px] bg-White absolute p-8 w-[150px] -left-[10%] shadow-xl top-[170%] ">
                  <ul className="flex text-Verydarkblackblue items-start flex-col gap-2">
                    <li>
                      {" "}
                      <a className=" hover:font-[600]" href="#">
                        Overview
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className=" hover:font-[600]">
                        Pricing
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#" className=" hover:font-[600]">
                        Marketplace
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className=" hover:font-[600]">
                        Features
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className=" hover:font-[600]">
                        Integrations
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="flex items-center gap-1">
              <a
                href="#"
                className=" hover:underline font-[600] hover:text-White text-Verydarkgrayishblue "
              >
                Company
              </a>{" "}
              {iconCompanyClicked ? (
                <MdKeyboardArrowUp
                  onClick={iconCompanyhandle}
                  className=" cursor-pointer text-[20px] text-Verydarkgrayishblue hover:text-White "
                />
              ) : (
                <MdKeyboardArrowDown
                  onClick={iconCompanyhandle}
                  className=" cursor-pointer text-[20px] text-Verydarkgrayishblue hover:text-White "
                />
              )}
              {iconCompanyClicked && (
                <div className=" font-overpass rounded-[10px] bg-White absolute p-8 w-[150px] left-[40%] shadow-xl top-[170%] ">
                  <ul className="flex text-Verydarkblackblue items-start flex-col gap-2">
                    <li>
                      {" "}
                      <a className=" hover:font-[600]" href="#">
                        About
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className=" hover:font-[600]">
                        Team
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#" className=" hover:font-[600]">
                        Blog
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className=" hover:font-[600]">
                        Careers
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="flex items-center gap-1">
              <a
                href="#"
                className=" hover:underline font-[600] hover:text-White text-Verydarkgrayishblue"
              >
                Connect
              </a>{" "}
              {iconConnectClicked ? (
                <MdKeyboardArrowUp
                  onClick={iconConnecthandle}
                  className=" cursor-pointer text-[20px] text-Verydarkgrayishblue hover:text-White "
                />
              ) : (
                <MdKeyboardArrowDown
                  onClick={iconConnecthandle}
                  className=" cursor-pointer text-[20px] text-Verydarkgrayishblue hover:text-White "
                />
              )}
              {iconConnectClicked && (
                <div className=" font-overpass rounded-[10px] bg-White absolute p-8 w-[150px] left-[92%] shadow-xl top-[170%] ">
                  <ul className="flex text-Verydarkblackblue items-start flex-col gap-2">
                    <li>
                      {" "}
                      <a className=" hover:font-[600]" href="#">
                        Contact
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className=" hover:font-[600]">
                        Newsletter
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#" className=" hover:font-[600]">
                        LinkedIn
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* 2button div */}
      <div className=" md:flex gap-8 hidden">
        <button className=" text-White font-[600] ">Login</button>
        <button className=" font-[600] bg-White transition-colors ease-out  duration-150 text-Lightred hover:text-White hover:bg-Verylightred2 px-8 rounded-full">
          Sign Up{" "}
        </button>
      </div>
      <button className=" md:hidden">
        {" "}
        <img src={hamburger} alt="" />{" "}
      </button>
    </nav>
  );
}

export default NavBar;
