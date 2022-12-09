import React, { useEffect, useState } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { useSelector } from "react-redux";
import { dispatch } from "../../../redux/store";
import { createResponse } from "../../../redux/features/Reducers/servicesReducer";

const ResponseToast = () => {
  const { response } = useSelector((state) => state.service);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const Onclose = () => {
    setState({ open: false, ...state });
    dispatch(createResponse({ type: "", message: "" }));
  };

  useEffect(() => {
    if (response.message === "") {
      setState({ open: false, ...state });
    } else {
      setState({ open: true, vertical: "top", horizontal: "center" });
    }
  }, [response]);

  return (
    <>
      {response.message !== "" && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={Onclose}
          key={vertical + horizontal}
          color="success"
        >
          {response.type === "error" ? (
            <Alert
              severity="error"
              sx={{ fontSize: "14px", minWidth: "300px" }}
              onClose={Onclose}
            >
              <AlertTitle sx={{ fontSize: "18px", fontWeight: "600" }}>
                Error
              </AlertTitle>
              {response.message}
            </Alert>
          ) : (
            <Alert
              severity="success"
              sx={{ fontSize: "14px", minWidth: "300px" }}
              onClose={Onclose}
            >
              <AlertTitle sx={{ fontSize: "18px", fontWeight: "600" }}>
                Success
              </AlertTitle>
              {response.message}
            </Alert>
          )}
        </Snackbar>
      )}
    </>
  );
};

export default ResponseToast;
