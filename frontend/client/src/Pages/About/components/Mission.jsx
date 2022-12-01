import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import missionImage from "../assets/mission-image.png";
import missionTablet from "../assets/missionTablet.png";
import visionImage from "../assets/vision-image.png";
import visionTablet from "../assets/visionTablet.png";

const Mission = () => {
  const tabletUpper = useMediaQuery("(max-width:789px)");
  const tabletLower = useMediaQuery("(min-width:481px)");
  const tablet = tabletLower && tabletUpper;

  const mission = tablet ? missionTablet : missionImage;
  const vision = tablet ? visionTablet : visionImage;

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        flexDirection: { xs: "column" },
        justifyContent: { xs: "center", md: "space-between" },
        width: { xs: "85%", sm: "65%", lg: "84%" },
        margin: { xs: "40px auto 0px", md: "40px auto", lg: "40px auto" },
        gap: { xs: "40px", md: "80px" },
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "25px", md: "56px" },
        }}
      >
        <Box width="80%" margin="auto">
          <img src={mission} width="100%" alt="scanImage" />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          sx={{
            gap: { xs: "10px", sm: "32px", md: "56px" },
            width: { sm: "70%", md: "100%" },
          }}
        >
          <Typography
            fontWeight="600"
            letterSpacing="-0.02em"
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "36px" },
              lineHeight: { xs: "40px", sm: "44px" },
            }}
            textAlign="center"
          >
            Our Mission
          </Typography>
          <Typography
            textAlign="justify"
            fontWeight="400"
            color="#202020"
            sx={{
              fontSize: { xs: "20px", sm: "15px", md: "15px", lg: "20px" },
              lineHeight: { xs: "28px" },
            }}
          >
            To create a onestop platform that allow user to view their current
            and standard economic money rate in other currencies
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "25px", md: "56px" },
        }}
      >
        <Box
          width="80%"
          sx={{ display: { xs: "flex", md: "none" } }}
          margin="auto"
        >
          <img src={vision} width="100%" alt="scanImage" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            gap: { xs: "10px", sm: "32px", md: "56px" },
            width: { sm: "70%", md: "100%" },
          }}
        >
          <Typography
            fontWeight="600"
            letterSpacing="-0.02em"
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "36px" },
              lineHeight: { xs: "40px", sm: "44px" },
            }}
            textAlign="center"
          >
            Our Vision
          </Typography>
          <Typography
            textAlign="justify"
            fontWeight="400"
            color="#202020"
            sx={{
              fontSize: { xs: "20px", sm: "15px", md: "15px", lg: "20px" },
              lineHeight: { xs: "28px" },
            }}
          >
            To prepare the users mindset for any expenditure in any country of
            their choice
          </Typography>
        </Box>

        <Box
          width="100%"
          sx={{ display: { xs: "none", md: "flex" } }}
          margin="auto"
        >
          <img src={vision} width="100%" alt="scanImage" />
        </Box>
      </Box>
    </Box>
  );
};

export default Mission;
