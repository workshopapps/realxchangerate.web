import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import { ImageCard } from "./ImageCard";

export default function StoriesNews({ data }) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Grid item sm={4}>
      <Box
        height="348px"
        display="flex"
        backgroundColor={darkMode ? "#000A1B" : "#F8FAFC"}
        border={darkMode ? "0.5px solid #000E25" : "0.5px solid #94A3B8"}
        padding="14px"
        borderRadius="4px"
        flexDirection="column"
        sx={{ gap: { xs: "7px" } }}
      >
        <Box height="176px">
          {data.image_url === null ? (
            <ImageCard
              category={data.category[0]}
              height="176px"
              width="100%"
            />
          ) : (
            <img src={data.image_url} alt="i" height="176px" width="100%" />
          )}
        </Box>

        {data.content === null ? (
          <a href={data.link} target="_blank" rel="noreferrer">
            <Typography
              fontWeight="500"
              lineHeight="16px"
              color={darkMode ? "#FAFAFA" : "#0F172A"}
              sx={{
                fontSize: { xs: "16px", sm: "12px", md: "16px" },
              }}
            >
              {data.title}
            </Typography>
          </a>
        ) : (
          <Link to={`/blogs/${data.id}`}>
            <Typography
              fontWeight="500"
              lineHeight="16px"
              color={darkMode ? "#FAFAFA" : "#0F172A"}
              sx={{
                fontSize: { xs: "16px", sm: "12px", md: "16px" },
              }}
            >
              {data.title}
            </Typography>
          </Link>
        )}
        <Typography
          fontWeight="400"
          lineHeight="28px"
          color={darkMode ? "#8C9FBC" : "#1E293B"}
          sx={{
            fontSize: { xs: "14px", sm: "12px", md: "14px" },
          }}
        >
          {/* {data.category[0].toUpperCase()} */}
          BUSINESS
        </Typography>
        <Typography
          fontWeight="400"
          lineHeight="28px"
          color={darkMode ? "#8C9FBC" : "#334155"}
          sx={{
            fontSize: { xs: "10px", lg: "13px" },
          }}
        >
          {moment(data.pubDate).format("Do MMMM, YYYY | h:mmA")}
        </Typography>
      </Box>
    </Grid>
  );
}

StoriesNews.propTypes = {
  data: PropTypes.object.isRequired,
};
