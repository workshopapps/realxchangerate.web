import { Card, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

function HighLow({ rates }) {
  console.log("Rates in", rates);
  return (
    <Card
      elevation={0}
      sx={{
        border: "0.5px solid #CBD5E1",
        borderRadius: "12px",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        width: { xs: "100%", sm: 300 },
      }}
    >
      <Box>
        <Typography variant="h6">Highest Rate</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {rates.highest}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Lowest Rate</Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {rates.lowest}
        </Typography>
      </Box>
    </Card>
  );
}

export default HighLow;
