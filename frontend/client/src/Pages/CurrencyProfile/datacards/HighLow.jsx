import { Card, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { cardStyle } from "./styles";

function HighLow({ rates }) {
  console.log("Rates in", rates);
  return (
    <Card elevation={0} sx={{ ...cardStyle, width: { xs: "100%", sm: 300 } }}>
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
