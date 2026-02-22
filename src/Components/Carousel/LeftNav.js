import React from "react";
import LeftIcon from "../../assets/LeftNavigation.svg";

function LeftNav({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10  p-2 rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
    >
      <img src={LeftIcon} alt="left" className="w-10 h-10" />
    </button>
  );
}

export default LeftNav;