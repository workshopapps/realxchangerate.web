import { Box, Grid, Typography, IconButton } from "@mui/material";
import React, { useState, useContext } from "react";
import { useTheme } from "@mui/material";
import DrawerComponent from "./Drawer";
import { Link } from "react-router-dom";
import { DownArrow, NavFlag, MenuIcon, MenuIconDark } from "../assets/index";
import { ColorModeContext } from "../Main";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NavComponent = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const HandleDrawerState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid
      sx={{
        minHeight: { xs: "56px", sm: "100px" },
        justifyContent: { xs: "space-between" },
        maxWidth: { xs: "90%", lg: "84%" },
      }}
      minHeight="100px"
      display="flex"
      margin="0px auto"
      padding="0px"
      flexDirection="row"
    >
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: {
              xs: "23px",
              sm: "17px",
              md: "24px",
              lg: "29px",
              xl: "34px",
            },
            lineHeight: { xs: "28px", sm: "40px" },
            fontWeight: { xs: "600", sm: "700" },
          }}
          color="#0062ff"
          letterSpacing="-0.04em"
          role="heading"
        >
          <Link to="/" style={{ color: "#0062ff" }}>
            Street Rate
          </Link>
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
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon height="1.75em" width="1.75em" />
          ) : (
            <Brightness4Icon height="1.75em" width="1.75em" />
          )}
        </IconButton>

        <Box gap="6px" display="flex">
          <img src={NavFlag} alt="flagImage" />
          <img src={DownArrow} alt="arrow" />
        </Box>

        <Link to="/" style={{ color: "#0062ff" }}>
          Home
        </Link>

        <Link to="/news" style={{ color: "#0062ff" }}>
          News
        </Link>

        <Link to="/contact" style={{ color: "#0062ff" }}>
          Contact
        </Link>
      </Grid>
      <Box
        sx={{ display: { xs: "flex", sm: "none" } }}
        justifyContent="center"
        alignItems="center"
        gap="30px"
      >
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon height="2em" width="2em" />
          ) : (
            <Brightness4Icon height="2em" width="2em" />
          )}
        </IconButton>
        <Box cursor="pointer" onClick={() => setIsOpen(true)}>
          <img
            src={theme.palette.mode === "dark" ? MenuIconDark : MenuIcon}
            alt="MenuIcon"
          />
        </Box>
      </Box>
      <DrawerComponent
        isOpen={isOpen}
        setIsOpen={HandleDrawerState}
        navItems={["Home", "Convert", "Currency Profile", "News", "Contact"]}
      />
    </Grid>
  );
};

export default NavComponent;
