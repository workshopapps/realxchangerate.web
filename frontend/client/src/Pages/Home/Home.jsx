import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";
import Convert from "../../components/home/Convert";
import Hero from "../../components/home/Hero";
import Table from "./components/Table";
import Table2 from "./components/Table2";
import { currenciesList } from "./data";

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
          gap: "2.4rem",
        }}
      >
        <Convert />
        <Hero />
      </Box>
      <Box>
        <Typography
          sx={{ color: "#0062FF", fontSize: "1.3rem", fontWeight: 500 }}
        >
          LIVE RATES
        </Typography>
        <Typography component="h2" sx={{ fontSize: "2rem", fontWeight: 800 }}>
          Live rates of popular currencies in Africa
        </Typography>
      </Box>
      {/* Table  */}
      <List>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#F1F5F9",
            fontSize: "1.7rem",
            p: "1.5rem",
            fontWeight: 600,
          }}
        >
          <Box>Currency</Box>
          <Box>parallel Rate</Box>
          <Box>Bank Rate</Box>
        </ListItem>
        {currenciesList.map((currency) => (
          <Table2 isocode={currency.isocode} key={currency.id} />
        ))}
      </List>
    </Container>
  );
};

export default Home;
