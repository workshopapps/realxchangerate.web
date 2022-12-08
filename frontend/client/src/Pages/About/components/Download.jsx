import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import tabletImage from "../assets/Tablet.png";
import mobileImage from "../assets/mobile-image.png";
import AppleIcon from "../assets/icons/Appleicon.svg";
import PlayStore from "../assets/icons/PlayStore.svg";
const Download = () => {
  const tabletUpper = useMediaQuery("(max-width:789px)");
  const tabletLower = useMediaQuery("(min-width:481px)");
  const tablet = tabletLower && tabletUpper;
  const image = tablet ? tabletImage : mobileImage;
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box
      width="100%"
      display="flex"
      backgroundColor={darkMode ? "#00050C" : "#F8FAFC"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="0px auto"
        sx={{
          height: { xs: "393px", sm: "406px", md: "520px" },
        }}
        maxWidth="1440px"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: { xs: "60%", sm: "84%", lg: "84%" },
            margin: { xs: "0px auto 0px", md: "0px auto" },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            sx={{
              width: { xs: "100%", md: "100%" },
              alignItems: { xs: "center", sm: "start" },
            }}
            justifyContent="center"
          >
            <Typography
              fontWeight="600"
              letterSpacing="-0.02em"
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "25px",
                  lg: "30px",
                  xl: "36px",
                },
                lineHeight: { xs: "24px", sm: "44px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Download the StreetRate App Via
            </Typography>
            <Box display="flex" gap="32px">
              <a href="https://appetize.io/app/dma6cyb75uzgdhnucyd6oo24wm?device=pixel4&osVersion=12.0&scale=75">
                <img src={PlayStore} alt="" />
              </a>

              <img src={AppleIcon} alt="" />
            </Box>
          </Box>
          <Box
            width="100%"
            sx={{
              marginTop: { sm: "40px", md: "100px" },
              display: { xs: "none", sm: "flex" },
            }}
          >
            <img src={image} width="100%" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Download;
