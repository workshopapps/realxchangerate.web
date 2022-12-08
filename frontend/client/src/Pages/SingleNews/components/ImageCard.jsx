import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export const MainSectionImageCard = ({ category }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Box
      display="flex"
      backgroundColor={darkMode ? "#09003B":"#14008C"}
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
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Box
      display="flex"
      backgroundColor={darkMode ? "#09003B":"#14008C"}
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
