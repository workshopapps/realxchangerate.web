import { Card, Typography } from "@mui/material";
import React from "react";
import { cardStyle } from "./styles";

function OneDay({ rate }) {
  return (
    <Card elevation={0} sx={cardStyle}>
      <Typography variant="h6">Change (24h)</Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: Math.sign(rate) === -1 && "#EF4444" }}
      >
        {rate?.toFixed(2)} %
      </Typography>
    </Card>
  );
}

export default OneDay;
