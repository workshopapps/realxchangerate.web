import { Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import HighLow from "./HighLow";

function DataCards() {
  const path = useLocation();
  const [highLow, setHighLow] = React.useState({});

  React.useEffect(() => {
    const fetchHighLowRate = async () => {
      const response = await fetch(
        `https://api.streetrates.hng.tech/api/rate/high_low/${
          path.pathname.split("/")[1]
        }`
      );
      if (response.status !== 200) {
        console.log("server error", response.statusText);
        toast("Server down, please try again later");
      }
      return await response.json();
    };
    fetchHighLowRate()
      .then((data) => {
        setHighLow(data.data.rates);
        console.log(data.data);
      })
      .catch((error) => {
        console.log("error fetching highest and lowest rates", error);
        toast("Error fetching highes and lowest rates");
      });
  }, [path.pathname]);

  return (
    <Container maxWidth="100%" sx={{}}>
      <ToastContainer />
      <HighLow rates={highLow} />
    </Container>
  );
}

export default DataCards;
