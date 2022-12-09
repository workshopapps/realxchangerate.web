import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./home.module.css";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <Box className={styles.hero}>
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
        }}
        className={styles.simple}
      >
        {t("hero_title")}
      </Typography>
      <Typography variant="h1" component="h1">
        {t("hero_sub")}
      </Typography>
      <Typography component="p">{t("hero_texte")}</Typography>
      <Box
        className="store"
        sx={{
          m: "0 auto",
        }}
      >
        <a href="#!">
          <img src="/googleplay.svg" alt="" />
        </a>
      </Box>
    </Box>
  );
}

export default Hero;
