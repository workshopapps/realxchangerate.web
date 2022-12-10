import { Box, Typography, useTheme, Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { MainSectionImageCard } from "./ImageCard";

export default function MainNewsCard({ currentNews }) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box
      width="50%"
      sx={{
        width: { sm: "40%", md: "50%" },
        marginBottom: { xs: "24px", sm: "0px" },
      }}
    >
      {currentNews ? (
        <Box display="flex" flexDirection="column" gap="16px" mt="7px" w="100%">
          <>
            {currentNews.image_url === null ? (
              <MainSectionImageCard
                category={currentNews.category[0]}
                height="380px"
              />
            ) : (
              <img
                src={currentNews.image_url}
                alt="i"
                height="100%"
                width="100%"
              />
            )}
          </>
          <Box display="flex" flexDirection="column" gap="24px">
            <Typography
              color={darkMode ? "#8C9FBC" : "#334155"}
              sx={{ fontSize: { xs: "16px", sm: "13px", md: "16px" } }}
              lineHeight="19px"
            >
              {moment(currentNews.pubDate).format("Do MMMM, YYYY  |  h:mmA")}
            </Typography>

            <Box display="flex" flexDirection="column" gap="12px">
              <Typography
                color="#0F172A"
                sx={{
                  fontWeight: "500",
                  fontSize: { xs: "16px", sm: "22px", md: "27px", lg: "32px" },
                  lineHeight: { xs: "24px", md: "39px" },
                }}
              >
                <Link
                  to={`/blogs/${currentNews.id}`}
                  style={{
                    textDecoration: "none",
                    color: darkMode ? "#FAFAFA" : "#0F172A",
                  }}
                >
                  {currentNews.title}
                </Link>
              </Typography>
              <Typography
                color={darkMode ? "#8C9FBC" : "#1E293B"}
                fontSize="16px"
                sx={{
                  fontWeight: "400",

                  lineHeight: {
                    xs: "24px",
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
