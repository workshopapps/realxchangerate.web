import React from "react";
import { Box, Typography } from "@mui/material";
import moment from "moment";

const NewsBody = ({ data }) => {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <img
        src={data.image_url}
        alt="img for news"
        width="100%"
        style={{
          borderRadius: "4px",
        }}
      />
      <Typography fontSize="16px" sx={{ display: { xs: "flex", sm: "none" } }}>
        {moment(data.pubDate).format("Do MMMM, YYYY  |  h:mmA")}
      </Typography>

      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "24px",
          color: "#0F172A",
        }}
      >
        Introduction
      </Typography>

      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "24px",
          color: "#0F172A",
        }}
      >
        {data.description}
      </Typography>

      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#0F172A",
        }}
      >
        {data.content}
      </Typography>
    </Box>
  );
};

export default NewsBody;
