import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  CommunityIcon,
  DiversityIcon,
  EntrepreneurshipIcon,
  InnovationIcon,
} from "../assets/icons/index";

const ListItem = ({ image, title, content }) => {
  return (
    <Box
      display="flex"
      justfiyContent="center"
      flexDirection="column"
      alignItems="center"
      gap="20px"
    >
      <img src={image} alt="" />

      <Typography
        fontWeight="600"
        letterSpacing="-0.02em"
        sx={{
          fontSize: { xs: "22px", sm: "24px", md: "28px" },
          lineHeight: { xs: "28px", sm: "32px" },
        }}
        color="#4B4B4B"
      >
        {title}
      </Typography>

      <Typography
        fontWeight="400"
        sx={{
          fontSize: { xs: "16px", sm: "15px", md: "15px", lg: "20px" },
          lineHeight: { xs: "24px", sm: "28px" },
        }}
        color="#202020"
        textAlign="left"
      >
        {content}
      </Typography>
    </Box>
  );
};

const Value = () => {
  return (
    <Box
      backgroundColor="#F8FAFC"
      display="flex"
      justfiyContent="center"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{
        margin: { xs: "40px auto 0px", md: "40px auto", lg: "56px auto" },
      }}
    >
      <Box
        diplay="flex"
        flexDirection="column"
        sx={{
          justifyContent: { xs: "center", md: "center" },
          width: { xs: "85%", sm: "80%", md: "90%", lg: "83.5%" },
          margin: { xs: "32px auto 0px", md: "40px auto", lg: "46px auto" },
        }}
        gap="24px"
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
          color="#202020"
          sx={{
            fontSize: { xs: "14px", sm: "15px", md: "15px", lg: "20px" },
            lineHeight: { lg: "28px" },
            marginTop: { xs: "16px", sm: "24px" },
            textAlign: { xs: "left", sm: "center" },
            letterSpacing: { xs: "0.001em", sm: "auto" },
          }}
        >
          Offering a unique experience and providing an accurate of any country
          exchange rate of your choice
        </Typography>

        <Grid
          container
          spacing="30px"
          sx={{
            width: {
              xs: "100%",
              sm: "85%",
              md: "100%",
            },
            margin: { xs: "24px 0px", sm: "24px auto" },
          }}
        >
          <Grid item sm={6} md={3}>
            <ListItem
              image={EntrepreneurshipIcon}
              title="Entrepreneurship"
              content="Ability to identify problems, and collaboratively solve them to create opportunities for everyone."
            />
          </Grid>

          <Grid item sm={6} md={3} sx={{ padding: { xs: "0px", sm: "30px" } }}>
            <ListItem
              image={DiversityIcon}
              title="Diversity"
              content="At StreetRate we embrace our interdependence as humans, our rich cultures, and places we come from."
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
