import { ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { countries } from "../data";
import { Link } from "react-router-dom";
import DeleteIcon from "../assets/delete.svg";

function Table2({ isocode, country, deleteIcon }) {
  const base_url = process.env.REACT_APP_BASE_URL;
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    const fetchRates = async () => {
      const response = await fetch(
        `https://api.streetrates.hng.tech/rate/currency/currencies/${isocode}`
      );
      const data = await response.json();
      return data;
    };
    fetchRates().then((ratesData) => {
      setRates(ratesData.data.rate);
      console.log(setRates);
    });
  }, [base_url, isocode]);

  const countryDetails = countries.filter((countr) => countr.label === country);
  return (
    <ListItem
      sx={{
        display: "flex",
        // alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid #CBD5E1",
        p: "2.3rem 1.3rem",
        fontSize: "1.4rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Box>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${countryDetails[0].code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${countryDetails[0].code.toLowerCase()}.png 2x`}
            alt=""
          />
        </Box>
        <Link>
          <Box>
            <Box style={{ color: "#555962" }}>{isocode}</Box>
            <Box sx={{ fontSize: "1rem", color: "#94A3B8" }}>{country}</Box>
          </Box>
        </Link>
      </Box>
      {rates && (
        <Box
          sx={{ display: "flex", alignItems: "baseline", textAlign: "left" }}
        >
          {Number(rates.parallel_buy).toFixed(2)}
        </Box>
      )}
      {rates && (
        <>
          <Box
            sx={{ display: "flex", alignItems: "baseline", textAlign: "left" }}
          >
            {Number(rates.official_buy).toFixed(2)}
          </Box>

          {deleteIcon}
        </>
      )}
    </ListItem>
  );
}

export default Table2;
