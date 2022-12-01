import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import tabletImage from "../assets/Tablet.png";
import mobileImage from "../assets/mobile-image.png";

const Header = () => {
  const tabletUpper = useMediaQuery("(max-width:789px)");
  const tabletLower = useMediaQuery("(min-width:481px)");

  const tablet = tabletLower && tabletUpper;

  const image = tablet ? tabletImage : mobileImage;

  return (
    <Box
      backgroundColor="#00296B"
      display="flex"
      alignItems="center"
      sx={{
        width: { xs: "90%", sm: "84%", lg: "84%" },
        margin: {xs:"40px auto", sm: "60px auto", md: "0px auto" },
      }}
      maxWidth="1440px"
    >
      <Box
        display="flex"
        gap="24px"
        sx={{
          height: { xs: "599px", sm: "650px", md: "400px", lg: "604px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
          sx={{
            width: { xs: "100%", md: "100%" },
            alignItems: { xs: "center", md: "start" },
          }}
          justifyContent="center"
        >
          <Typography
            fontWeight="600"
            letterSpacing="-0.02em"
            sx={{
              fontSize: { xs: "32px", sm: "36px" },
              lineHeight: { xs: "40px", sm: "44px" },
            }}
          >
            About us
          </Typography>

          <Typography
            fontWeight="600"
            sx={{
              fontSize: { xs: "20px", sm: "20px", md: "15px", lg: "20px" },
              lineHeight: { lg: "28px" },
            }}
          >
            Bankstreet is a platform that allows User to recieve/veiw instant
            conversion rates using customized areas real-time charts that fit
            the Ecomony value and a historical conversion record from one to one
            year and to enhance the customer experience
          </Typography>
        </Box>

        <Box width="100%" marginLeft="-25px" sx={{marginTop:{xs:"0px", sm:"-24px", md:"0px", xl:"0px"}}}>
          <img src={image} width="100%" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
