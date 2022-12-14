import React from "react";
import { Box, Breadcrumbs, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";

const Header = ({ data }) => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ gap: { xs: "16px", md: "20px", lg: "24px" } }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Link underline="hover" to="/news">
          <Typography
            color={darkMode ? "#ECECEC" : "#00000"}
            sx={{
              fontWeight: "400",
              fontSize: { md: "16px", sm: "14px", xs: "12px" },
              lineHeight: "19px",
            }}
          >
            News
          </Typography>
        </Link>
        <Typography
          color="#0062FF"
          sx={{
            fontWeight: "400",
            fontSize: { md: "16px", sm: "14px", xs: "12px" },
            lineHeight: "19px",
            textDecoration: "none",
          }}
        >
          Currencies
        </Typography>
      </Breadcrumbs>

      <Typography
        sx={{
          fontWeight: "500",
          fontSize: {
            md: "26px",
            lg: "30px",
            sm: "22px",
            xs: "20px",
          },
          lineHeight: {
            md: "29px",
            sm: "132.52%",
            xs: "132.52%",
          },
        }}
      >
        {data.title}
      </Typography>

      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "144.02%",
          color: darkMode ? "#ECECEC" : "#0F172A",
        }}
      >
        By : {data.creator && <b>{data.creator[0]}</b>}
      </Typography>
      <Typography
        fontSize="16px"
        sx={{
          display: { xs: "none", sm: "flex" },
          color: darkMode ? "#ECECEC" : "#0F172A",
        }}
      >
        {moment(data.pubDate).format("Do MMMM, YYYY  |  h:mmA")}
      </Typography>
    </Box>
  );
};

export default Header;
