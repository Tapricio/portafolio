"use client";
import React, { useState } from "react";
import ToggleBtn from "./ToggleBtn";

const Nav = () => {
  return (
    <div className="w-full h-[10vh] bg-background text-foreground flex justify-center fixed">
      <div className=" w-[80%]">
        <ul className="flex justify-end gap-7 ">
          <li>nostros</li>
          <li>contacto</li>
          <li>login</li>
          <li>
            <ToggleBtn sizeBtn={"40px"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
