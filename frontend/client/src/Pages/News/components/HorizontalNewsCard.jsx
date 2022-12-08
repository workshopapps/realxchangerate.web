import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Skeleton, useTheme } from "@mui/material";
import moment from "moment";
import { Link } from "react-router-dom";
import { ImageCard } from "./ImageCard";

export default function HorizontalNewsCard({ data }) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box>
      {data ? (
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            gap: { xs: "15px", md: "20px", lg: "24px" },
            backgroundColor: darkMode
              ? {xs:"#000A1B"}
              : { xs: "#F8FAFC", sm: "#fff" },
            padding: { xs: "17px", sm: "auto" },
          }}
        >
          <>
            {data.image_url === null ? (
              <ImageCard
                category={data.category[0]}
                height="112px"
                width="147px"
              />
            ) : (
              <img src={data.image_url} alt="i" height="112px" width="127px" />
            )}
          </>

          <Box
            display="flex"
            flexDirection="column"
            height="112px"
            sx={{
              margin: { sm: "6px auto", lg: "12px auto" },
              gap: { sm: "10px", lg: "16px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: "11px", lg: "16px" },
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
              <Link to={`/news/${data.id}`}>
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
