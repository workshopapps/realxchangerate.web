import React from "react";
import { Box, Switch, Typography } from "@mui/material";
import TopComponent from "./components/Top";
import MainComponent from "./components/Main";

const HistoricalCurrencyExchange = () => {
  const datas = [
    { isocode: "ibk", bank: "450", parallel: "700", flag: "" },
    { isocode: "ibk", bank: "450", parallel: "700", flag: "" },
  ];

  return (
    <Box
      width="84%"
      display="flex"
      margin="auto"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{width:{xs:"95%", sm:"84%"}}}
    >

      <TopComponent />
      <Box sx={{display:{xs:"none", sm:"flex"}}} flexDirection="row" width="100%">
        <Box
          margin="8px 0px 2px auto"
          display="flex"
          spacing="2px"
          flexDirection="column"
          sx={{ width: { sm: "33%" } }}
        >
          <Typography
            fontSize="14px"
            lineHeight="20px"
            fontWeight="400"
            color="#6B7280"
          >
            Show Parallel Rates
          </Typography>

          <Switch color="success" />
        </Box>
      </Box>
      <MainComponent data={datas} />
    </Box>
  );
};

export default HistoricalCurrencyExchange;
