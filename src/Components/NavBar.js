import React from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

function NavBar() {
  return (
    <nav className="p-8 flex justify-between w-[100%] ">
      <img src={logo} alt="" />
      <button>
        {" "}
        <img src={hamburger} alt="" />{" "}
      </button>
    </nav>
  );
}

export default NavBar;
