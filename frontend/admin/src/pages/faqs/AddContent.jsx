import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { style } from "./styles";

export default function AddContent({ cancel, setNewdata }) {
  const endpoint =
    process.env.NODE_ENV === "production"
      ? "https://api.streetrates.hng.tech/api/admin/add_faq"
      : process.env.NODE_ENV === "development"
      ? "http://localhost:8000/api/admin/add_faq"
      : "";
  const [formData, setFormData] = React.useState({ question: "", answer: "" });
  const [loading, setLoading] = React.useState(false);

  const token = localStorage.getItem("token");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  React.useEffect(() => {
    setNewdata(false);
  }, [setNewdata]);

  const handlePublish = () => {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    };
    fetch(endpoint, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setNewdata(true);
        cancel();
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
        Add Question
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
            required
            value={formData.question}
            onChange={handleChange}
            name="question"
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
            required
            value={formData.answer}
            onChange={handleChange}
            name="answer"
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
          <LoadingButton
            disabled={!formData.question || !formData.answer}
            loading={loading}
            variant="contained"
            sx={{ borderRadius: "8px", p: "10px 20px" }}
            onClick={handlePublish}
          >
            Publish
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}
