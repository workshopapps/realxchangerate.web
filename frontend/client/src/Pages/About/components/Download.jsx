import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import tabletImage from "../assets/Tablet.png";
import mobileImage from "../assets/mobile-image.png";
import {AppleIcon, PlayStore } from "../assets/icons/";

const Download = () => {
  const tabletUpper = useMediaQuery("(max-width:789px)");
  const tabletLower = useMediaQuery("(min-width:481px)");

  const tablet = tabletLower && tabletUpper;

  const image = tablet ? tabletImage : mobileImage;

  return (
    <Box width="100%" backgroundColor="#F8FAFC" display="flex">
      <Box
        
        display="flex"
        alignItems="center"
        sx={{
          width: { xs: "60%", sm: "84%", lg: "84%" },
          margin: { xs: "41px auto 0px", md: "11px auto" },
        }}
      >
        <Box
          display="flex"
          width="100%"
          gap="0px"
          sx={{
            // height: { xs: "393px", sm: "520px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
          justifyContent="center"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            sx={{
              width: { xs: "100%", md: "100%" },
              alignItems: { xs: "center", sm: "start" },
              height: { xs: "393px", sm: "520px" },
            }}
            justifyContent="center"
          >
            <Typography
              fontWeight="600"
              letterSpacing="-0.02em"
              sx={{
                fontSize: { xs: "18px",sm:"20px", md:"25px",lg:"30px", xl: "36px" },
                lineHeight: { xs: "24px", sm: "44px" },
                textAlign:{xs:"center", sm:"left"}
              }}
            >
              Download the StreetRate App Via
            </Typography>

            <img src={PlayStore} alt="" />

            <img src={AppleIcon} alt="" />

            
          </Box>

          <Box sx={{display:{xs:"none", sm:"flex"}}} width="100%">
            <img src={image} width="100%" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Download;
