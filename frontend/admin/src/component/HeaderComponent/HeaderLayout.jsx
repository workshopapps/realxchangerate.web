import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeaderTools, StyledHeaderWrapper } from "./headerLayout.styled";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification_icon.svg";
import { ReactComponent as TitleLogo } from "../../assets/icons/title_logo.svg";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import HeaderSearch from "./search/HeaderSearch";
import AvatarLoader from "../shared/AvatarLoader/AvatarLoader";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import HamburgerMenu from "./menu/HamburgerMenu";
import DropdownMenu from "./dropdownMenu/DropdownMenu";
import Divider from "@mui/material/Divider";
import Notifications from "../shared/Notifications/Notifications";

const userData = {
  name: "Anna Segun",
  pfp_url: "",
  email: "mikey.doe@example.com",
};
const settings = [
  {
    option: "Account",
    route: "/account",
  },
  {
    option: "Logout",
    route: "/logout",
  },
];

function HeaderLayout(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const closeMenu = () => {
  //   setMenuOpen(false);
  // };

  return (
    <>
      <StyledHeaderWrapper>
        <Box sx={{ pt: 1, pr: 4, display: { xs: "block", md: "none" } }}>
          <TitleLogo width="130px" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            ml: "auto",
            display: { xs: "none", sm: "block" },
          }}
        >
          <HeaderSearch />
        </Box>

        <StyledHeaderTools>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AvatarLoader alt={userData.name} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate(`${item.route}`);
                  }}
                >
                  <Typography textAlign="center">{item.option}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Tooltip title="Notifications">
              <div
                className="headerNotif"
                onClick={() => setNotificationsOpen(true)}
              >
                <IconButton>
                  <NotificationIcon width="28px" height="28px" />
                </IconButton>
              </div>
            </Tooltip>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              ml: "auto",
              display: { xs: "block", sm: "none" },
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HamburgerMenu openHamburger={menuOpen} />
          </Box>
        </StyledHeaderTools>
      </StyledHeaderWrapper>
      <Divider />
      {menuOpen ? (
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <DropdownMenu setMenuOpen={setMenuOpen} />
        </Box>
      ) : null}
      <Notifications show={notificationsOpen} close={setNotificationsOpen} />
    </>
  );
}

export default HeaderLayout;
