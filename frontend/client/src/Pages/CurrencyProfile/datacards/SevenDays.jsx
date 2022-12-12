import { Card, Typography } from "@mui/material";
import React from "react";
import { cardStyle } from "./styles";

function SevenDays({ rate }) {
  return (
    <Card elevation={0} sx={cardStyle}>
      <Typography variant="h6"> Change (7d)</Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color:
            Math.sign(rate) === -1
              ? "#EF4444"
              : Math.sign(rate) === 1
              ? "#10B981"
              : "",
        }}
      >
        {rate} %
      </Typography>
    </Card>
  );
}

export default SevenDays;
