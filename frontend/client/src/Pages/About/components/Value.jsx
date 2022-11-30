import React from "react";
import styled from "styled-components";
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
          fontSize: { xs: "24px", sm: "28px", md: "28px" },
          lineHeight: { xs: "40px", sm: "32px" },
        }}
        color="#4B4B4B"
      >
        {title}
      </Typography>

      <Typography

        fontWeight="400"
        letterSpacing="-0.02em"
        sx={{
          fontSize: { xs: "24px", sm: "28px", md: "20px" },
          lineHeight: { xs: "40px", sm: "28px" },
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
      height="460px"
      width="100%"
      sx={{
        margin: { xs: "40px auto 0px", md: "40px auto", lg: "56px auto" },
      }}
    >
      <Box
        diplay="flex"
        sx={{
          flexDirection: { xs: "column" },
          justifyContent: { xs: "center", md: "center" },
          width: { xs: "87%", sm: "65%", lg: "84%" },
          margin: { xs: "40px auto 0px", md: "40px auto", lg: "56px auto" },
          gap: { xs: "40px", md: "24px" },
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
          marginTop="24px"
          color="#202020"
          sx={{
            fontSize: { xs: "20px", sm: "15px", md: "15px", lg: "20px" },
            lineHeight: { lg: "28px" },
          }}
        >
          Offering a unique experience and providing an accurate of any country
          exchange rate of your choice
        </Typography>

        <Grid
          container
          spacing="30px"
          marginTop="24px"
          // display="flex"
          // justfiyContent="center"
          // flexDirection="column"
          // alignItems="center"
          // gap="30px"
        >
          <Grid item xs={3}>
            <ListItem
              image={EntrepreneurshipIcon}
              title="Entrepreneurship"
              content="Ability to identify problems, and collaboratively solve them to create opportunities for everyone."
            />
          </Grid>

          <Grid item xs={3}>
            <ListItem
              image={DiversityIcon}
              title="Diversity"
              content="At StreetRate we embrace our interdependence as humans, our rich cultures, and places we come from."
            />
          </Grid>

          <Grid item xs={3}>
            <ListItem
              image={InnovationIcon}
              title="Innovation"
              content="We partner people with technology to create an impact-first work environment."
            />
          </Grid>

          <Grid item xs={3}>
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
