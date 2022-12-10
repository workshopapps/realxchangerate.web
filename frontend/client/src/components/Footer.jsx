import { Box, Stack, Typography, Link, useTheme } from "@mui/material";
import React from "react";
import DropDown from "./DropDown";
import streetRates from "../assets/Logo.svg";
import { useTranslation } from "react-i18next";
import footerLogo from "../assets/footer-logo.png";
const Footer = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  const { t } = useTranslation();
  return (
    <Box backgroundColor={dark ? "#000E25" : "#00296B"}>
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
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: { md: "32px" },
            }}
            style={{ justifyContent: "space-around" }}
          >
            <div style={{ marginRight: "90px" }}>
              <img src={footerLogo} alt="" />
            </div>
            <div style={{ display: "flex" }}>
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
                color={dark ? "#E2E8F0" : "#F8FAFC"}
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
                  color="#F8FAFC"
                >
                  {t("footer_company")}
                </Typography>
                <Link href="/#/about" color="inherit">
                  {t("footer_about")}
                </Link>
                <Link href="/#/blogs" color="inherit">
                  {t("footer_news")}
                </Link>
                {/* <Link href="/#/careers" color="inherit">
              {t("footer_Careers")}
            </Link> */}
                {/* <Link href="/#/partnerships" color="inherit">
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
            </Link> */}
              </Stack>
              {/* <Stack
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
            color={dark ? "#E2E8F0" : "#F8FAFC"}
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
              color="#F8FAFC"
            >
              {t("footer_links")}
            </Typography>

            <Link href="/#/contact" color="inherit">
              {t("footer_contact")}
            </Link>
          </Stack> */}
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
                color={dark ? "#E2E8F0" : "#F8FAFC"}
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
                  color="#F8FAFC"
                >
                  {t("footer_resources")}
                </Typography>
                {/* <Link href="/#/currency-encyclopedia" color="inherit">
              {t("Currency_Encyclopedia")}
            </Link>
            <Link href="/#/historical-currency-exchange" color="inherit">
              {t("footer_historic")}
            </Link> */}
                <Link href="/#/glossary" color="inherit">
                  {t("footer_Glossary")}
                </Link>
                <Link href="/#/faq-overview" color="inherit">
                  {t("footer_faq")}
                </Link>
                <Link href="/#/suggestions" color="inherit">
                  {t("footer_suggestion")}
                </Link>
                {/* <Link href="/#/advertising" color="inherit">
              {t("footer_Advertising")}
            </Link>
            <Link href="/#/ambassadors" color="inherit">
              {t("footer_Ambassadors")}
            </Link> */}
              </Stack>
              {/* <Stack
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
            color={dark ? "#E2E8F0" : "#F8FAFC"}
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
              color="#F8FAFC"
            >
              {t("footer_product")}
            </Typography>
            <Link href="/#/api" color="inherit">
              API
            </Link>
            <Link href="/#/integration-matrix" color="inherit">
              {t("footer_integration")}
            </Link>
          </Stack> */}
              {/* <Stack
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
            color={dark ? "#E2E8F0" : "#F8FAFC"}
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
              color="#F8FAFC"
            >
              {t("footer_support")}
            </Typography>
            <Link href="/#/help-center" color="inherit">
              {t("footer_help")}
            </Link>
            <Link href="/#/faq" color="inherit">
              FAQ
            </Link>

            <Link href="/#/complaint" color="inherit">
              {t("footer_complaint")}
            </Link>
            <Link href="/#/fraud-report" color="inherit">
              {t("footer_fraud")}
            </Link>
          </Stack> */}
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
                color={dark ? "#E2E8F0" : "#F8FAFC"}
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
                  color="#F8FAFC"
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
            </div>
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
              Items={[t("footer_about"), t("footer_news")]}
              Links={["about", "blogs"]}
            />

            <DropDown
              title={t("footer_resources")}
              Items={[
                t("footer_Glossary"),
                t("footer_faq"),
                t("footer_suggestion"),
              ]}
              Links={["faq", "glossary", "suggestions"]}
            />

            <DropDown
              title={t("footer_legal")}
              Items={[
                t("footer_privacy"),
                t("footer_terms"),
                t("footer_cookie"),
                t("footer_compliance"),
              ]}
              Links={["privacy-policy", "terms", "Cookie-policy", "compliance"]}
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
            flexDirection="row-reverse"
          >
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
        </div>
      </Box>
    </Box>
  );
};
export default Footer;
