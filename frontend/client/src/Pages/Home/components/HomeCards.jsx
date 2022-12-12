import { Box, Container } from "@mui/material";
import React from "react";
import image1 from "../assets/home1.svg";
import image2 from "../assets/home2.svg";
import image3 from "../assets/home3.svg";
import Cards from "./Cards";

import { useTranslation } from "react-i18next";

function HomeCards() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        // alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        gap: 3,
        m: "5rem auto",
      }}
    >

      <Cards text={t("home_card_one")} image={image1} />
      <Cards
        text={t("home_card_two")}

        image={image2}
        bg="#00296B"
        color="#fff"
      />

      <Cards text={t("home_card_three")} image={image3} />

    </Box>
  );
}

export default HomeCards;
