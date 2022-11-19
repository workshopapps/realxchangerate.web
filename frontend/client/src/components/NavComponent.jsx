import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "./Drawer";
import {Link} from "react-router-dom";
import { DownArrow, NavFlag, MenuIcon } from "../assets/index"

const NavComponent = () => {
  const [isOpen, setIsOpen] = useState(false);


  const HandleDrawerState = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Grid
      sx={{
        maxWidth: { xs: "90%", sm: "95%", md: "84%" },
        minHeight: { xs: "56px", sm: "100px" },
        justifyContent: {xs:"space-between"}
      }}
      minHeight="100px"
      display="flex"
      margin="0px auto"
      flexDirection="row"
      
    >
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: { xs: "23px", sm: "17px", md: "24px",lg:"29px", xl:"34px" },
            lineHeight: { xs: "28px", sm: "40px" },
            fontWeight: { xs: "600", sm: "700" },
          }}
          color="#00296B"
          letterSpacing="-0.04em"
          role="heading"
        >
          Street Rate
        </Typography>
      </Grid>

      <Grid
        alignItems="center"
        sx={{
          fontSize: { sm: "12px", md: "16px" },
          gap: { sm: "9px", md: "20px", lg: "24px" },
          display: { xs: "none", sm: "flex" },
          width: { md: "606pxx" },
        }}
        fontWeight="400"
        lineHeight="24px"
        color="#94A3B8"
      >
        <Box gap="6px" display="flex">
          <img src={NavFlag} alt="flagImage" />
          <img src={DownArrow} alt="arrow" />
        </Box>

        <Link to="/" color="inherit">Home</Link>

        <Link to="/convert" color="inherit">Convert</Link>

        <Link to="#" color="inherit">Currency Profile</Link>

        <Link to="/news" color="inherit">News</Link>

        <Link to="/contact" color="inherit">Contact</Link>
      </Grid>
      <Box
        p="12px"
        sx={{ display: { xs: "flex", sm: "none" } }}
        cursor="pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={MenuIcon} alt="MenuIcon" />
      </Box>
      <DrawerComponent isOpen={isOpen} setIsOpen={HandleDrawerState} navItems={["Home", "Convert", "Currency Profile", "News", "Contact"]}/>
    </Grid>
  );
};

export default NavComponent;