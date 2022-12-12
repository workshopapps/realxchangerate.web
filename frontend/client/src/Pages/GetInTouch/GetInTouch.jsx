import { Box, CircularProgress, Stack, Typography, Modal } from "@mui/material";
import React, { useState } from "react";
import im from "./img.png";
import location from "./location.svg";
import mail from "./mail.png";
import mobile from "./mobile.svg";
import fb from "./facebook.png";
import ins from "./Instagram_icon.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import axios from "axios";
import {
  InputStyled,
  StyledButton,
  StyledText,
  SideText,
  ImageStyled,
  CardStyled,
} from "./GetInTouchPage.styled";
import { useTheme } from "@mui/material";

export default function GetInTouch() {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [btn, setBtn] = useState(true);
  const [modal, setModal] = useState(false);
  const [open, setClose] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resText, setRes] = useState("");
  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    if (data.name !== "" && data.email !== "" && data.email !== "") {
      setBtn(false);
    } else {
      setBtn(true);
    }
    setData(newData);
  };
  const BASE_URL = "https://api.streetrates.hng.tech/api/contacts";

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);
    if (data.email !== "" && data.name !== "" && data.message !== "") {
      axios
        .post(BASE_URL, data)
        .then((res) => {
          setLoading(false);
          setModal(true);
          setClose(true);
          setRes(res.data.message);
          const ndata = {
            name: "",
            email: "",
            message: "",
          };
          setData(ndata);
        })
        .catch((e) => {
          console.log(e);
          setRes(e.message);
          setLoading(false);
          setModal(true);
          setClose(true);
        });
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { md: 400, sm: "90%", xs: "90%" },
    margin: { sm: "auto", xs: "auto" },
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: "24px #333333",
    p: 4,
  };

  return (
    <Box
      margin="0px auto"
      sx={{
        width: { xs: "90%", sm: "95%", md: "84%" },
      }}
    >
      <Stack
        sx={{
          flexDirection: {
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          justifyContent: { md: "space-between", sm: "inherit", xs: "inherit" },
          height: { md: "60vh", sm: "auto", xs: "auto" },
        }}
        pt={5}
        alignItems="center"
      >
        <Box mt={4} flex={1}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "700",
              fontSize: "28px",
              textAlign: { md: "inherit", xs: "center", sm: "center" },
              lineHeight: "34px",
              color: darkMode ? "#FAFAFA" : "#262A36",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "27px",
              display: { sm: "flex", xs: "flex" },
              alignItems: { sm: "center", xs: "center" },
              textAlign: { md: "inherit", xs: "center", sm: "center" },
              paddingTop: { sm: 1, xs: 1 },

              color: darkMode ? "#FAFAFA" : "#262A36",
            }}
          >
            If you have any questions about the streetrates or are not sure
            which plan is right for you, contact our team and let’s schedule a
            call.
          </Typography>

          <Box
            mt={3}
            sx={{
              display: { md: "block", sm: "flex", xs: "flex" },
              alignItems: "center",
              flexDirection: { md: "column", sm: "column", xs: "column" },
            }}
          >
            <Typography
              variant="p"
              sx={{
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "27px",
                display: { md: "flex", sm: "flex", xs: "flex" },
                color: darkMode ? "#FAFAFA" : "#555962",

                alignItems: { md: "center", sm: "center", xs: "center" },
                textAlign: { md: "inherit", xs: "center", sm: "center" },
              }}
            >
              Monday - Friday
            </Typography>
            <Typography
              variant="span"
              mt={1.5}
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "27px",
                display: "flex",
                alignItems: "center",
                color: darkMode ? "#FAFAFA" : "#0F172A",
              }}
            >
              8am - 4pm
            </Typography>
            {/* Adding social icon link */}
            <Stack
              sx={{
                width: "98%",
                margin: "auto",
                marginTop: 3,
                paddingBottom: 5,
                display: { md: "block", sm: "flex", xs: "flex" },
                alignItems: "center",
                justifyContent: { md: "center", sm: "center", xs: "center" },
              }}
              direction="row"
            >
              <a
                href="https://facebook.com"
                style={{
                  paddingRight: 12,
                }}
              >
                <img src={fb} alt="facebook logo" width={24} height={24} />
              </a>
              <a
                href="https://linkedin.com"
                style={{
                  paddingRight: 12,
                }}
              >
                <img
                  src={linkedin}
                  alt="linkedin logo"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com"
                style={{
                  paddingRight: 12,
                }}
              >
                <img src={ins} alt="instagram logo" width={24} height={24} />
              </a>
              <a
                href="https://twitter.com"
                style={{
                  paddingRight: 12,
                }}
              >
                <img src={twitter} alt="twitter logo" width={24} height={24} />
              </a>
            </Stack>
          </Box>
        </Box>
        <Box flex={1}>
          <ImageStyled src={im} alt="illustation" width="100%" />
        </Box>
      </Stack>

      {/* Contact and form section */}
      <Stack
        sx={{
          flexDirection: { md: "column", xs: "column", sm: "column" },
        }}
        mt={10}
      >
        {/* Right side */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "48px",
              /* identical to box height, or 171% */

              letterSpacing: "-0.02em",
              color: darkMode ? "#FAFAFA" : "#202020",

              textAlign: "center",
            }}
          >
            Contact Information
          </Typography>
          <Box
            sx={{
              width: "98%",
              margin: "auto",
              marginTop: 3,
              display: { lg: "flex", md: "block", sm: "block", xs: "block" },
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <CardStyled>
              <img src={location} alt="location" width={21} height={30} />
              <span style={{ color: darkMode ? "#FAFAFA" : "#202020" }}>
                Location
              </span>
              <SideText style={{ color: darkMode ? "#FAFAFA" : "#202020" }}>
                2, Hamilton Avenue, Silicon Valley, California
              </SideText>
            </CardStyled>
            <CardStyled>
              <img src={mobile} alt="location" width={27} height={27} />
              <span style={{ color: darkMode ? "#FAFAFA" : "#202020" }}>
                Call Us
              </span>
              <SideText style={{ color: darkMode ? "#FAFAFA" : "#202020" }}>
                +62 528 124 5600
              </SideText>
            </CardStyled>
            <CardStyled>
              <img src={mail} alt="location" width={30} height={24} />
              <span style={{ color: darkMode ? "#FAFAFA" : "#202020" }}>
                Email Us
              </span>
              <SideText style={{ color: darkMode ? "#FAFAFA" : "#202020" }}>
                Contact@streetrates.com
              </SideText>
            </CardStyled>
          </Box>
        </Box>
        {/* Form for contact */}
        <Box
          flex={1}
          mt={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              border: darkMode ? "1px solid #94A3B8" : "1px solid #CBD5E1",
              borderRadius: "8px",
              padding: { lg: 4, sm: 2, xs: 2 },
              width: { lg: "75%", md: "70%", xs: "100%", sm: "100%" },
              margin: "auto",
              marginBottom: 10,
              backgroundColor: darkMode ? "#161C2C" : "",
            }}
          >
            <form onSubmit={handleSend}>
              <Stack direction="column" mb={2.3}>
                <label
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",

                    color: darkMode ? "#FAFAFA" : "#0F172A",
                  }}
                >
                  Your name{" "}
                </label>
                <InputStyled
                  placeholder="Enter your name"
                  onChange={(e) => handleChange(e)}
                  name="name"
                  value={data.name}
                  required
                  type="text"
                />
              </Stack>
              <Stack direction="column" mb={2.3}>
                <label
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: darkMode ? "#FAFAFA" : "#0F172A",
                  }}
                >
                  Your email{" "}
                </label>
                <InputStyled
                  placeholder="Enter your email address"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </Stack>
              <Stack direction="column" mb={2.3}>
                <label
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: darkMode ? "#FAFAFA" : "#0F172A",
                  }}
                >
                  Message{" "}
                </label>
                <StyledText
                  placeholder="How can we help you?"
                  name="message"
                  required
                  value={data.message}
                  onChange={(e) => handleChange(e)}
                />
              </Stack>

              <StyledButton disabled={btn} type="submit">
                {!loading && <span>Submit</span>}
                {loading && <CircularProgress size={15} />}
              </StyledButton>
            </form>
          </Box>
        </Box>
      </Stack>
      {modal && (
        <Modal
          open={open}
          onClose={() => setClose(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            width: { sm: "90%", xs: "90%" },
            margin: { sm: "auto", xs: "auto" },
          }}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
              Message status
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontSize: 16, color: "#4b4b4b" }}
            >
              {resText}
            </Typography>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
