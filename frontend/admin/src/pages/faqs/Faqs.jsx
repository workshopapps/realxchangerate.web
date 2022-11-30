import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import FaqsCard from "./Cards";

function Faqs() {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        className="header"
        sx={{ display: "flex", gap: "1rem", m: "2rem 0" }}
      >
        <Button onClick={() => navigate("/")}>
          <img src={back} alt="Go back" />
        </Button>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Frequently Asked Questions
        </Typography>
      </Box>
      <FaqsCard />
    </Container>
  );
}

export default Faqs;
