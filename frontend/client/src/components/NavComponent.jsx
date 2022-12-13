import {
  Box,
  Grid,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Skeleton,
} from "@mui/material";
import { useSelector } from "react-redux";
import React, { useState, useContext, useEffect } from "react";
import { useTheme } from "@mui/material";
import DrawerComponent from "./Drawer";
import { Link, NavLink } from "react-router-dom";
import { DownArrow, NavFlag, MenuIcon, MenuIconDark } from "../assets/index";
import streetRates from "../assets/Logo.svg";
import { ColorModeContext } from "../Main";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  setDefaultCurrency,
  setLocalLanguage,
  setNavLoading,
  setUserIp,
} from "../redux/features/Reducers/servicesReducer";
import { dispatch } from "../redux/store";
import { GetUserIp } from "../redux/features/Reducers/serviceActions";
import { Languages } from "./index";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { StyledGlassEffect, StyledWrapper } from "./navbarStyles/Navbar.styled";
import Tooltip from "@mui/material/Tooltip";
import HamburgerMenu from "./navbarMenu/menu/HamburgerMenu";
import DropdownMenu from "./navbarMenu/dropdown/DropdownMenu";
import { ReactComponent as NewLogo } from "../assets/svg/newLogo.svg";

// Adding tranlsation page
/* Primary/Blue 900 */

// color: #00296B;
/* Neutral/Gray 400 */

