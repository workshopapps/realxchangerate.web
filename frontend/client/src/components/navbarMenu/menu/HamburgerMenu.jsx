import { useState } from "react";
import { StyledHamburger, StyledWrapper } from "./HamburgerMenu.styled";
import { useTheme, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DropdownMenu from "../dropdown/DropdownMenu";

function HamburgerMenu({ openHamburger }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const arr = ["one", "two", "three", "four", "five", "six"];

  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ p: 0 }}
      >
        <StyledWrapper>
          <StyledHamburger
            className={openHamburger ? "open" : " "}
            id="nav-icon2"
          >
            {arr.map((nu, index) => (
              <span
                key={index}
                className={nu}
                style={{
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#fff" : "#475569",
                }}
              ></span>
            ))}
          </StyledHamburger>
        </StyledWrapper>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <DropdownMenu close={handleClose} />
      </Menu>
    </Box>
  );
}

export default HamburgerMenu;
