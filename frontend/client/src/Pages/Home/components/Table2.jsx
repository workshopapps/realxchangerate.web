import { ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Table2({ isocode }) {
  const base_url = process.env.REACT_APP_BASE_URL;
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(`${base_url}/rate/${isocode}`);
      const data = await response.json();
      return data;
    };
    fetchRates().then((ratesData) => {
      setRates(ratesData.data.rate);
    });
  }, [base_url, isocode]);
  return (
    <ListItem
      sx={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #CBD5E1",
        p: "2.3rem 1.3rem",
        fontSize: "1.4rem",
      }}
    >
      <Box>{isocode}</Box>
      <Box>{rates.parallel_buy}</Box>
      <Box>{rates.official_buy}</Box>
    </ListItem>
  );
}

export default Table2;
