import { Drawer, Typography, Divider, Box, Link } from "@mui/material";
import React from "react";

const DrawerComponent = ({ isOpen, setIsOpen }) => {
  const drawer = (
    <Box onClick={setIsOpen} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 3,
          ml: 2,
          fontSize: "23px",
          lineHeight: "28px",
          fontWeight: "600",
        }}
        letterSpacing="-0.04em"
        role="heading"
      >
        Street Rate
      </Typography>
      <Divider />
      <Box
        alignItems="center"
        display="flex"
        gap="20px"
        marginTop="20px"
        flexDirection="column"
        fontWeight="400"
        lineHeight="24px"
        fontSize="16px"
        color="#0062ff"
      >
        <Link href="/">Home</Link>

        <Link href="/#/convert">Convert</Link>

        <Link href="/#/">Currency Profile</Link>

        <Link href="/#/news">News</Link>

        <Link href="/#/contact">Contact</Link>
      </Box>
    </Box>
  );

  const drawerWidth = 240;
  return (
    <>
      {isOpen && (
        <Drawer
          variant="temporary"
          anchor="right"
          open={isOpen}
          onClose={setIsOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default DrawerComponent;
