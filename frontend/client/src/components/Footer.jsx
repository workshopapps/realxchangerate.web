import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import DropDown from "./DropDown";

const Footer = () => {
  return (
    <Box backgroundColor="#00296B" marginTop="0"  >
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
              fontSize: { xs: "14px", sm: "12px", lg: "14px" },
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
              color="#f8fafc"
            >
              Company
            </Typography>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              About Us
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Careers
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Partnerships
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Meet the team
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Press
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Board of directors
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px", sm: "12px", lg: "14px" },
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
              color="#f8fafc"
            >
              Links
            </Typography>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Convert
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              News
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Contact Us
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px", sm: "12px", lg: "14px" },
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
              color="#f8fafc"
            >
              Resources
            </Typography>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Currency Encyclopedia
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Historical currency exchange
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px", sm: "12px", lg: "14px" },
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
              color="#f8fafc"
            >
              Product
            </Typography>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              API
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Integration matrix
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px", sm: "12px", lg: "14px" },
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
              color="#f8fafc"
            >
              Support
            </Typography>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Help Center
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              FAQ
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              File a complaint
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Fraud report
            </Link>
          </Stack>

          <Stack
            direction="column"
            alignItems="flex-start"
            gap="16px"
            sx={{
              fontSize: { xs: "14px", sm: "12px", lg: "14px" },
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
              color="#f8fafc"

            >
              Legal
            </Typography>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Terms and Conditions
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: 'none' }}>
              Cookie Policy
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
            Items={["Currency Encyclopedia", "Historical currency exchange"]}
          />
          <DropDown title={"Product"} Items={["API", "Integration matrix"]} />
          <DropDown title={"Support"} Items={["Help Centre", "FAQ", "File a complaint", "Fraud Report"]} />
          <DropDown title={"Legal"} Items={["Private Policy", "Terms and Conditions", "Cookie Policy"]} />
        </Box>

        <Box margin="40px 0 20px 0">
          <hr style={{ height: "1px", backgroundColor: "#CBD5E1" }} />
        </Box>

        <Box
          display="flex"
          padding="20px 0px"
          justifyContent="space-between"
          alignItems="center"
          color="#F8FAFC"
          paddingBottom='40px'
        >
          <Typography
            sx={{
              fontSize: { xs: "19px", sm: "20px", md: "24px", lg: "19px" },
              lineHeight: { xs: "23px" },
              fontWeight: { xs: "800" },
            }}
            letterSpacing="-0.02em"
            color="#fff"
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
            color="#fff"
          >
            © 2022 Bevel All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box >
  );
};

export default Footer;
