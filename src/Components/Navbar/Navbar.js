import React from 'react'
import { Box } from "@mui/material";
import QtifyLogo from "../../assets/QtifyLogo.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
// import Button from '../Button/Button';


function Navbar() {
  console.log("hello")
  return (
    <div className="bg-[#34C94B] flex items-center justify-between  px-6 py-3">

  <Box component="img" src={QtifyLogo} alt="QtifyLogo" />

  <div className="flex items-center border border-[#121212] rounded-lg overflow-hidden w-[568px] mx-6 h-12 bg-white">
    
    <input
      type="text"
      placeholder="Search a album of your choice"
      className="flex-1 px-4 outline-none text-sm h-full"
    />

    <div className="w-px bg-black h-full"></div>

    <div className="px-4 flex items-center justify-center h-full ">
      <img src={SearchIcon} alt="search" className="h-5 w-5" />
    </div>

  </div>

  <button
  className="
    px-6
    h-[47px]
    bg-[#121212]
    border border-[#34C94B]
    rounded-xl
    text-[#34C94B]
    font-semibold
    text-sm
    cursor-pointer
    font-poppins
    "
>
  Give Feedback
</button>
{/* 
<Button text={"Give Feedback"}/> */}
</div>
  );
}

export default Navbar;
