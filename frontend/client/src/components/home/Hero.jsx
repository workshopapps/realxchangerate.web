import { Box, Typography } from "@mui/material";
import React from "react";
import scan from "../../assets/scan-image.png";
import styles from "./home.module.css";

function Hero() {
  return (
    <Box className={styles.hero}>
      <Typography variant="h4" className={styles.simple}>
        SIMPLE AND QUICK
      </Typography>
      <Typography variant="h1" component="h1">
        Check parallel market rate In Real time
      </Typography>
      <Typography component="p">
        Looking to exchange your money? Check out our application to compare and
        contrast different currencies around the world. With our app, you can
        easily check the bank exchange rates and parallel market rates to get
        the best deal possible.
      </Typography>
      <Box
        className="store"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.4rem",
        }}
      >
        <a href="#!">
          <img src="/apple-store.svg" alt="" />
        </a>
        <a href="#!">
          <img src="/googleplay.svg" alt="" />
        </a>
      </Box>
    </Box>
  );
}

export default Hero;
