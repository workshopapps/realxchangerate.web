import React, { useEffect } from "react";
import { Box, Switch, Typography } from "@mui/material";
import TopComponent from "./components/Top";
import MainComponent from "./components/Main";
import { useSelector } from "react-redux";
import { GetCurrencyRates } from "../../redux/features/Reducers/serviceActions";
import { dispatch } from "../../redux/store";

const HistoricalCurrencyExchange = () => {
  const { currencyList, currencyRates } = useSelector((state) => state.service);

  useEffect(() => {
    if (currencyList.length > 0) {
      dispatch(GetCurrencyRates(currencyList));
    }
  }, []);

  return (
    <Box
      margin="auto"
      sx={{ width: { xs: "95%", sm: "90%", md: "84%" } }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="flex flex-col w-full items-center"
    >
      <TopComponent />
      <Box
        sx={{ display: { xs: "none", sm: "flex" } }}
        flexDirection="row"
        width="100%"
      >
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

      {currencyRates.length > 0 && <MainComponent data={currencyRates} />}
    </Box>
  );
};

export default HistoricalCurrencyExchange;
