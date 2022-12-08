import React from "react";
import { Box, Typography } from "@mui/material";
import moment from "moment";
import { MainSectionImageCard } from "../../News/components/ImageCard";

const NewsBody = ({ data }) => {
  return (
    <Box display="flex" flexDirection="column" gap="16px">
      <>
        {data.image_url === null ? (
          <MainSectionImageCard category={data.category[0]} height="380px" />
        ) : (
          <img src={data.image_url} alt="i" height="100%" width="100%" />
        )}
      </>
      <Typography fontSize="16px" sx={{ display: { xs: "flex", sm: "none" } }}>
        {moment(data.pubDate).format("Do MMMM, YYYY  |  h:mmA")}
      </Typography>

      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "24px",
        }}
      >
        Introduction
      </Typography>

      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "24px",
        }}
      >
        {data.description}
      </Typography>

      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {data.content}
      </Typography>
    </Box>
  );
};

export default NewsBody;
