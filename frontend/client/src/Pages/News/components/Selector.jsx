import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Selector = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        flexDirection="row"
        sx={{
          gap: { xs: "9px", md: "20px", lg: "32px" },
          display: { xs: "none", sm: "flex" },
        }}
        fontSize="16px"
        lineHeight="20px"
        color="#0F172A"
      >
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          All
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Stocks
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Crypto
        </Typography>
        <Typography
          sx={{
            position: "relative",
            cursor: "pointer",
          }}
          fontSize="16px"
          lineHeight="20px"
          color="#0F172A"
        >
          Currencies
          <div
            style={{
              position: "absolute",
              bottom: -9,
              border: "none",
              height: 4,
              width: "100%",
              background: "#0051C3",
              borderRadius: 2,
            }}
          />
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Indicies
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Future
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Bonds
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          World economy
        </Typography>
      </Box>

      <Box
        flexDirection="row"
        sx={{
          gap: { xs: "20px"},
          display: { xs: "flex", sm: "none" },
        }}
      >
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          All
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Stocks
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Crypto
        </Typography>
        <Typography
          sx={{
            position: "relative",
            cursor: "pointer",
          }}
          fontSize="16px"
          lineHeight="20px"
          color="#0F172A"
        >
          Currencies
          <div
            style={{
              position: "absolute",
              bottom: -9,
              border: "none",
              height: 4,
              width: "100%",
              background: "#0051C3",
              borderRadius: 2,
            }}
          />
        </Typography>
        <Typography fontSize="16px" lineHeight="20px" color="#0F172A">
          Indicies
        </Typography>
      </Box>
      <Divider
        sx={{
          height: 4,
          background: "#F8FAFC",
          borderRadius: 2,
          marginTop: 0.7,
          border: "none",
        }}
      />
    </Box>
  );
};

export default Selector;
