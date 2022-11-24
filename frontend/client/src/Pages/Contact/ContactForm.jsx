import React, { useState, useEffect } from "react";
import { Button, DisabledButton } from "./styles/Contact.styled";
import { Typography, Stack, TextField, } from "@mui/material";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [succesMessage, setSucessMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (name === "" || email === "" || message === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [name, message, email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/e79cf7c6eade7d5068495853b4cec9dc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === "true") {
          setSucessMessage(
            "Thank you for leaving a message, we will get back to you soon"
          );
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setSucessMessage(""), 3000);
        }
      })
      .catch((error) => setSucessMessage(error.message));
  };

  return (
    <Stack
      direction="column"
      sx={{
        gap: { xs: "24px", sm: "20px", md: "24px" },
        minWidth: { xs: "100%", sm: "327px", md: "375px" },
      }}
    >
      <Stack direction="column" letterSpacing="0.001em" gap="5px">
        <Typography
          color="#0F172A"
          sx={{
            fontSize: { xs: "14px" },
            lineHeight: { xs: "20px" },
            fontWeight: { xs: "500" },
          }}
        >
          Your name
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Enter your name"
          variant="outlined"
          padding="10px 12px"
          height="40px"
          border="1px solid #D1D5DB"
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Stack>

      <Stack direction="column" letterSpacing="0.001em" gap="5px">
        <Typography
          color="#0F172A"
          sx={{
            fontSize: { xs: "14px" },
            lineHeight: { xs: "20px" },
            fontWeight: { xs: "500" },
          }}
        >
          Your email
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter your email"
          padding="10px 12px"
          height="40px"
          border="1px solid #D1D5DB"
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Stack>

      <Stack direction="column" letterSpacing="0.001em" gap="5px">
        <Typography
          color="#0F172A"
          sx={{
            fontSize: { xs: "14px" },
            lineHeight: { xs: "20px" },
            fontWeight: { xs: "500" },
          }}
        >
          Message
        </Typography>
        <TextField
          id="outlined-textarea"
          multiline
          placeholder="How can we help you?"
          rows={10}
          padding="10px 12px"
          height="40px"
          border="1px solid #D1D5DB"
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Stack>

      <>
        {btnDisabled ? (
          <DisabledButton>Submit</DisabledButton>
        ) : (
          <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
        )}
      </>
    </Stack>
  );
};

export default ContactForm;
