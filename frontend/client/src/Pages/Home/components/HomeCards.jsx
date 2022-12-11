import { Box, Container } from "@mui/material";
import React from "react";
import image1 from "../assets/home1.svg";
import image2 from "../assets/home2.svg";
import image3 from "../assets/home3.svg";
import Cards from "./Cards";

function HomeCards() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        // alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        gap: 3,
        m: "5rem auto",
      }}
    >
      <Cards
        text="Check out parallel market and bank exchange rates"
        image={image1}
      />
      <Cards
        text="Compare and contrast a wide range of currencies across the world"
        image={image2}
        bg="#00296B"
        color="#fff"
      />
      <Cards text="Get the best deals and exchange your money" image={image3} />
    </Box>
  );
}

export default HomeCards;
