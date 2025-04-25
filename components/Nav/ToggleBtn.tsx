"Use client";
import React, { useState } from "react";
import { RxSun, RxMoon } from "react-icons/rx";

interface toggleProps {
  sizeBtn: string;
}

const ToggleBtn = (props: toggleProps) => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <button onClick={handleToggle} className="cursor-pointer">
      <div className={`w-[${props.sizeBtn}] h-[${props.sizeBtn}] relative`}>
        <div
          className={`absolute top-0 transform transition-all ease-in-out duration-500 ${
            toggle ? "" : "opacity-0 pointer-events-none"
          }  `}
        >
          <RxSun size={props.sizeBtn} />
        </div>

        <div
          className={`absolute top-0 transform transition-all ease-in-out duration-500 ${
            toggle ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <RxMoon size={props.sizeBtn} />
        </div>
      </div>
    </button>
  );
};

export default ToggleBtn;
