import { Drawer, Typography, Divider, Box, Link } from "@mui/material";
import React from "react";
import streetRates from "../assets/Logo.svg";
import { useTranslation } from "react-i18next";

const DrawerComponent = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const drawer = (
    <Box onClick={setIsOpen} sx={{ textAlign: "center" }}>
      <Link to="/" style={{ color: "#0062ff" }}>
        <img
          style={{ width: "clamp(90px, 10vw, 140px)", margin: "20px auto" }}
          src={streetRates}
          alt=""
        />
      </Link>
      <Divider />
      <Box
        alignItems="center"
        display="flex"
        gap="20px"
        marginTop="20px"
        flexDirection="column"
        fontWeight="400"
        lineHeight="24px"
        fontSize="16px"
        color="#0062ff"
      >
        <Link href="/">{t("nav_home")}</Link>

        <Link href="/#/convert">{t("nav_convert")}</Link>

        <Link href="/#/">{t("nav_curency")}</Link>

        <Link href="/#/news">{t("nav_news")}</Link>

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
            display: { xs: "block", sm: "none" },
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
