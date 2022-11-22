import { useMediaQuery, Box, Typography, Stack } from "@mui/material";
import { BackgroundImage, BackgroundImageMobile } from "./assets/index";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const mobileScreen = useMediaQuery("(max-width:481px)");
  const backgroundImage = mobileScreen
    ? BackgroundImageMobile
    : BackgroundImage;

  return (
    <Box minHeight="calc(100vh - 580px)">
      <Box width="100%" margin="0px" padding="0px">
        <img src={backgroundImage} alt="backgroundImage" width="100%" />
        <Box
          position="absolute"
          top="100px"
          left="0"
          sx={{
            height: {
              xs: "298px",
              sm: "250.61px",
              md: "300px",
              lg: "400px",
            },
            minWidth: { xs: "100%" },
          }}
        >
          <Box
            display="flex"
            height="inherit"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: { xs: "33px", sm: "43.2px", md: "46px", lg: "52px" },
                display: { xs: "none", sm: "flex" },

                lineHeight: { xs: "28px", sm: "56px" },
                fontWeight: { xs: "600", sm: "700" },
              }}
              color="#F8FAFC"
              letterSpacing="-0.02em"
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          maxWidth: { xs: "100%", sm: "90%", md: "84%" },

          flexDirection: { xs: "column", sm: "row" },
          gap: "40px",
        }}
        margin="auto"
      >
        <Stack
          sx={{
            maxWidth: { xs: "90%", sm: "470px", md: "589px" },
            margin: { xs: "30px auto", sm: "60px 0px" },
            gap: { xs: "32px" },
          }}
          alignItems="flex-start"
          display="flex"
          direction="column"
        >
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "35px", lg: "40px" },
              lineHeight: { xs: "33px", sm: "42px", md: "48px" },
              fontWeight: { xs: "500" },
            }}
            color="#202020"
            letterSpacing="-0.02em"
          >
            We would love to hear from you, Get in touch with us
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: { xs: "17px", md: "24px" },
              fontWeight: { xs: "400" },
              width: { xs: "100%", sm: "425px", md: "507px" },
              display: { xs: "none", sm: "flex" },
            }}
            color="#4B4B4B"
            letterSpacing="-0.023mm"
          >
            To make inquiries about our services, you can leave us a message. We
            promise to send you a response as soon as possible.
          </Typography>

          <ContactForm />
        </Stack>

        <ContactInfo />
      </Box>
    </Box>
  );
};

export default Contact;
