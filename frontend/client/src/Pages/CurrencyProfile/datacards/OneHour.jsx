import { Typography, Card } from "@mui/material";
import React from "react";
import { cardStyle } from "./styles";

function OneHour({ rate }) {
  return (
    <Card elevation={0} sx={cardStyle}>
      <Typography variant="h6">Change (1h)</Typography>
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
        {rate?.toFixed(2)} %
      </Typography>
    </Card>
  );
}

export default OneHour;
