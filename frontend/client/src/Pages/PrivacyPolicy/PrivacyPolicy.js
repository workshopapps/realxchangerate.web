import React from "react";
import { Link } from "react-router-dom";
import Introduction from "./component/Introduction";
import PersonalData from "./component/PersonalData";
import { useTheme, Box } from "@mui/material";
import { Container, List } from "./style/Privacy.styled";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";
  const textColor = DarkMode ? "#FAFAFA" : "#1e293b";
  const { t } = useTranslation();

  return (
    <Box display="flex" backgroundColor={DarkMode ? "#00050C" : ""}>
      <Container textColor={textColor}>
        <section style={{ marginBottom: "48px" }}>
          <h1>{t("privacy_policy_title")}</h1>
          <p>{t("version2")}</p>
          <p>{t("version3")}</p>
        </section>

        <Introduction />
        <PersonalData />

        <section>
          <h2>{t("data_protection_title")}</h2>
          <div>
            <p>{t("data_protection_list_text")}</p>
            <List>
              <li>{t("data_protection_list1")}</li>
              <li>
                {t("by_email")}
                <a href="mailto: DPO@StreetRates.io"> DPO@StreetRates.io</a>
              </li>
            </List>
            <p>{t("data_protection_text")}</p>
          </div>
        </section>

        <section>
          <h3>{t("cookie_policy")}</h3>
          <span>
            {t("link_description")}
            <Link to="/Cookie-policy"> {t("cookie_policy")} page</Link>
          </span>
        </section>

        <section>
          <h3>{t("terms_and_condition")}</h3>
          <span>
            {t("link_description")}
            <Link to="/terms"> {t("terms_and_condition")}</Link>
          </span>
        </section>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
