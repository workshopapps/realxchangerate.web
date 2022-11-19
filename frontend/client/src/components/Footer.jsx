import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import DropDown from "./DropDown";

const Footer = () => {
  return (
    <Box backgroundColor="#00296B" marginTop="50px">
      <Box
        margin="0px auto"
        pt="56px"
        sx={{
          maxWidth: { xs: "84%", sm: "90%", md: "84%" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: { md: "32px" },
          }}
        >
          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Company
            </Typography>
            <Link href="#" color="inherit">
              About Us
            </Link>
            <Link href="#" color="inherit">
              Careers
            </Link>
            <Link href="#" color="inherit">
              Patnerships
            </Link>
            <Link href="#" color="inherit">
              Meet the team
            </Link>
            <Link href="#" color="inherit">
              Press
            </Link>
            <Link href="#" color="inherit">
              Board of directors
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Links
            </Typography>
            <Link href="#" color="inherit">
              Convert
            </Link>
            <Link href="#" color="inherit">
              News
            </Link>
            <Link href="#" color="inherit">
              Contact Us
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Resources
            </Typography>
            <Link href="#" color="inherit">
              Currency Encyclopedia
            </Link>
            <Link href="#" color="inherit">
              Historical currency exchange
            </Link>

            <Link href="#" color="inherit">
              Glossary
            </Link>

            <Link href="#" color="inherit">
              Online Advertising
            </Link>

            <Link href="#" color="inherit">
              Ambassadors
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Product
            </Typography>
            <Link href="#" color="inherit">
              API
            </Link>
            <Link href="#" color="inherit">
              Integration matrix
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: { xs: "19px", sm: "15px", lg: "19px" },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Support
            </Typography>
            <Link href="#" color="inherit">
              Help Center
            </Link>
            <Link href="#" color="inherit">
              FAQ
            </Link>
            <Link href="complaint" color="inherit">
              File a complaint
            </Link>
            <Link href="#" color="inherit">
              Fraud report
            </Link>
          </Stack>
          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Support
            </Typography>
            <Link href="/help-center" color="inherit">
              Help Center
            </Link>
            <Link href="#" color="inherit">
              FAQ
            </Link>
            <Link href="complaint" color="inherit">
              File a complaint
            </Link>
            <Link href="#" color="inherit">
              Fraud report
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px" },
              lineHeight: { xs: "20px" },
              fontWeight: { xs: "400" },
              width: { sm: "173.33px" },
            }}
            color="#F8FAFC"
            letterSpacing="0.001em"
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "19px",
                  sm: "15px",
                  lg: "19px",
                },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
              letterSpacing="-0.02em"
            >
              Legal
            </Typography>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit">
              Terms and Conditions
            </Link>
            <Link href="#" color="inherit">
              Cookie Policy
            </Link>
            <Link href="#" color="inherit">
              Compliance
            </Link>
          </Stack>
        </Box>

        {/* mobile view */}
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            gap: { xs: "22px" },
          }}
          flexDirection="column"
          marginTop="0px"
          justifyContent="center"
          alignItems="center"
        >
          <DropDown
            title={"Company"}
            Items={[
              "About Us",
              "Careers",
              "Patnerships",
              "Meet the team",
              "Press",
              "Board of directors",
            ]}
          />
          <DropDown title={"Links"} Items={["Convert", "News", "Contact Us"]} />
          <DropDown
            title={"Resources"}
            Items={[
              "Currency Encyclopedia",
              "Historical currency exchange",
              "Glossary",
              "Online Advertising",
              "Ambassadors",
            ]}
          />
          <DropDown title={"Product"} Items={["API", "Integration matrix"]} />
          <DropDown
            title={"Support"}
            Items={["Help Centre", "FAQ", "File a complaint", "Fraud Report"]}
          />
          <DropDown
            title={"Legal"}
            Items={[
              "Private Policy",
              "Terms and Conditions",
              "Cookie Policy",
              "Compliance",
            ]}
          />
        </Box>

        <Box margin="20px 0px">
          <hr style={{ height: "1px", backgroundColor: "#CBD5E1" }} />
        </Box>

        <Box
          display="flex"
          padding="20px 0px"
          justifyContent="space-between"
          alignItems="center"
          color="#F8FAFC"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "19px",
                sm: "20px",
                md: "24px",
                lg: "19px",
              },
              lineHeight: { xs: "23px" },
              fontWeight: { xs: "800" },
            }}
            letterSpacing="-0.02em"
          >
            Street Rate
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "12px" },
              lineHeight: { xs: "18px" },
              fontWeight: { xs: "400" },
            }}
            letterSpacing="-0.02em"
          >
            © 2022 Bevel All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
