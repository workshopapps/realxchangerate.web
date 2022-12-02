import { Box, Typography, useTheme, Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import im from "../assets/before.png";
import moment from "moment";

export default function MainNewsCard({ currentNews }) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box width="50%" sx={{width:{sm:"40%", md:"50%"}}}>
      {currentNews ? (
        <Box display="flex" flexDirection="column" gap="16px" mt="7px" w="100%">
          <img src={currentNews ? currentNews.image_url : im} alt="im" />
          <Box display="flex" flexDirection="column" gap="24px">
            <Typography color="#334155" sx={{fontSize:{xs:"16px",sm:"13px", md:"16px"}}} lineHeight="19px">
              {moment(currentNews.pubDate).format("Do MMMM, YYYY  |  h:mmA")}
            </Typography>

            <Box display="flex" flexDirection="column" gap="12px">
              <Typography
                color="#0F172A"
                sx={{
                  fontWeight: "500",
                  fontSize: {xs:"16px",sm: "22px",md:"27px", lg: "32px" },
                  lineHeight: { xs: "24px", md: "39px" },
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
                color={darkMode ? "#fff" : "#1E293B"}
                fontSize="16px"
                sx={{
                  fontWeight: "400",

                  lineHeight: {
                    xs:"14px",
                    sm: "16px",
                    md: "20px",
                    lg: "24px",
                  },
                }}
              >
                {currentNews.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Skeleton height={100} />
          <Skeleton height={100} />
          <Skeleton height={100} />
        </Box>
      )}
    </Box>
  );
}
