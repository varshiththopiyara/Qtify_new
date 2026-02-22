import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

function Section({
  title,
  endpoint,
  showToggle = true,
  showTabs = false,
  isSongs = false,
}) {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(endpoint);
      setData(response.data);
    };

    fetchData();
  }, [endpoint]);

  // Fetch genres only if songs
  useEffect(() => {
    if (showTabs) {
      const fetchGenres = async () => {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/genres"
        );
        setGenres(response.data.data);
      };
      fetchGenres();
    }
  }, [showTabs]);

  // Filter logic for songs
  const filteredData =
    isSongs && selectedGenre !== "all"
      ? data.filter((song) => song.genre.key === selectedGenre)
      : data;

  return (
    <div className="bg-[#121212] px-10 py-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-xl font-bold">
          {title}
        </h2>

        {showToggle && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-[#34C94B] font-semibold"
          >
            {collapsed ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {/* Tabs for Songs */}
      {showTabs && (
        <Tabs
          value={selectedGenre}
          onChange={(e, newValue) => setSelectedGenre(newValue)}
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: "#34C94B" },
          }}
          sx={{
            marginBottom: "24px",
            "& .MuiTab-root": {
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
            },
            "& .Mui-selected": {
              color: "#34C94B",
            },
          }}
        >
          <Tab label="All" value="all" />
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              value={genre.key}
            />
          ))}
        </Tabs>
      )}

      {/* GRID (Albums only) */}
      {showToggle && !collapsed && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {filteredData.map((item) => (
            <div key={item.id} className="w-[180px]">
              <Card
                image={item.image}
                value={item.follows}
                type="album"
              />
              <p className="text-white text-sm mt-2 truncate">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* CAROUSEL */}
      {(collapsed || !showToggle) && (
        <Carousel
          data={filteredData}
          renderItem={(item) => (
            <div className="w-[180px]">
              <Card
                image={item.image}
                value={isSongs ? item.likes : item.follows}
                type={isSongs ? "song" : "album"}
              />
              <p className="text-white text-sm mt-2 truncate">
                {item.title}
              </p>
            </div>
          )}
        />
      )}

    </div>
  );
}

export default Section;