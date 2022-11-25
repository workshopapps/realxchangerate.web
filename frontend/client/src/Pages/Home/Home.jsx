import { Box, Container } from "@mui/material";
import React from "react";
import Hero from "./components/Hero";
import LiveRate from "./components/LiveRate";
import Table from "./components/Table";

const Home = () => {
  return (
    <Container
      maxWidth="100%"
      sx={{
        display: "flex",
        // flexDirection: { sx: "column", md: "row" },
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Box
        maxWidth="100%"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row-reverse" },
          gap: "1rem",
        }}
      >
        <Hero />
      </Box>
      <LiveRate />
      <Table />
    </Container>
  );
};

export default Home;
