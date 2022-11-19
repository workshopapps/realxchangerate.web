import {
  Drawer,
  Typography,
  Divider,
  Box,
  Link,
} from "@mui/material";
import React from "react";

const DrawerComponent = ({ isOpen, setIsOpen, navItems }) => {
  const drawer = (
    <Box onClick={setIsOpen} sx={{ textAlign: "center",}}>
      <Typography
        variant="h6"
        sx={{
          my: 3,
          ml: 2,
          fontSize: "23px",
          lineHeight: "28px",
          fontWeight: "600",
        }}
        color="#00296B"
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
        color="#94A3B8"
      >
        <Link href="/" color="inherit">
          Home
        </Link>

        <Link href="/convert" color="inherit">
          Convert
        </Link>

        <Link href="#" color="inherit">
          Currency Profile
        </Link>

        <Link href="/news" color="inherit">
          News
        </Link>

        <Link href="/contact" color="inherit">
          Contact
        </Link>
      </Box>
    </Box>
  );

  const drawerWidth = 240;
  return (
    <>
      {isOpen && (
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={setIsOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "flex", sm: "none" },
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
