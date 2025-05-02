"use client";
import Link from "next/link";
import React from "react";
/* import ToggleBtn from "./ToggleBtn";
 */ import { RxSun, RxMoon } from "react-icons/rx";

const Nav = () => {
  return (
    <nav className="bg-gray-900 w-[80%] h-[10vh] left-1/2 -translate-x-1/2 text-foreground flex justify-center fixed">
      <ul className="flex gap-32 text-3xl p-5">
        {/* <li>
          <RxSun size={"auto"} />
        </li>
        <li>
          <RxMoon size={"auto"} />
        </li> */}
        <li>
          <Link href="/api_async_await">Api call Async Await</Link>
        </li>
        <li>
          <Link href={"/"}>Inicio</Link>
        </li>
        <li>
          <Link href={"/api_call_suspense"}>Api call con Suspense</Link>
        </li>
        {/* <li>
          <ToggleBtn sizeBtn={"3vw"} />
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