// color: #94A3B8;
const NavComponent = () => {
  const { t, i18n } = useTranslation();
  const { isNavLoading } = useSelector((state) => state.service);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(null);
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
    sessionStorage.setItem("localLanguage", JSON.stringify(currentLanguage));
    setCurrentLanguage(ele);
    i18n.changeLanguage(ele.lanaguage);
    dispatch(setLocalLanguage(ele));
    setAnchorEl(null);
  };

  useEffect(() => {
    const ip = sessionStorage.getItem("ip");
    const defaultCurrency = JSON.parse(sessionStorage.getItem("localCurrency"));
    const LocaleLanaguage = JSON.parse(sessionStorage.getItem("localLanguage"));
    if (!ip || !defaultCurrency) {
      dispatch(setNavLoading(true));
      dispatch(GetUserIp());
    }
    dispatch(setUserIp(ip));
    dispatch(setDefaultCurrency(defaultCurrency));
    dispatch(setLocalLanguage(LocaleLanaguage));
  }, []);

  return (
    <>
      <Box
        width="100%"
        backgroundColor={theme.palette.mode === "dark" ? "#000A1A" : ""}
      >
        <AppBar
          component="nav"
          color="transparent"
          elevation={1}
          sx={{
            backdropFilter: "blur(7px)",
            justifyContent: "center",
            height: "74px",
          }}
        >
          <Toolbar
            variant="dense"
            sx={{ padding: "10px 0px !important", display: "block" }}
          >
            <Grid
              sx={{
                // minHeight: { xs: "56px", sm: "100px" },
                justifyContent: { xs: "space-between" },
                maxWidth: { xs: "90%", lg: "84%" },
              }}
              display="flex"
              margin="0px auto"
              padding="0px"
              flexDirection="row"
            >
              {/* Logo */}
              <Grid display="flex" justifyContent="center" alignItems="center">
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                  {/* <img
                    style={{
                      // width: "90px",
                      height: "50px",
                      // marginTop: "20px",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    src={streetRates}
                    alt=""
                  /> */}
                  <NewLogo height="56px" />
                </Link>
              </Grid>

              {/* nav desktop */}
              <Grid
                alignItems="center"
                sx={{
                  fontSize: { md: "16px" },
                  gap: { md: "20px", lg: "24px" },
                  display: { xs: "none", md: "flex" },
                  // width: { md: "606pxx" },
                }}
                fontWeight="500"
                lineHeight="24px"
                // color="#94A3B8"
                color={theme.palette.mode === "dark" ? "#ddd" : "#00000080"}
              >
                {/* theme */}
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                >
                  <DarkModeIcon fontSize="large" />
                </IconButton>
                {/* langiage */}
                <Box gap="6px" display="flex">
                  {isNavLoading ? (
                    <Box display="flex" gap="1px" flexDirection="column">
                      <Skeleton variant="rectangular" width={40} height={25} />
                    </Box>
                  ) : (
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="6px"
                        sx={{ alignItems: "center" }}
                      >
                        <img
                          loading="lazy"
                          height="12"
                          width="20"
                          src={
                            currentLanguage
                              ? `https://flagcdn.com/h20/${currentLanguage.label}.png `
                              : `https://flagcdn.com/h20/gb.png `
                          }
                          srcSet={
                            currentLanguage
                              ? `https://flagcdn.com/h40/${currentLanguage.label}.png 2x,
                     https://flagcdn.com/h60/${currentLanguage.label}.png 3x`
                              : `https://flagcdn.com/h20/gb.png `
                          }
                          alt=""
                        />
                        <img
                          height="15"
                          width="20"
                          src={DownArrow}
                          alt="arrow"
                        />
                      </Box>
                    </Button>
                  )}
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose()}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    width="120px"
                    sx={{
                      height: "auto",
                    }}
                  >
                    {Languages.map((ele) => {
                      return (
                        <MenuItem
                          sx={{
                            display: "flex",
                            gap: "6px",
                            flexDirection: "row",
                          }}
                          onClick={() => handleCloseItem(ele)}
                          key={ele.isocode}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${ele.label}.png`}
                            srcSet={`https://flagcdn.com/w40/${ele.label}.png 2x`}
                            alt=""
                          />
                          <Typography marginRight="5px">
                            {ele.isocode}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>

                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive
                      ? theme.palette.mode === "dark"
                        ? "#fff"
                        : "#00296B"
                      : theme.palette.mode === "dark"
                      ? "#aaa"
                      : "#94A3B8",
                  })}
                >
                  {t("nav_home")}
                </NavLink>
                <NavLink
                  to="/blogs"
                  style={({ isActive }) => ({
                    color: isActive
                      ? theme.palette.mode === "dark"
                        ? "#fff"
                        : "#00296B"
                      : theme.palette.mode === "dark"
                      ? "#aaa"
                      : "#94A3B8",
                  })}
                >
                  {t("nav_news")}
                </NavLink>
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive
                      ? theme.palette.mode === "dark"
                        ? "#fff"
                        : "#00296B"
                      : theme.palette.mode === "dark"
                      ? "#aaa"
                      : "#94A3B8",
                  })}
                >
                  {t("nav_contact")}
                </NavLink>
              </Grid>

              {/* nav mobile */}
              <Box
                sx={{ display: { xs: "flex", md: "none" } }}
                justifyContent="center"
                alignItems="center"
                gap="4px"
              >
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={colorMode.toggleColorMode}
                  color="#475569"
                >
                  <DarkModeIcon fontSize="large" />
                </IconButton>

                <Box>
                  {isNavLoading ? (
                    <>
                      <Skeleton variant="rectangular" width={40} height={25} />
                    </>
                  ) : (
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{ px: 0 }}
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        gap="2px"
                        sx={{ alignItems: "center" }}
                      >
                        <img
                          loading="lazy"
                          height="12"
                          width="20"
                          src={
                            currentLanguage
                              ? `https://flagcdn.com/h20/${currentLanguage.label}.png `
                              : `https://flagcdn.com/h20/gb.png `
                          }
                          srcSet={
                            currentLanguage
                              ? `https://flagcdn.com/h40/${currentLanguage.label}.png 2x,
                     https://flagcdn.com/h60/${currentLanguage.label}.png 3x`
                              : `https://flagcdn.com/h20/gb.png `
                          }
                          alt=""
                        />
                        <img
                          height="15"
                          width="20"
                          src={DownArrow}
                          alt="arrow"
                        />
                      </Box>
                    </Button>
                  )}
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose()}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    width="120px"
                    sx={{
                      height: "auto",
                    }}
                  >
                    {Languages.map((ele) => {
                      return (
                        <MenuItem
                          sx={{
                            display: "flex",
                            gap: "6px",
                            flexDirection: "row",
                          }}
                          onClick={() => handleCloseItem(ele)}
                          key={ele.isocode}
                        >
                          <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${ele.label}.png`}
                            srcSet={`https://flagcdn.com/w40/${ele.label}.png 2x`}
                            alt=""
                          />
                          <Typography marginRight="5px">
                            {ele.isocode}
                          </Typography>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>
                <Box cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
                  {/* <img
                    src={
                      theme.palette.mode === "dark" ? MenuIconDark : MenuIcon
                    }
                    alt="MenuIcon"
                  /> */}
                  <HamburgerMenu openHamburger={isOpen} />
                </Box>
              </Box>
              {/* <DrawerComponent
                isOpen={isOpen}
                setIsOpen={HandleDrawerState}
                navItems={["Home", "Blog", "About Us"]}
              /> */}
            </Grid>
          </Toolbar>
        </AppBar>
        {/* {isOpen && <DropdownMenu isOpen={isOpen} setMenuOpen={setIsOpen} />} */}
      </Box>

      <Box sx={{ height: "74px" }}></Box>
    </>
  );
};
export default NavComponent;
