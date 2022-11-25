import { Box, Container } from "@mui/material";
import React from "react";
import Hero from "./components/Hero";
import LiveRate from "./components/LiveRate"
import Table from "./components/Table"

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        // flexDirection: { sx: "column", md: "row" },
        flexDirection: "column",
        gap: "4rem",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row-reverse" },
          width: "100%",
          gap: "1rem",
        }}
      >
        <Convert />
        <Hero />
      </Box>
      <Table />
    </Container>
  );
};

export default Home;
