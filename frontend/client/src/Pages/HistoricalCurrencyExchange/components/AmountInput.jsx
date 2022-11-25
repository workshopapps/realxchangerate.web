import React from "react";
import { Box, Typography } from "@mui/material";
import { RightArrow } from "../assets/";
import PropTypes from "prop-types";

const AmountInput = ({ flag, amount, setAmount }) => {
  const TextInput = {
    border: "none",
    width: "50%",
    "::focus": {
      border: "none",
    },
    "::blur": {
      border: "none",
    },
    height: "20px",
    backgroundColor: "inherit",
    color: "inherit",
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
        <Typography
          lineHeight="24px"
          fontWeight="400"
          sx={{
            fontSize: { xs: "14px", sm: "10px", md: "12px", xl: "14px" },
          }}
        >
          Amount
        </Typography>
        <input
          type="text"
          style={TextInput}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Box>

      <Box
        display="flex"
        sx={{
          gap: { xs: "4px", sm: "3px", xl: "7px" },
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
          US Dollar (USD)
        </Typography>
        <img src={flag} height={20} width={20} alt="Flag" />
        <img src={RightArrow} height={20} width={20} alt="arrow" />
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

