import React, { useState, useEffect } from "react";
import { Button, DisabledButton } from "./styles/Contact.styled";
import axios from "axios";
import { Typography, Stack, TextField, Snackbar, Alert } from "@mui/material";

const ContactForm = ({ textColor }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [nameBlur, setNameBlur] = useState(false);
  const [emailBlur, setEmailBlur] = useState(false);
  const [messagelBlur, setMessagelBlur] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (name === "" || !emailRegex.test(email) || message === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [name, message, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://api.streetrates.info//api/contacts",
        {
          name: name,
          email: email,
          message: message,
        }
      );

      setAlert(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setAlert(false), 3000);
    } catch (error) {
      return;
    }
  };

  return (
    <>
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={() => setAlert(false)}
      >
        <Alert
          onClose={() => setAlert(false)}
          severity="success"
          sx={{ width: "100%", fontSize: "14px" }}
        >
          Thank you for leaving a message, we will get back to you soon
        </Alert>
      </Snackbar>

      <Stack
        direction="column"
        sx={{
          gap: { xs: "24px", sm: "20px", md: "24px" },
          minWidth: { xs: "100%", sm: "327px", md: "375px" },
        }}
      >
        <Stack direction="column" letterSpacing="0.001em" gap="5px">
          <Typography
            color={textColor}
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
            onBlur={() => setNameBlur(true)}
          />
          {nameBlur && !name && (
            <Typography
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "4px",
              }}
            >
              Name is required
            </Typography>
          )}
        </Stack>

        <Stack direction="column" letterSpacing="0.001em" gap="5px">
          <Typography
            color={textColor}
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
            onBlur={() => setEmailBlur(true)}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailBlur && !email && (
            <Typography
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "4px",
              }}
            >
              Email is required
            </Typography>
          )}
        </Stack>

        <Stack direction="column" letterSpacing="0.001em" gap="5px">
          <Typography
            color={textColor}
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
            onBlur={() => setMessagelBlur(true)}
          />
          {messagelBlur && !message && (
            <Typography
              style={{
                color: "red",
                fontSize: "12px",
                marginTop: "4px",
              }}
            >
              Please leave a message
            </Typography>
          )}
        </Stack>

        <>
          {btnDisabled ? (
            <DisabledButton>Submit</DisabledButton>
          ) : (
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
          )}
        </>
      </Stack>
    </>
  );
};

export default ContactForm;
