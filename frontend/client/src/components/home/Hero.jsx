import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./home.module.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";

function Hero() {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const { t } = useTranslation();
  return (
    <Box className={styles.hero} sx={{ mt: { lg: "4rem" } }}>
      <Typography
        variant="h1"
        sx={{
          textTransform: "titlecase",
          color: `${dark ? "#fafafa1" : "#0F172A"}`,
        }}
        className={styles.simple}
      >
        {t("hero_title")}
      </Typography>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 500 }}>
        {t("hero_sub")}
      </Typography>
      {/* <Typography component="p">{t("hero_texte")}</Typography> */}
      {/* <Box
        className="store"
        sx={{
          m: "10px auto",
        }}
      ></Box> */}
    </Box>
  );
}

export default Hero;
