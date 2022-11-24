import React from "react";
import { Box } from "@mui/material";
import TopComponent from "./components/Top";
import MainComponent from "./components/Main";

const HistoricalCurrencyExchange = () => {
  const datas = [
    { isocode: "ibk", bank: "450", parallel: "700", flag: "" },
    { isocode: "ibk", bank: "450", parallel: "700", flag: "" },
  ];

  return (
    <Box width="84%" display="flex" margin="auto" flexDirection="column" alignItems="center" justifyContent="space-between">
      <TopComponent />
      <MainComponent data={datas} />
    </Box>
  );
};

export default HistoricalCurrencyExchange;
