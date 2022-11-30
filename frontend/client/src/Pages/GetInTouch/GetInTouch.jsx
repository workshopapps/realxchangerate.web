import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import im from "./img.png";
import location from "./location.png";
import mail from "./mail.png";
import mobile from "./mobile.png";
import fb from "./facebook.png";
import ins from "./Instagram_icon.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import {
  InputStyled,
  StyledButton,
  StyledText,
  SideText,
  ImageStyled,
} from "./GetInTouchPage.styled";

export default function GetInTouch() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [btn, setBtn] = useState(true);

  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    if (data.name !== "" && data.email !== "" && data.email !== "") {
      setBtn(false);
    } else {
      setBtn(true);
    }
    setData(newData);
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
        <Box mt={4}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "700",
              fontSize: "28px",
              textAlign: { md: "inherit", xs: "center", sm: "center" },
              lineHeight: "34px",
              color: "#262A36",
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
              color: "#000000",
            }}
          >
            If you have an idea, we would love to hear it
          </Typography>
        </Box>
        <Box>
          <ImageStyled src={im} alt="illustation" />
        </Box>
      </Stack>
      <Stack
        sx={{
          flexDirection: { md: "row", xs: "column", sm: "column" },
        }}
        mt={10}
      >
        <Box flex={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "48px",
              letterSpacing: "-0.02em",
              paddingBottom: 2,
            }}
          >
            We would love to hear from you, Get in touch with us
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              width: "80%",
              color: "#555962",
            }}
          >
            To make inquiries about our services, you can leave us a message. We
            promise to send you a response as soon as possible.
          </Typography>
          <Box pt={3} pb={8}>
            <form>
              <Stack direction="column" mb={2.3}>
                <label
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "#0F172A",
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
                    color: "#0F172A",
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
                    color: "#0F172A",
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

              <StyledButton disabled={btn}>
                <span>Submit</span>
              </StyledButton>
            </form>
          </Box>
        </Box>

        {/* Right side */}
        <Box flex={1}>
          <Box
            sx={{
              width: { md: "90%", sm: "100%", xs: "100%" },
              margin: "auto",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "500",
                fontSize: "28px",
                lineHeight: "48px",
                /* identical to box height, or 171% */

                letterSpacing: "-0.02em",

                color: "#202020",
              }}
            >
              Contact Information
            </Typography>
            <Box
              sx={{
                width: "98%",
                margin: "auto",
                marginTop: 3,
              }}
            >
              <Stack direction="row" alignItems="center" mt={1}>
                <img src={location} alt="location" width={14} height={20} />
                <SideText>
                  2, Hamilton Avenue, Silicon Valley, California
                </SideText>
              </Stack>
              <Stack direction="row" alignItems="center" mt={2}>
                <img src={mobile} alt="location" width={14} height={20} />
                <SideText>+62 528 124 5600</SideText>
              </Stack>
              <Stack direction="row" alignItems="center" mt={2}>
                <img src={mail} alt="location" width={20} height={16} />
                <SideText>Contact@streetrates.com</SideText>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "90%", sm: "100%", xs: "100%" },
              margin: "auto",
              marginTop: 5,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "500",
                fontSize: "28px",
                lineHeight: "48px",
                /* identical to box height, or 171% */

                letterSpacing: "-0.02em",

                color: "#202020",
              }}
              mb={2}
            >
              Social Media
            </Typography>
            <Typography
              variant="p"
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "-0.02em",
                color: "#4B4B4B",
              }}
            >
              You can connect with us via social media
            </Typography>
            <Stack
              sx={{
                width: "98%",
                margin: "auto",
                marginTop: 3,
                paddingBottom: 5,
              }}
              direction="row"
              gap={4}
            >
              <a href="https://facebook.com">
                <img src={fb} alt="facebook logo" width={24} height={24} />
              </a>
              <a href="https://linkedin.com">
                <img
                  src={linkedin}
                  alt="linkedin logo"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://instagram.com">
                <img src={ins} alt="instagram logo" width={24} height={24} />
              </a>
              <a href="https://twitter.com">
                <img src={twitter} alt="twitter logo" width={24} height={24} />
              </a>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
