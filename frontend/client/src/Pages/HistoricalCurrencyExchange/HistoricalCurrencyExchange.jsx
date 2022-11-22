import React from "react"
import {Box} from "@mui/material";
import TopComponent from "./components/Top"
import MainComponent from "./components/Main"



const HistoricalCurrencyExchange = () => {
  const datas = [
    { isocode: 'ibk', bank: '450', parallel: '700', flag: '' },
    { isocode: 'ibk', bank: '450', parallel: '700', flag: '' },
  ];


  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" className='flex flex-col w-full items-center'>
      {/* <Header/> */}
      <TopComponent />
      <MainComponent data={datas} />
    </Box>
  );
};

export default HistoricalCurrencyExchange;
