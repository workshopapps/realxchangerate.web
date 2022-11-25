import React from "react";
import { Stack, Typography, Divider, useMediaQuery } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Message,
  CallIcon,
  Location,
} from "./assets/index";

const ContactInfo = () => {
  const mobileScreen = useMediaQuery("(max-width:481px)");
  return (
    <Stack
      sx={{
        gap: {xs:"40px", sm: "50px", md: "50px" },
      }}
      direction="column"
    >
      <Divider sx={{display:{xs:"flex", sm:"none"}}}/>
      <Stack
        alignItems="flex-start"
        display="flex"
        sx={{
          gap: { xs: "24px", sm: "21px", md: "24px" },
          minWidth: { xs: "90%", sm: "307px", md: "368px" },

          margin: { xs: "auto", sm: "56px auto" },
        }}
        direction="column"
      >
        <Typography
          padding="0px"
          sx={{
            fontSize: { xs: "18px", sm: "32px", md: "35px", lg: "40px" },
            lineHeight: { xs: "22px", sm: "42px", md: "48px" },
            fontWeight: { xs: "500" },
          }}
          color="#202020"
          letterSpacing="-0.02em"
        >
          Contact Information
        </Typography>

        <Stack direction="row" gap="8px">
          <img src={Location} alt="location" />
          <Typography
            color="#4B4B4B"
            sx={{
              fontSize: { xs: "16px", sm: "14px", md: "16px" },
              lineHeight: { xs: "20px", sm: "17px", md: "24px" },
              fontWeight: { xs: "400" },
            }}
          >
            2, Hamilton Avenue, Silicon Valley,{" "}
            {!mobileScreen ? "California" : ""}
          </Typography>
        </Stack>

        <Stack direction="row" gap="8px">
          <img src={CallIcon} alt="call" />
          <Typography
            color="#4B4B4B"
            sx={{
              fontSize: { xs: "16px", sm: "14px", md: "16px" },
              lineHeight: { xs: "20px", sm: "17px", md: "24px" },
              fontWeight: { xs: "400" },
            }}
          >
            +62 528 124 5600
          </Typography>
        </Stack>

        <Stack direction="row" gap="8px">
          <img src={Message} alt="call" />
          <Typography
            color="#4B4B4B"
            sx={{
              fontSize: { xs: "16px", sm: "14px", md: "16px" },
              lineHeight: { xs: "20px", sm: "17px", md: "24px" },
              fontWeight: { xs: "400" },
            }}
          >
            Contact@streetrates.com
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{display:{xs:"flex", sm:"none"}}}/>

      <Stack
        sx={{
          gap: { xs: "16px", sm: "32px", md: "40px" },
          minWidth: { xs: "90%", sm: "307px", md: "368px" },
          margin: { xs: "auto", sm: "0px" },
        }}
        direction="column"
      >
        <Stack
          direction="column"
          sx={{
            gap: { xs: "16px", sm: "20px", md: "24px" },
          }}
        >
          <Typography
            padding="0px"
            sx={{
              fontSize: { xs: "18px", sm: "32px", md: "35px", lg: "40px" },
              lineHeight: { xs: "22px", sm: "42px", md: "48px" },
              fontWeight: { xs: "500" },
            }}
            color="#202020"
            letterSpacing="-0.02em"
          >
            Social Media
          </Typography>

          <Typography
            padding="0px"
            sx={{
              fontSize: { xs: "16px", sm: "14px", md: "16px" },
              lineHeight: { xs: "20px", sm: "17px", md: "20px" },
              fontWeight: { xs: "400" },
            }}
            color="#4B4B4B"
            letterSpacing="-0.02em"
          >
            You can connect with us via social media
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{
            gap: { xs: "24px", sm: "28px", md: "32px" },
          }}
        >
          <img src={Facebook} alt="facebook" />

          <img src={LinkedIn} alt="linkedin" />

          <img src={Instagram} alt="instagram" />

          <img src={Twitter} alt="twitter" />
        </Stack>
      </Stack>
      <Divider sx={{display:{xs:"flex", sm:"none"}}}/>

      <Stack></Stack>
    </Stack>
  );
};

export default ContactInfo;
