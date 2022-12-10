import { Card, Typography } from "@mui/material";
import React from "react";
import { cardStyle } from "./styles";

function OneMonth({ rate }) {
  return (
    <Card elevation={0} sx={cardStyle}>
      <Typography variant="h6">Change (1m)</Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: Math.sign(rate) === -1 && "#EF4444" }}
      >
        {rate} %
      </Typography>
    </Card>
  );
}

export default OneMonth;
