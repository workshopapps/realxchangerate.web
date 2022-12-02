import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Skeleton } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";

export default function HorizontalNewsCard({ data, id }) {
  return (
    <Box>
      {data ? (
        <Box
          display="flex"
          flexDirection="row"
          sx={{ gap: {sm:"15px", md: "20px", lg: "24px" } }}
        >
          <>
            {data.image_url === null ? (
              <ImageCard category={data.category[0]} height="112px" />
            ) : (
              
              <img src={data.image_url} alt="i" height="100%" width="100%" />
            )}
          </>

          <Box
            display="flex"
            flexDirection="column"
            height="112px"
            sx={{ margin: { sm: "6px auto", lg: "12px auto" }, gap:{sm:"10px", lg:"16px"} }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: "10px", lg: "16px" },
                lineHeight: "19px",
                color: "#7C7C7C",
              }}
            >
              {moment(data.pubDate).format("Do MMMM, YYYY  |  h:mmA")}
            </Typography>

            {data.content === null ? (
              <a href={data.link} target="_blank" rel="noreferrer">
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: {
                      xs: "15px",
                      lg: "20px",
                    },
                    lineHeight: "24px",
                    color: "#0F172A",
                  }}
                >
                  {data.title}
                </Typography>
              </a>
            ) : (
              <Link to={`/news/${id}`}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: {
                      xs: "15px",
                      lg: "20px",
                    },
                    lineHeight: "24px",
                    color: "#0F172A",
                  }}
                >
                  {data.title}
                </Typography>
              </Link>
            )}
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

HorizontalNewsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
