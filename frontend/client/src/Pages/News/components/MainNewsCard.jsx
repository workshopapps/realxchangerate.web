import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import im from "../assets/before.png";

export default function MainNewsCard() {
  const theme = useTheme()
  const darkMode = theme.palette.mode === 'dark'
  return (
    <Box flex={2}>
      <Stack>
        <img src={im} alt="im" width="100%" />
        <Typography variant="p" color="#64748B" mt={1}>
          15 November, 2022 | 9:45pm
        </Typography>
        <Box mt={2}>
          <Typography
            variant="h3"
            color="#0F172A"
            sx={{
              fontWeight: "500",
              fontSize: { md: "32px", xs: "22px" },
              marginBottom: 1,
              lineHeight: { md: "39px", xs: "24px" },
            }}
          >
            <Link
              to="/news/1"
              style={{
                textDecoration: "none",
                color: darkMode ? "#fff": "#0F172A",
              }}
            >
              Global stocks rally, dollar drops as U.S. inflation data spurs
              optimism
            </Link>
          </Typography>
          <Typography
            variant="p"
            color={darkMode ? "#fff": "#1E293B"}
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: { sm: "24px", md: "24px", lg: "24px", xs: "144.02%" },
            }}
          >
            Global stock rallied as the dollar and bond yields slid further on
            tuesday after more data signaled U.S inflation was off its peak,
            while an improving outlook for china’s economy gave investors plenty
            to cheer.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
