import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { style } from "./styles";

export default function DeleteContent({ cancel, id, setNewdata }) {
  const [loading, setLoading] = React.useState(false);
  const token = localStorage.getItem("token");

  const endpoint =
    process.env.NODE_ENV === "production"
      ? `https://api.streetrates.info/api/admin/delete_faq/${id}`
      : process.env.NODE_ENV === "development"
      ? `http://localhost:8000/api/admin/delete_faq/${id}`
      : "";
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  React.useEffect(() => {
    setNewdata(false);
  }, [setNewdata]);

  const handleDelete = () => {
    setLoading(true);
    fetch(endpoint, requestOptions)
      .then(() => {
        setLoading(false);
        setNewdata(true);
        cancel();
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <Box sx={style}>
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        sx={{ fontWeight: "bold" }}
      >
        Delete Question
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        Are you sure you want to delete this question? Action can not be
        reversed
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 3, m: 2, mt: 3 }}
      >
        <Button variant="outlined" color="inherit" onClick={cancel}>
          Cancel
        </Button>
        <LoadingButton
          loading={loading}
          variant="contained"
          sx={{ bgcolor: "#EF4444" }}
          onClick={handleDelete}
        >
          Delete
        </LoadingButton>
      </Box>
    </Box>
  );
}
