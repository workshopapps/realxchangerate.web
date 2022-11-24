import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { RightArrow } from "../assets/";

const AmountInput = ({ flag }) => {
  const tabletScreen = useMediaQuery("(max-width:769px)")

  const TextInput = {
    border: "none",
    width: "32%",
    "::focus": {
      border: "none",
    },
    height:"20px"
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      border="1px solid #9B9DFD"
      alignItems="center"
      height="44px"
      borderRadius="6px"
      sx={{
        width: {xs:"100%", sm: "33%" },
        gap: {sm:"2px", md: "8px", xl: "10px" },
        padding: {xs:"10px 12px", sm:"2px 3px",md:"5px 6px", xl:"10px 12px"},
      }}
    >
      <Typography
        lineHeight="24px"
        fontWeight="400"
        color="#111827"
        sx={{
          fontSize: {xs:"16px", sm:"10px", md: "12px", xl: "14px" },
        }}
      >
        Amount
      </Typography>
      <input type="text" style={TextInput} />

      <Box
        display="flex"
        sx={{
          gap: {xs:"12px", sm: "3px", xl: "7px" },
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: {xs:"14px", sm:"10px", md: "12px", xl: "14px" },
          }}
          lineHeight="20px"
          fontWeight="400"
          color="#6B7280"
        >
         {tabletScreen ? "US Dollar": "US Dollar (USD)"}
        </Typography>
        <img src={flag} height={20} width={20} alt="Flag" />
        <img src={RightArrow} height={20} width={20} alt="arrow" />
      </Box>
    </Box>
  );
};

export default AmountInput;
