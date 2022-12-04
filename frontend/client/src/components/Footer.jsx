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
              Resources
            </Typography>
            <Link href="/#/currency-encyclopedia" color="inherit">
              Currency Encyclopedia
            </Link>
            <Link href="/#/historical-currency-exchange" color="inherit">
              Historical currency exchange
            </Link>
            <Link href="/#/glossary" color="inherit">
              Glossary
            </Link>
            <Link href="/#/advertising" color="inherit">
              Online Advertising
            </Link>
            <Link href="/#/ambassadors" color="inherit">
              Ambassadors
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
              Product
            </Typography>
            <Link href="/#/api" color="inherit">
              API
            </Link>
            <Link href="/#/integration-matrix" color="inherit">
              Integration matrix
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
              Support
            </Typography>
            <Link href="/#/help-center" color="inherit">
              Help Center
            </Link>
            <Link href="/#/faq" color="inherit">
              FAQ
            </Link>
            <Link href="/#/faq-overview" color="inherit">
              FAQ Overview
            </Link>
            <Link href="/#/complaint" color="inherit">
              File a complaint
            </Link>
            <Link href="/#/fraud-report" color="inherit">
              Fraud report
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
              Legal
            </Typography>
            <Link href="/#/privacy-policy" color="inherit">
              Privacy Policy
            </Link>
            <Link href="/#/terms" color="inherit">
              Terms and Conditions
            </Link>
            <Link href="/#/Cookie-policy" color="inherit">
              Cookie Policy
            </Link>
            <Link href="/#/compliance" color="inherit">
              Compliance
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
            title={"Company"}
            Items={[
              "About Us",
              "Careers",
              "Patnerships",
              "Meet the team",
              "Press",
              "Board of directors",
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
            title={"Links"}
            Items={["News", "Contact Us"]}
            Links={["news", "contact"]}
          />
          <DropDown
            title={"Resources"}
            Items={[
              "Currency Encyclopedia",
              "Historical currency exchange",
              "Glossary",
              "Online Advertising",
              "Ambassadors",
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
            title={"Product"}
            Items={["API", "Integration matrix"]}
            Links={["api", "integration-matrix"]}
          />
          <DropDown
            title={"Support"}
            Items={[
              "Help Centre",
              "FAQ",
              "FAQ Overview",
              "File a complaint",
              "Fraud Report",
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
            title={"Legal"}
            Items={[
              "Private Policy",
              "Terms and Conditions",
              "Cookie Policy",
              "Compliance",
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
