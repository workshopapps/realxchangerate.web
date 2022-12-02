import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/userActions";
import { ReactComponent as DashboardIconWhite } from "../../../assets/icons/dashboard_icon.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard_black_icon.svg";
import { ReactComponent as AnalyticsIcon } from "../../../assets/icons/analytics_icon.svg";
import { ReactComponent as AnalyticsIconWhite } from "../../../assets/icons/analytics_icon_white.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout_icon_black.svg";
import { ReactComponent as LogoutIconWhite } from "../../../assets/icons/logout_icon_white.svg";
import {
  StyledSidebarNavigation,
  StyledSidebarNavigationOption,
} from "./SidebarNavigation.styled";
import Tooltip from "@mui/material/Tooltip";

const navigationOptions = [
  {
    item: "Dashboard",
    route: "/",
    icon: <DashboardIcon />,
    iconActive: <DashboardIconWhite />,
  },
  {
    item: "Trending Data",
    route: "/trending",
    icon: <AnalyticsIcon />,
    iconActive: <AnalyticsIconWhite />,
  },
];

function SidebarNavigation() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <StyledSidebarNavigation>
      <nav>
        {navigationOptions.map((option, index) => (
          <NavLink key={index} to={`/admin${option.route}`}>
            {({ isActive }) => (
              <StyledSidebarNavigationOption $isActive={isActive}>
                <div className="icon">
                  <Tooltip title={option.item} placement="right">
                    {isActive ? option.iconActive : option.icon}
                  </Tooltip>
                </div>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <p className="option">{option.item}</p>
                </Box>
              </StyledSidebarNavigationOption>
            )}
          </NavLink>
        ))}

        <NavLink onClick={handleLogout} to={`/admin/login`}>
          {({ isActive }) => (
            <StyledSidebarNavigationOption $isActive={isActive}>
              <div className="icon">
                <Tooltip title="Logout" placement="right">
                  {isActive ? <LogoutIconWhite /> : <LogoutIcon />}
                </Tooltip>
              </div>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <p className="option">Logout</p>
              </Box>
            </StyledSidebarNavigationOption>
          )}
        </NavLink>
      </nav>

      <Divider />
    </StyledSidebarNavigation>
  );
}

export default SidebarNavigation;
