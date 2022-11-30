import React from "react";
import { Loader } from "../assets/";
import {Box} from "@mui/material"
import "../assets/css/style.css";

const LoaderComponent = () => {
  return (
    <Box width="100%" height="100vh" opacity="1" display="flex" alignItems="center" justifyContent="center">
      <img id="loader" width={150} height={150} src={Loader} />;
    </Box>
  );
};

export default LoaderComponent;
