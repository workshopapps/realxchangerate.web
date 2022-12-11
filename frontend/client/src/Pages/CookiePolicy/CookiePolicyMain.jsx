import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const CookiePolicyMain = () => {
  const { t } = useTranslation();
  return (
    <Box marginTop="50px" fontFamily="'Inter', sans-serif" maxWidth="1440px">
      <Box
        margin="0px auto"
        sx={{
          maxWidth: { xs: "84%", sm: "90%", md: "84%" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "19px", sm: "48px" },
              lineHeight: { xs: "23px", md: "56px" },
              fontWeight: { xs: "700" },
            }}
            color="#1E293B"
          >
            {t("cookie_title")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}
            marginTop="30px"
          >
            {t("cookie_date")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}
            marginTop="64px"
          >
            {t("cookie_text_one")}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "20px" },
              lineHeight: { xs: "28px" },
              fontWeight: { xs: "600" },
            }}
            marginTop="64px"
          >
            {t("cookie_header_one")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}
          >
            {t("cookie_text_two")}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "20px" },
              lineHeight: { xs: "28px" },
              fontWeight: { xs: "600" },
            }}
            marginTop="64px"
            marginBottom="8px"
            color="#1E293B"
          >
            {t("cookie_header_two")}
          </Typography>
          <Typography>{t("cookie_text_three")}</Typography>
          <ul
            style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "400" }}
          >
            <li>{t("cookie_list_one")}</li>
            <li>{t("cookie_list_two")}</li>
            <li>{t("cookie_list_three")}</li>
            <li>{t("cookie_list_four")}</li>
            <li>{t("cookie_list_five")}</li>
            <li>{t("cookie_list_six")}</li>
            <li>{t("cookie_list_seven")}</li>
            <li>{t("cookie_list_eight")}</li>
            <li>{t("cookie_list_nine")}</li>
          </ul>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="20px"
            marginTop="64px"
          >
            <Typography
              sx={{
                fontSize: { xs: "20px" },
                lineHeight: { xs: "28px" },
                fontWeight: { xs: "600" },
              }}
            >
              {t("cookie_header_three")}
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "16px" },
                  lineHeight: { xs: "24px" },
                  fontWeight: { xs: "600" },
                }}
              >
                 {t("cookie_subhead_one")}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px" },
                  lineHeight: { xs: "24px" },
                  fontWeight: { xs: "400" },
                }}
              >
                {t("cookie_subtext_one")}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "16px" },
                  lineHeight: { xs: "24px" },
                  fontWeight: { xs: "600" },
                }}
              >
                {t("cookie_subhead_two")}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px" },
                  lineHeight: { xs: "24px" },
                  fontWeight: { xs: "400" },
                }}
              >
                {t("cookie_subtext_two")}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "16px" },
                  lineHeight: { xs: "24px" },
                  fontWeight: { xs: "600" },
                }}
              >
                {t("cookie_subhead_three")}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "16px" },
                  lineHeight: { xs: "24px" },
                  fontWeight: { xs: "400" },
                }}
              >
                {t("cookie_subtext_three")}
              </Typography>
            </Box>
          </Stack>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "20px" },
                lineHeight: { xs: "28px" },
                fontWeight: { xs: "600" },
              }}
              marginTop="64px"
            >
              {t("cookie_subhead_four")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px" },
                lineHeight: { xs: "24px" },
                fontWeight: { xs: "400" },
              }}
            >
              {t("cookie_subtext_four")}
            </Typography>
          </Box>
          <Box marginBottom="120px">
            <Typography
              sx={{
                fontSize: { xs: "20px" },
                lineHeight: { xs: "28px" },
                fontWeight: { xs: "600" },
              }}
              marginTop="64px"
            >
              {t("cookie_subhead_five")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px" },
                lineHeight: { xs: "24px" },
                fontWeight: { xs: "400" },
              }}
            >
              {t("cookie_subtext_five")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CookiePolicyMain;
