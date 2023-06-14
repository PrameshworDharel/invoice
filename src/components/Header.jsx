import React, { useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/image-avatar.jpg";

function Header() {
  return (
    <div>
      {/* SideBar */}
      <nav className=" ">
        <div className="bg-Dark w-[100px] rounded-r-3xl  flex-col  top-0 left-0 h-screen ">
          <div className=" h-full w-full flex flex-col justify-between items-center">
            <img src={logo} className="relative" />
            <div>
              <hr className=" w-[100px] h-2 border-dotted border-t border-secondary my-6"></hr>
              <div className=" relative  ml-4 mb-4 ">
                <img src={profile} className="h-[50px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
