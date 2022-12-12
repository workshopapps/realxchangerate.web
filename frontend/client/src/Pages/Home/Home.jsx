import { Box, useTheme } from "@mui/material";
import React from "react";
import Convert from "../../components/home/Convert";
import Hero from "../../components/home/Hero";

import Download from "../About/components/Download";
import background from "./assets/Waves.png";
import HomeCards from "./components/HomeCards";
import Liverates from "./Liverates";
// import styles from "./";

import "./table.css";

const Home = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  return (
    <>
      <Box
        sx={{
          display: "flex",
          // flexDirection: { sx: "column", md: "row" },
          flexDirection: "column",
          gap: "4rem",
          maxWidth: "1440px",
          margin: "auto",
          p: { xs: "2rem", md: "4rem", lg: "1rem 10rem" },
          pt: { xs: "5rem" },
          backgroundImage: `url(${background})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",

          backgroundColor: dark ? "#131825" : "",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",

            flexDirection: "column",

            gap: "2.4rem",
          }}
        >
          <Hero />
          <Convert />
          <HomeCards />
          <Liverates />
        </Box>
      </Box>
      <Download />
    </>
  );
};

export default Home;
