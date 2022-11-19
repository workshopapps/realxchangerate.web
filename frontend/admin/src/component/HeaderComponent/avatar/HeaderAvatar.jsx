import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ReactComponent as InboxIcon } from "../../../assets/icons/menu_mail.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/menu_profile.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/menu_setting.svg";
import {
  StyledAvatarMenuProfile,
  StyledAvatarMenuProfilePreview,
  StyledAvatarMenuWrapper,
} from "./HeaderAvatar.styled";
import AvatarLoader from "../../shared/AvatarLoader/AvatarLoader";

const menuItems = [
  {
    option: "Inbox",
    icon: <InboxIcon />,
  },
  {
    option: "My Profile",
    icon: <ProfileIcon />,
  },
  {
    option: "Account settings",
    icon: <SettingIcon />,
  },
];

function HeaderAvatar({ userData }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Profile and settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src={userData.pfp_url}
            sx={{ width: "48px", height: "48px" }}
          >
            {!userData.name ? Array.from(userData.name)[0] : ""}
          </Avatar>
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
        <StyledAvatarMenuWrapper>
          <StyledAvatarMenuProfile>
            <AvatarLoader alt={userData.name} image={userData.pfp_url} />

            <StyledAvatarMenuProfilePreview>
              <h4>Mikey Doe</h4>
              <p>mikey.doe@example.com</p>
            </StyledAvatarMenuProfilePreview>
          </StyledAvatarMenuProfile>
        </StyledAvatarMenuWrapper>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{item.option}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

HeaderAvatar.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default HeaderAvatar;
