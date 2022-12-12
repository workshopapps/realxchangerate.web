import { Drawer, useTheme, Divider, Box, Link } from "@mui/material";
import React from "react";
import streetRates from "../assets/Logo.svg";
import { useTranslation } from "react-i18next";

const DrawerComponent = ({ isOpen, setIsOpen }) => {
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";
  const { t } = useTranslation();
  const drawer = (
    <Box
      onClick={setIsOpen}
      sx={{
        textAlign: "center",
        backgroundColor: DarkMode ? "#000E25" : "inherit",
        height: "100vh",
      }}
    >
      <Link to="/" style={{ color: "#0062ff" }}>
        <img
          style={{ width: "clamp(90px, 10vw, 140px)", margin: "20px auto" }}
          src={streetRates}
          alt=""
        />
      </Link>
      <Divider />
      <Box
        alignItems="flex-start"
        display="flex"
        gap="20px"
        paddingLeft={"20px"}
        marginTop="20px"
        flexDirection="column"
        fontWeight="400"
        lineHeight="24px"
        fontSize="16px"
        color="#0062ff"
      >
        <Link href="/">{t("nav_home")}</Link>

        <Link href="/#/blogs">{t("nav_news")}</Link>

        <Link href="/#/contact">{t("nav_contact")}</Link>
      </Box>
    </Box>
  );

  const drawerWidth = 240;
  return (
    <>
      {isOpen && (
        <Drawer
          variant="temporary"
          anchor="right"
          open={isOpen}
          onClose={setIsOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default DrawerComponent;
