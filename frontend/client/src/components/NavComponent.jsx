import {
  Box,
  Grid,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import React, { useState, useContext, useEffect } from "react";
import { useTheme } from "@mui/material";
import DrawerComponent from "./Drawer";
import { Link } from "react-router-dom";
import { DownArrow, NavFlag, MenuIcon, MenuIconDark } from "../assets/index";
import { ColorModeContext } from "../Main";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { setDefaultCurrency } from "../redux/features/Reducers/servicesReducer";
import { dispatch } from "../redux/store";
import { GetCurrencyData } from "../redux/features/Reducers/serviceActions";

const NavComponent = () => {
  const { currencyList, countryDetails, defaultCurrency } = useSelector(
    (state) => state.service
  );

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [localCurrency, setLocalCurrency] = useState(defaultCurrency);

  const HandleDrawerState = () => {
    setIsOpen(!isOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseItem = (ele) => {
    setLocalCurrency(ele);
    dispatch(setDefaultCurrency(ele));
    setAnchorEl(null);
  };

  useEffect(() => {
    if (defaultCurrency) {
      let country = currencyList.find(
        (x) => x.country === defaultCurrency.label
      );
      dispatch(GetCurrencyData(country.isocode));
    }
  }, [defaultCurrency, currencyList]);

  // console.log(countryDetails)

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
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Box display="flex" flexDirection="row" gap="6px">
              <img
                loading="lazy"
                height="20"
                src={
                  localCurrency
                    ? `https://flagcdn.com/h20/${localCurrency.code.toLowerCase()}.png `
                    : NavFlag
                }
                srcSet={
                  localCurrency
                    ? `https://flagcdn.com/h40/${localCurrency.code.toLowerCase()}.png 2x,
                     https://flagcdn.com/h60/${localCurrency.code.toLowerCase()}.png 3x`
                    : NavFlag
                }
                alt=""
              />
              <img src={DownArrow} alt="arrow" />
            </Box>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            width="120px"
            sx={{
              height: "auto",
            }}
          >
            {currencyList.map((ele) => {
              console.log(ele);
              return (
                <MenuItem
                  sx={{
                    display: "flex",
                    gap: "6px",
                    flexDirection: "row",
                  }}
                  onClick={() =>
                    handleCloseItem(countryDetails[currencyList.indexOf(ele)])
                  }
                  key={ele.isocode}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${countryDetails[
                      currencyList.indexOf(ele)
                    ].code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${countryDetails[
                      currencyList.indexOf(ele)
                    ].code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  <Typography marginRight="5px">{ele.isocode}</Typography>
                </MenuItem>
              );
            })}
          </Menu>
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
