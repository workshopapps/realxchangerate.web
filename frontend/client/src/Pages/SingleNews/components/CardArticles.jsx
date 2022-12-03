import { Box, Card, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
import { ImageCard } from "../../News/components/ImageCard";

export default function CardArticles({ data }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        borderRadius: "4px",
        padding: 2,
        gap: { xs: "10px", sm: "13px" },
      }}
    >
      <>
            {data.image_url === null ? (
              <ImageCard category={data.category[0]} height="150px" width="100%" />
            ) : (
              
              <img src={data.image_url} alt="i" height="150px" width="100%" />
            )}
          </>
          <Link to={`/news/${data.id}`}>
          <Typography
        sx={{
          fontWeight: "500",
          fontSize: { xs: "20px", md: "24px" },
          lineHeight: "144.02%",

          color: "#0F172A",
        }}
      >
        {data.title}
      </Typography>
          </Link>
     
      <Box display="flex" flexDirection="row" gap="10px">
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "143.52%",

            color: "#0F172A",
          }}
        >
          {data.author}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "143.52%",

            color: "#0F172A",
          }}
        >
          {moment(data.date).format("Do MMMM, YYYY")}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "144.02%",
          color: "#0F172A",
        }}
      >
        {data.intro}
      </Typography>
      <Box mt={2} pb={2}>
        <Link
          to={`/news/${data.id}`}
          style={{
            color: "#0064F1",
          }}
        >
          Continue Reading
        </Link>
      </Box>
    </Box>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
