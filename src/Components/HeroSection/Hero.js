import React from 'react'
import { Box } from '@mui/material'
import Headphones from "../../assets/Headphones.svg"

function Hero() {
  return (
    <div className="bg-[#121212] flex  items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-2xl">
          100 Thousand Songs, ad-free
        </h1>

        <h1 className="text-white font-bold text-2xl">
          Over thousands podcast episodes
        </h1>
      </div>
      <Box component="img" src={Headphones} alt="Headphones.svg" />
    </div>
  );
}

export default Hero
