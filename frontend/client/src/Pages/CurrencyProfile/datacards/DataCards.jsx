import { Box, Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import HighLow from "./HighLow";
import OneMonth from "./Month";
import OneDay from "./OneDay";
import OneHour from "./OneHour";
import SevenDays from "./SevenDays";

function DataCards() {
  const path = useLocation();
  const [highLow, setHighLow] = React.useState({});
  const [trend, setTrend] = React.useState({});

  React.useEffect(() => {
    const fetchHighLowRate = async () => {
      const response = await fetch(
        `https://api.streetrates.info//api/rate/high_low/${
          path.pathname.split("/")[1]
        }`
      );
      if (response.status !== 200) {
        console.log("server error", response.statusText);
        toast("Server down, please try again later");
      }
      return await response.json();
    };

    const fetchTrend = async () => {
      const response = await fetch(
        `https://api.streetrates.info//api/currency/trend/${
          path.pathname.split("/")[1]
        }`
      );
      if (response.status !== 200) {
        console.log("server error", response.statusText);
        toast("Server down, please try again later");
      }
      return await response.json();
    };

    fetchTrend()
      .then((data) => {
        setTrend(data.data);
      })
      .catch((error) => {
        console.log("error fetching highest and lowest rates", error);
        toast("Error fetching highes and lowest rates");
      });

    fetchHighLowRate()
      .then((data) => {
        setHighLow(data.data.rates);
      })
      .catch((error) => {
        console.log("error fetching highest and lowest rates", error);
        toast("Error fetching highes and lowest rates");
      });
  }, [path.pathname]);

  return (
    <Container
      maxWidth="100%"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
    >
      <ToastContainer />
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: { lg: "space-between" },
        }}
      >
        <OneHour rate={trend.one_hour} />
        <OneDay rate={trend.one_day} />
        <SevenDays rate={trend.seven_days} />
        <OneMonth rate={trend.one_month} />
      </Box>
      <HighLow rates={highLow} />
    </Container>
  );
}

export default DataCards;
