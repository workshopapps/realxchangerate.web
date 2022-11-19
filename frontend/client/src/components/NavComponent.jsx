import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "./Drawer";
import MenuIcon from "@mui/icons-material/Menu";

const NavComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleDrawerState = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Grid
            sx={{
                minHeight: { xs: "56px", sm: "100px" },
                justifyContent: { xs: "space-between" },
                bgcolor: { xs: "#00296B", sm: "#fff" },
                paddingLeft: { xs: 2, sm: 2, md: 2, xl: 0 },
                paddingRight: { xs: 2, sm: 2, md: 2, xl: 0 },
            }}
            minHeight="100px"
            display="flex"
            margin="0px auto"
            flexDirection="row"
            style={{
                maxWidth: "1440px",
            }}
        >
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Typography
                    sx={{
                        ml: { xs: 2, sm: 0 },
                        fontSize: {
                            xs: "20px",
                            sm: "17px",
                            md: "24px",
                            lg: "29px",
                            xl: "34px",
                        },
                        lineHeight: { xs: "28px", sm: "40px" },
                        fontWeight: { xs: "600", sm: "700" },
                        color: { xs: "#fff", sm: "#00296B" },
                    }}
                    letterSpacing="-0.04em"
                    role="heading"
                >
                    Street Rate
                </Typography>
            </Grid>

            <Grid
                alignItems="center"
                sx={{
                    fontSize: { sm: "12px", md: "16px" },
                    gap: { sm: "9px", md: "20px", lg: "24px" },
                    display: { xs: "none", sm: "flex" },
                    width: { md: "606pxx" },
                }}
                fontWeight="400"
                lineHeight="24px"
                color="#94A3B8"
            >
                <Box gap="6px" display="flex">
                    <img src="assets/svg/flag.svg" alt="flagImage" />
                    <img src="assets/svg/DownArrow.svg" alt="arrow" />
                </Box>

                <Typography>Home</Typography>

                <Typography>Convert</Typography>

                <Typography>Currency Profile</Typography>

                <Typography>News</Typography>

                <Typography>Contact</Typography>
            </Grid>

            <Box
                p="12px"
                sx={{ display: { xs: "flex", sm: "none", color: "#fff" } }}
                cursor="pointer"
                onClick={() => setIsOpen(true)}
            >
                <MenuIcon />
            </Box>
            <DrawerComponent
                isOpen={isOpen}
                setIsOpen={HandleDrawerState}
                navItems={[
                    "Home",
                    "Convert",
                    "Currency Profile",
                    "News",
                    "Contact",
                ]}
            />
        </Grid>
    );
};

export default NavComponent;
