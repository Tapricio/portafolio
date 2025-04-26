"use client";
import React from "react";
import ToggleBtn from "./ToggleBtn";
import { RxSun, RxMoon } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="w-[80%] h-[10vh] left-1/2 -translate-x-1/2 text-foreground flex justify-center fixed">
      <ul className="flex gap-7 text-3xl p-5">
        {/* <li>
          <RxSun size={"auto"} />
        </li>
        <li>
          <RxMoon size={"auto"} />
        </li> */}
        <li>
          <ToggleBtn sizeBtn={"40px"} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
