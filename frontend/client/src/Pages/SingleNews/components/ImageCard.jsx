import { Box, Typography } from "@mui/material";
import React from "react";

export const MainSectionImageCard = ({ category }) => {
  return (
    <Box
      display="flex"
      backgroundColor="#14008C"
      borderRadius="4px"
      sx={{
        minWidth: {
          lg: "147px",
        },
        height: { xs: "240px", md: "380px" },
      }}
      alignItems="center"
      justifyContent="center"
      padding="20px"
    >
      <Typography
        fontSize="20px"
        lineHeight="24px"
        color="#fff"
        textAlign="center"
      >
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </Typography>
    </Box>
  );
};


export const ImageCard = ({ category, height, width }) => {
  return (
    <Box
      display="flex"
      backgroundColor="#14008C"
      borderRadius="4px"
      sx={{
        width: width,
        height: height,
      }}
      alignItems="center"
      justifyContent="center"
      padding="20px"
    >
      <Typography
        fontSize="20px"
        lineHeight="24px"
        color="#fff"
        textAlign="center"
      >
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </Typography>
    </Box>
  );
};
