import React from "react";
import { Box, Typography } from "@mui/material";
import { DownArrow } from "../assets/";
import PropTypes from "prop-types";

const AmountInput = ({ flag, amount, setAmount }) => {
  const TextInput = {
    border: "none",
    padding:"3px",
    width: "90%",
    "::focus": {
      border: "none",
    },
    "::blur": {
      border: "none",
    },
    height: "25px",
    backgroundColor: "inherit",
    color: "inherit",
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      border="1px solid #9B9DFD"
      justifyContent="space-between"
      alignItems="center"
      height="44px"
      borderRadius="6px"
      sx={{
        width: { xs: "100%", sm: "33%" },
        gap: { sm: "2px", md: "8px", xl: "10px" },
        padding: {
          xs: "10px 12px",
          sm: "2px 3px",
          md: "5px 6px",
          xl: "10px 12px",
        },
      }}
    >
      <Box display="flex" width="50%" gap="5px" alignItems="center">
        
        <input
          type="text"
          placeholder="Amount"
          style={TextInput}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Box>

      <Box
        display="flex"
        sx={{
          gap: { xs: "8px", sm: "10px" },
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "10px", md: "12px", xl: "14px" },
          }}
          lineHeight="20px"
          fontWeight="400"
          color="#6B7280"
        >
         NGN
        </Typography>
        <img
        loading="lazy"
        width="20"
        src={ `https://flagcdn.com/w20/ng.png `}
        srcSet={`https://flagcdn.com/w40/ng.png 2x`}
        alt=""
      />
        <img src={DownArrow} height={20} width={20} alt="arrow" />
      </Box>
    </Box>
  );
};

AmountInput.propTypes = {
  flag : PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired
}

export default AmountInput;

