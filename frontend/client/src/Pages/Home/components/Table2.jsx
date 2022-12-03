import { ListItem, Typography, Box } from "@mui/material";
import React from "react";
import { countries } from "../data";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { maxWidth } from "@mui/system";

function Table2({ isocode, country, deleteIcon, rates, link, flag }) {
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "107px",
        }}
      >
        <Box>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${countryDetails[0].code.toLowerCase()}.png`}
            alt=""
          />
        </Box>
        <Link to={link}>
          <Box>
            <Box style={{ color: "#555962" }}>{isocode}</Box>
            <Box sx={{ fontSize: "1rem", color: "#94A3B8" }}>{country}</Box>
          </Box>
        </Link>
      </Box>

      <Typography fontSize="1rem" textAlign="left">
        {Number(rates.parallel_buy).toFixed(2)}
      </Typography>

      <>
        <BankBox>{Number(rates.official_buy).toFixed(2)}</BankBox>
        <Box>{deleteIcon}</Box>
      </>
    </Box>
  );
}

export default Table2;

const BankBox = styled(Box)`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
