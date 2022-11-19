import {
    Drawer,
    List,
    ListItem,
    Typography,
    ListItemText,
    Divider,
    Box,
    ListItemButton,
  } from "@mui/material";
  import React from "react";
  
  const DrawerComponent = ({ isOpen, setIsOpen, navItems }) => {
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
          color="#00296B"
          letterSpacing="-0.04em"
          role="heading"
        >
          Street Rate
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
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