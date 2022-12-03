import { ListItem, Typography, Box } from "@mui/material";
import React from "react";
import { countries } from "../data";
import { Link } from "react-router-dom";

function Table2({ isocode, country, deleteIcon, rates }) {
  const countryDetails = countries.filter((countr) => countr.label === country);
  return (
    <Box
      justifyContent="space-between"
      display="flex"
      flexDirection="row"
      padding="10px"
      alignItems="center"
      borderTop="1px solid #CBD5E1"
      fontSize="1.4rem"
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

      <Box>{Number(rates.parallel_buy).toFixed(2)}</Box>

      <>
        <Box>{Number(rates.official_buy).toFixed(2)}</Box>

        {deleteIcon}
      </>
    </Box>
  );
}

export default Table2;
