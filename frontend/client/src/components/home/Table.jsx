import { Box, Typography } from "@mui/material";
import React from "react";
import { currenciesList } from "../../Pages/Home/data";

const HeaderTable = ({ name, parallel }) => {
  <Box color="grey" sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography>{name}</Typography>
    <Typography>{parallel}</Typography>
  </Box>;
};
const Table = (props) => {
  const RowTable = ({ isocode }) => {
    const [rate, setRate] = React.useState({});
    const base_url = process.env.REACT_APP_BASE_URL;

    React.useEffect(() => {
      const fetchRates = async () => {
        const response = await fetch(`${base_url}/rate/${isocode}`);
        const data = await response.json();
        return data;
      };
      fetchRates().then((ratesData) => {
        console.log(ratesData);
        setRate(ratesData.data?.rate);
      });
    }, [base_url, isocode]);
    return (
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "bold" }}>{isocode}</Typography>
          <Typography>{rate?.country}</Typography>
        </Box>

        <Box>{rate?.amount}</Box>
      </Box>
    );
  };
  return (
    <Box>
      <HeaderTable name="Currency" parallel="Parrallel" />
      {currenciesList.map((list) => (
        <RowTable
          key={list.isocode}
          isocode={list.isocode}
          sx={{ borderBottom: "2px solid black" }}
          currency={list.currency}
          amount={list.amount}
          country={list.country}
        />
      ))}
    </Box>
  );
};

export default Table;
