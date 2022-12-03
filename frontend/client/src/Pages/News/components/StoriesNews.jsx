import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import ImageCard from "./ImageCard";

export default function StoriesNews({ data, id }) {
  return (
    <Grid item sm={4}>
      <Box
        display="flex"
        backgroundColor="#F8FAFC"
        border="0.5px solid #94A3B8"
        padding="16px"
        borderRadius="4px"
        flexDirection="column"
        sx={{ gap: { sm: "10px", lg: "16px" } }}
      >
        {/* <>
          {data.image_url === null ? (
            <ImageCard category={data.category[0]} height="176px" />
          ) : (
            <img src={data.image_url} alt="i" height="176px" width="147px" />
          )}
        </> */}
        <img src={data.image_url} alt="i" />

        {data.content === null ? (
          <a href={data.link} target="_blank" rel="noreferrer">
            <Typography
              fontWeight="500"
              lineHeight="28px"
              color="#0F172A"
              sx={{
                fontSize: { xs: "20px", sm: "18px", lg: "24px" },
              }}
            >
              {data.title}
            </Typography>
          </a>
        ) : (
          <Link to={`/news/${id}`}>
            <Typography
              fontWeight="500"
              lineHeight="28px"
              color="#0F172A"
              sx={{
                fontSize: { xs: "16px", lg: "24px" },
              }}
            >
              {data.title}
            </Typography>
          </Link>
        )}
        <Typography
          fontWeight="400"
          lineHeight="28px"
          color="#1E293B"
          sx={{
            fontSize: { xs: "16px", lg: "16px" },
          }}
        >
          {/* {data.category[0].toUpperCase()} */}
          BUSINESS
        </Typography>
        <Typography
          fontWeight="400"
          lineHeight="28px"
          color="#334155"
          sx={{
            fontSize: { xs: "10px", lg: "16px" },
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
