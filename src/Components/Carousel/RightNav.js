import React from "react";
import RightIcon from "../../assets/RightNavigation.svg";

function RightNav({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full cursor-pointer" >
      <img src={RightIcon} alt="right" className="w-10 h-10" />
    </button>
  );
}

export default RightNav;
