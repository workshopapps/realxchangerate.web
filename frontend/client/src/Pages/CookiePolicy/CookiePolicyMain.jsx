import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const CookiePolicyMain = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Box>
      <Box
        margin="50px auto"
        display="flex"
        flexDirection="column"
        gap="48px"
        sx={{
          maxWidth: { xs: "84%", sm: "90%", md: "84%" },
        }}
      >
        <Box display="flex" flexDirection="column" gap="24px">
          <Typography
            sx={{
              fontSize: { xs: "19px", sm: "48px" },
              lineHeight: { xs: "23px", md: "56px" },
              fontWeight: { xs: "700" },
            }}
            color={darkMode ? "#FAFAFA" : "#1E293B"}
          >
            {t("cookie_title")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}
            color={darkMode ? "#FAFAFA" : ""}
          >
            {t("cookie_date")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}
            color={darkMode ? "#FAFAFA" : ""}
          >
            {t("cookie_text_one")}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="24px">
          <Typography
            sx={{
              fontSize: { xs: "20px" },
              lineHeight: { xs: "28px" },
              fontWeight: { xs: "600" },
            }}
            color={darkMode ? "#FAFAFA" : ""}
          >
            {t("cookie_header_one")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "24px" },
              fontWeight: { xs: "400" },
            }}
            color={darkMode ? "#FAFAFA" : ""}
          >
            {t("cookie_text_two")}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="24px">
          <Typography
            sx={{
              fontSize: { xs: "20px" },
              lineHeight: { xs: "28px" },
              fontWeight: { xs: "600" },
            }}
            color={darkMode ? "#FAFAFA" : "#1E293B"}
          >
            {t("cookie_header_two")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px" },
              lineHeight: { xs: "28px" },
              fontWeight: { xs: "600" },
            }}
          >
            {t("cookie_text_three")}
          </Typography>
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

          <Stack direction="column" alignItems="flex-start" gap="20px">
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
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "20px" },
                lineHeight: { xs: "28px" },
                fontWeight: { xs: "600" },
              }}
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
