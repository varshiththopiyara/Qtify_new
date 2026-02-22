import React from "react";
import { Chip } from "@mui/material";

function Card({ image, value, type }) {
  return (
    <div className="w-[180px] rounded-lg overflow-hidden bg-white flex-shrink-0 cursor-pointer border-none">
      
      <div className="h-[200px] overflow-hidden">
        <img
          src={image}
          alt="item"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#121212] p-3">
        <Chip
          label={
            type === "song"
              ? `${value} Likes`
              : `${value} Follows`
          }
          size="small"
          sx={{
            backgroundColor: "#fff",
            fontSize: "11px",
            height: "22px",
          }}
        />
      </div>
    </div>
  );
}

export default Card;