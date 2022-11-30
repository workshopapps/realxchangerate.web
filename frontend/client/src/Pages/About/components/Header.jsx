import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import tabletImage from "../assets/Tablet.png";
import mobileImage from "../assets/mobile-image.png";

const Header = () => {
  const tablet = useMediaQuery("(max-width:789px)");
  const image = tablet ? tabletImage : mobileImage;

  return (
    <Box
      backgroundColor="#00296B"
      display="flex"
      alignItems="center"
      sx={{
        height: { xs: "599px", sm: "569px", md: "604px" },
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        width: { xs: "90%", sm: "84%", lg: "84%" },
        margin: { xs: "100px auto 0px", md: "0px auto", lg: "0px auto" },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="10px"
        sx={{
          width: { xs: "100%", md: "47%" },
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
          conversion rates using customized areas real-time charts that fit the
          Ecomony value and a historical conversion record from one to one year
          and to enhance the customer experience
        </Typography>
      </Box>

      <Box marginLeft="-50px">
        <img src={image} alt="" />
      </Box>
    </Box>
  );
};

export default Header;
