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
import { Link } from "react-router-dom";
import { DownArrow, NavFlag, MenuIcon, MenuIconDark } from "../assets/index";
import streetRates from "../assets/Logo.svg";
import { ColorModeContext } from "../Main";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
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
// Adding tranlsation page
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
    <Box
      width="100%"
      backgroundColor={theme.palette.mode === "dark" ? "#131825" : ""}
    >
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
              <img
                style={{ width: "clamp(90px, 10vw, 140px)", marginTop: "20px" }}
                src={streetRates}
                alt=""
              />
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
            {isNavLoading ? (
              <Box display="flex" gap="1px" flexDirection="column">
                <Skeleton variant="rounded" width={70} height={5} />
                <Skeleton variant="rounded" width={70} height={5} />
                <Skeleton variant="rounded" width={70} height={5} />
              </Box>
            ) : (
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
                    width="20"
                    height="20"
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
                  <img src={DownArrow} alt="arrow" />
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
                    <Typography marginRight="5px">{ele.isocode}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Link
            to="/"
            style={{
              color: theme.palette.mode === "dark" ? "#94A3B8" : "#0062ff",
            }}
          >
            {t("nav_home")}
          </Link>
          <Link
            to="/blogs"
            style={{
              color: theme.palette.mode === "dark" ? "#94A3B8" : "#0062ff",
            }}
          >
            {t("nav_news")}
          </Link>
          <Link
            to="/about"
            style={{
              color: theme.palette.mode === "dark" ? "#94A3B8" : "#0062ff",
            }}
          >
            {t("nav_contact")}
          </Link>
        </Grid>
        <Box
          sx={{ display: { xs: "flex", sm: "none" } }}
          justifyContent="center"
          alignItems="center"
          gap="10px"
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

          <Box gap="6px" display="flex">
            {isNavLoading ? (
              <Box display="flex" gap="1px" flexDirection="column">
                <Skeleton variant="rounded" width={70} height={5} />
                <Skeleton variant="rounded" width={70} height={5} />
                <Skeleton variant="rounded" width={70} height={5} />
              </Box>
            ) : (
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
                  <img src={DownArrow} alt="arrow" />
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
                    <Typography marginRight="5px">{ele.isocode}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
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
          navItems={["Home", "Blog", "About Us"]}
        />
      </Grid>
    </Box>
  );
};
export default NavComponent;
