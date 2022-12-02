import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { style } from "./styles";

export default function EditContent({ cancel }) {
  return (
    <Box sx={style}>
      <Typography
        id="transition-modal-title"
        variant="h6"
        component="h2"
        sx={{ fontWeight: "bold" }}
      >
        Edit FAQs
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2 }}>
        Enter the question and answer below
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 3,
          mt: 3,
        }}
      >
        <FormControl fullWidth>
          <FormLabel
            htmlFor="question"
            sx={{ color: "inherit", fontWeight: 500, mb: ".4rem" }}
          >
            Question
          </FormLabel>
          <TextField
            id="question"
            fullWidth
            placeholder="Type in your question here"
          />
        </FormControl>
        <FormControl fullWidth>
          <FormLabel
            htmlFor="answer"
            sx={{ color: "inherit", fontWeight: 500, mb: ".4rem" }}
          >
            Answer
          </FormLabel>
          <TextField
            id="answer"
            fullWidth
            multiline
            rows={4}
            placeholder="Type in your answer here"
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            gap: 3,
            m: 2,
            mt: 3,
            ml: 0,
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{ borderRadius: "8px", p: "10px 25px" }}
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: "8px", p: "10px 20px" }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
