import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function DeleteContent() {
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
        <Button variant="outlined" color="inherit">
          Cancel
        </Button>
        <Button variant="contained" sx={{ bgcolor: "#EF4444" }}>
          Delete
        </Button>
      </Box>
    </Box>
  );
}
