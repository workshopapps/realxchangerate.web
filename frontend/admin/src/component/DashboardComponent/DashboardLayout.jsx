import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Messages from "../shared/MessagesComponent/Messages";
import CurrencyNotifications from "../shared/CurrencyNotifications/CurrencyNotification";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashboardLayout = () => {
  return (
    <main>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={"10px"}>
          <Grid item xs={12} lg={7}>
            <Messages />
          </Grid>

          <Grid item xs={12} lg={5}>
            <CurrencyNotifications />
          </Grid>

          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>

          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export default DashboardLayout;
