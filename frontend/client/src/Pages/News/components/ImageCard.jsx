import { Box, Typography } from "@mui/material";
import React from "react";

const ImageCard = ({category, height}) => {
  return (
    <Box
    display="flex"
      backgroundColor="#14008C"
      borderRadius="4px"
      sx={{
        minWidth: {
          lg: "147px",
        },
        height: { lg: height },
      }}
      alignItems="center"
      justifyContent="center"
      padding="20px"
    >
        <Typography fontSize="20px" lineHeight="24px" color="#fff" textAlign="center">{category.charAt(0).toUpperCase() + category.slice(1)} News</Typography>
    </Box>
  );
};

export default ImageCard;
