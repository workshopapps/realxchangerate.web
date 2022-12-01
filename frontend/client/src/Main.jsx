import React, { useState, useMemo, createContext, useEffect } from "react";
import { ThemeProvider, createTheme, Box, CssBaseline } from "@mui/material";
import App from "./App";
import { dispatch } from "./redux/store";
import { GetUserIp, GetCurrencies } from "./redux/features/Reducers/serviceActions";
import Loader from "./components/Loader";
import {useSelector} from "react-redux"
import { setDefaultCurrency, setLoading, setUserIp } from "./redux/features/Reducers/servicesReducer";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Main = () => {
  const [mode, setMode] = useState("light");
  const {isLoading} = useSelector(state => state.service)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily: "Inter, sans-serif",
    },
  
    breakpoints: {
      values: {
        xs: 200,
        sm: 481,
        md: 769,
        lg: 1025,
        xl: 1201,
      },
    },
    palette: {
      mode}

  }), [mode]);

  useEffect(() => {
    const ip = sessionStorage.getItem("ip")
    const defaultCurrency = JSON.parse(sessionStorage.getItem("localCurrency"))
    dispatch(setLoading(true))
    if(!ip || !defaultCurrency){
      dispatch(GetUserIp())
    }   
    dispatch(setUserIp(ip))
    dispatch(setDefaultCurrency(defaultCurrency))
   
    dispatch(GetCurrencies())
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
        width="100%"
        height="100vh"
          sx={{ backgroundColor: "background.default", color: "text.primary" }}
        >
          {isLoading ? <Loader />  :
          <App />}
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Main;
