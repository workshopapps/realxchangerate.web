import { Box, Stack, Typography, useTheme, Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import im from "../assets/before.png";
import moment from "moment";

export default function MainNewsCard({ currentNews }) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box flex={2}>
      <Stack>
        {currentNews ? (
          <>
            <img
              src={currentNews ? currentNews.image_url : im}
              alt="im"
              width="100%"
            />
            <Typography variant="p" color="#64748B" mt={1}>
              {moment(currentNews.pubDate).format("Do MMMM, YYYY | h:mmA")}
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
                    color: darkMode ? "#fff" : "#0F172A",
                  }}
                >
                  {currentNews.title}
                </Link>
              </Typography>
              <Typography
                variant="p"
                color={darkMode ? "#fff" : "#1E293B"}
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: {
                    sm: "24px",
                    md: "24px",
                    lg: "24px",
                    xs: "144.02%",
                  },
                }}
              >
                {currentNews.description}
              </Typography>
            </Box>
          </>
        ) : (
          <Box>
            <Skeleton height={100} />
            <Skeleton height={100} />
            <Skeleton height={100} />
          </Box>
        )}
      </Stack>
    </Box>
  );
}
