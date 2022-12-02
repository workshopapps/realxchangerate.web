import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { style } from "./styles";

export default function DeleteContent({ cancel }) {
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
        <Button variant="contained" sx={{ bgcolor: "#EF4444" }}>
          Delete
        </Button>
      </Box>
    </Box>
  );
}
