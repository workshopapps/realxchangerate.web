import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import CommunityIcon from "../assets/icons/Community.svg";
import DiversityIcon from "../assets/icons/Diversity.svg";
import EntrepreneurshipIcon from "../assets/icons/Entrprenuership.svg";
import InnovationIcon from "../assets/icons/Innovation.svg";

const ListItem = ({ image, title, content }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="left"
      gap="20px"
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="left"
        gap="10px"
      >
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            alignItems: { xs: "center", sm: "left" },
            justifyContent: { xs: "center", sm: "left" },
          }}
        >
          <img src={image} alt="" width="50px" height="100%" />
        </Box>

        <Typography
          fontWeight="600"
          letterSpacing="-0.02em"
          sx={{
            fontSize: { xs: "22px", sm: "24px", md: "28px" },
            lineHeight: { xs: "28px", sm: "32px" },
            textAlign: { xs: "center", sm: "left" },
          }}
          color={darkMode ? "#FAFAFA" : "#4B4B4B"}
        >
          {title}
        </Typography>
      </Box>

      <Typography
        fontWeight="400"
        sx={{
          fontSize: { xs: "16px", sm: "15px", md: "15px", lg: "20px" },
          lineHeight: { xs: "24px", sm: "28px" },
        }}
        color={darkMode ? "#DFDFDF" : "#202020"}
        textAlign="left"
      >
        {content}
      </Typography>
    </Box>
  );
};

const Value = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Box
      backgroundColor={darkMode ? "#00050C" : "#F8FAFC"}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{
        margin: { xs: "0px auto", md: "0px auto", lg: "0px auto" },
      }}
    >
      <Box
        diplay="flex"
        flexDirection="column"
        sx={{
          justifyContent: { xs: "center", md: "center" },
          width: { xs: "85%", sm: "80%", md: "90%", lg: "83.5%" },
          margin: { xs: "32px auto", sm: "48px auto", lg: "56px auto" },
          gap: { xs: "30px", sm: "16px", md: "24px" },
        }}
        textAlign="center"
      >
        <Typography
          fontWeight="600"
          letterSpacing="-0.02em"
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "36px" },
            lineHeight: { xs: "40px", sm: "44px" },
          }}
        >
          Our Values
        </Typography>

        <Typography
          fontWeight="400"
          color={darkMode ? "#FAFAFA" : "#202020"}
          sx={{
            fontSize: { xs: "14px", sm: "15px", md: "15px", lg: "20px" },
            lineHeight: { lg: "28px" },
            textAlign: { xs: "center" },
            letterSpacing: { xs: "0.001em", sm: "auto" },
          }}
        >
          Offering a unique experience and providing accurate exchange rates of
          any currency of your choice.
        </Typography>

        <Grid
          container
          spacing="24px"
          sx={{
            width: {
              xs: "100%",
              sm: "85%",
              md: "100%",
            },
            margin: {
              xs: "0px",
              sm: "22px auto 0px",
              md: "38px auto 0px",
            },
          }}
        >
          <Grid item sm={6} md={3}>
            <ListItem
              image={EntrepreneurshipIcon}
              title="Entrepreneurship"
              content="Ability to identify problems, and collaboratively solve them to create opportunities for everyone."
            />
          </Grid>

          <Grid item sm={6} md={3}>
            <ListItem
              image={DiversityIcon}
              title="Diversity"
              content="At StreetRates, we embrace our interdependence as humans, our rich cultures, and places we come from."
            />
          </Grid>

          <Grid item sm={6} md={3}>
            <ListItem
              image={InnovationIcon}
              title="Innovation"
              content="We partner people with technology to create an impact-first work environment."
            />
          </Grid>

          <Grid item sm={6} md={3}>
            <ListItem
              image={CommunityIcon}
              title="Community"
              content="Our approach is simple. Great people and a vibrant community, make a good company."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Value;
