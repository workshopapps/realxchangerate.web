import { Box, useTheme } from "@mui/material";
import { PageTitle } from "./components/PageTitle.styled";
import { TermsWrapper } from "./styles/TermsWrapper.styled";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";

  const textColor = DarkMode ? "#fff" : "";
  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", lg: "84%" },
        marginInline: "auto",
      }}
    >
      <div style={{ marginBlockEnd: "60px" }}>
        <PageTitle style={{ color: textColor }}>{t("term_title")}</PageTitle>

        <TermsWrapper>
          <h2 style={{ color: textColor }}>{t("term_sub_title")}</h2>
          <p>{t("term_p1")}</p>
          <p>{t("term_p2")}</p>
          <p>{t("term_p3")}</p>

          <h4 style={{ color: textColor, marginBlock: "30px 0px" }}>
            {t("term_sub_1")}
          </h4>
          <p>{t("term_p4")}</p>

          <h5 style={{ color: textColor }}>{t("term_subtitle_2")}</h5>
          <p>{t("term_p6")}</p>

          <h5 style={{ color: textColor }}>{t("term_sub_2")}</h5>
          <p>{t("term_p6")}</p>

          <h4 style={{ color: textColor, marginBlock: "30px 0px" }}>
            {t("term_sub_3")}
          </h4>

          <h5 style={{ color: textColor }}>{t("term_sub_3")}</h5>
          <p>{t("term_p7")}</p>

          <h5 style={{ color: textColor }}>{t("term_sub_4")}</h5>
          <p>{t("term_p8")}</p>

          <h4 style={{ color: textColor, marginBlock: "30px 0px" }}>
            {t("term_sub_4")}
          </h4>
          <p>{t("term_p9")}</p>
        </TermsWrapper>

        {/* style(STR-17): fixes aligment and spacing */}

        <TermsWrapper>
          <h2 style={{ color: textColor, marginBlock: "60px 20px" }}>
            {t("term_sub_5")}
          </h2>
          <p>{t("term_p10")}</p>
          <p>{t("term_p11")}</p>
          <p>{t("term_p12")}</p>
          <p>{t("term_p13")}</p>
        </TermsWrapper>
      </div>
    </Box>
  );
};

export default TermsAndConditions;
