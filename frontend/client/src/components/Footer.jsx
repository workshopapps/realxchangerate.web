import { Box, Stack, Typography, Link } from "@mui/material";
import React from "react";
import DropDown from "./DropDown";
import streetRates from "../assets/Logo.svg";
import { Filter } from "iconsax-react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box backgroundColor="#00296B">
      <Box
        margin="0px auto"
        pt="56px"
        style={{
          maxWidth: "1440px",
          boxSizing: "border-box",
        }}
        sx={{
          paddingLeft: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
          paddingRight: { xs: 2, sm: 2, md: 2, lg: 9, xl: 9 },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: { md: "32px" },
          }}
        >
          <Stack
            flex="auto"
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              {t("footer_company")}
            </Typography>
            <Link href="/#/about" color="inherit">
              {t("footer_about")}
            </Link>
            <Link href="/#/careers" color="inherit">
              {t("footer_Careers")}
            </Link>
            <Link href="/#/partnerships" color="inherit">
              {t("footer_Partnership")}
            </Link>
            <Link href="/#/teams" color="inherit">
              {t("footer_Meet")}
            </Link>
            <Link href="/#/press" color="inherit">
              {t("footer_Press")}
            </Link>
            <Link href="/#/bod" color="inherit">
              {t("footer_directors")}
            </Link>
          </Stack>
          <Stack
            flex="auto"
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              {t("footer_links")}
            </Typography>
            <Link href="/#/news" color="inherit">
              {t("footer_news")}
            </Link>
            <Link href="/#/contact" color="inherit">
              {t("footer_contact")}
            </Link>
          </Stack>
          <Stack
            flex="auto"
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              {t("footer_resources")}
            </Typography>
            <Link href="/#/currency-encyclopedia" color="inherit">
              {t("Currency_Encyclopedia")}
            </Link>
            <Link href="/#/historical-currency-exchange" color="inherit">
              {t("footer_historic")}
            </Link>
            <Link href="/#/glossary" color="inherit">
              {t("footer_Glossary")}
            </Link>
            <Link href="/#/advertising" color="inherit">
              {t("footer_Advertising")}
            </Link>
            <Link href="/#/ambassadors" color="inherit">
              {t("footer_Ambassadors")}
            </Link>
          </Stack>
          <Stack
            flex="auto"
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              {t("footer_product")}
            </Typography>
            <Link href="/#/api" color="inherit">
              API
            </Link>
            <Link href="/#/integration-matrix" color="inherit">
              {t("footer_integration")}
            </Link>
          </Stack>
          <Stack
            flex="auto"
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              {t("footer_support")}
            </Typography>
            <Link href="/#/help-center" color="inherit">
              {t("footer_help")}
            </Link>
            <Link href="/#/faq" color="inherit">
              FAQ
            </Link>
            <Link href="/#/faq-overview" color="inherit">
              {t("footer_faq")}
            </Link>
            <Link href="/#/complaint" color="inherit">
              {t("footer_complaint")}
            </Link>
            <Link href="/#/fraud-report" color="inherit">
              {t("footer_fraud")}
            </Link>
          </Stack>
          <Stack
            flex="auto"
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              {t("footer_legal")}
            </Typography>
            <Link href="/#/privacy-policy" color="inherit">
              {t("footer_privacy")}
            </Link>
            <Link href="/#/terms" color="inherit">
              {t("footer_terms")}
            </Link>
            <Link href="/#/Cookie-policy" color="inherit">
              {t("footer_cookie")}
            </Link>
            <Link href="/#/compliance" color="inherit">
              {t("footer_compliance")}
            </Link>
          </Stack>
        </Box>
        {/* mobile view */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            gap: { xs: "22px" },
          }}
          flexDirection="column"
          marginTop="0px"
          justifyContent="center"
          alignItems="center"
        >
          <DropDown
            title={t("footer_company")}
            Items={[
              t("footer_about"),
              t("footer_Careers"),
              t("footer_Partnership"),
              t("footer_Meet"),
              t("footer_Press"),
              t("footer_directors"),
            ]}
            Links={[
              "about",
              "careers",
              "partnerships",
              "teams",
              "press",
              "bod",
            ]}
          />
          <DropDown
            title={t("footer_links")}
            Items={[t("footer_news"), t("footer_contact")]}
            Links={["news", "contact"]}
          />
          <DropDown
            title={t("footer_resources")}
            Items={[
              t("Currency_Encyclopedia"),
              t("footer_historic"),
              t("footer_Glossary"),
              t("footer_Advertising"),
              t("footer_Ambassadors"),
            ]}
            Links={[
              "currency-encyclopedia",
              "historical-currency-exchange",
              "glossary",
              "advertising",
              "ambassadors",
            ]}
          />
          <DropDown
            title={t("footer_product")}
            Items={["API", t("footer_integration")]}
            Links={["api", "integration-matrix"]}
          />
          <DropDown
            title={t("footer_support")}
            Items={[
              t("footer_help"),
              t("footer_faq"),
              "FAQ Overview",
              t("footer_complaint"),
              t("footer_fraud"),
            ]}
            Links={[
              "help-center",
              "faq",
              "faq-overview",
              "complaint",
              "fraud-report",
            ]}
          />
          <DropDown
            title={t("footer_legal")}
            Items={[
              t("footer_privacy"),
              t("footer_terms"),
              t("footer_cookie"),
              t("footer_compliance"),
            ]}
            Links={["#", "terms", "CookiePolicy", "compliance"]}
          />
        </Box>
        <Box margin="20px 0px">
          <hr style={{ height: "1px", backgroundColor: "#CBD5E1" }} />
        </Box>
        <Box
          display="flex"
          padding="20px 0px"
          justifyContent="space-between"
          alignItems="center"
          color="#F8FAFC"
        >
          <img
            style={{
              width: "clamp(90px, 10vw, 140px)",
              marginTop: "20px",
              filter:
                "invert(100%) sepia(94%) saturate(0%) hue-rotate(54deg) brightness(106%) contrast(103%)",
            }}
            src={streetRates}
            alt=""
          />
          <Typography
            sx={{
              fontSize: { xs: "12px" },
              lineHeight: { xs: "18px" },
              fontWeight: { xs: "400" },
            }}
            letterSpacing="-0.02em"
          >
            © 2022 Bevel All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
