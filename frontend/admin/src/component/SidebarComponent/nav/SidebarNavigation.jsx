import { NavLink } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard_icon.svg";
import { ReactComponent as CreateIcon } from "../../../assets/icons/create_icon.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/settings_icon.svg";
// import { ReactComponent as PersonIcon } from "../../../assets/icons/dashboard_icon.svg";
import {
  StyledSidebarNavigation,
  StyledSidebarNavigationOption,
} from "./SidebarNavigation.styled";

const navigationOptions = [
  {
    item: "Dashboard",
    route: "/",
    icon: <DashboardIcon />,
    iconActive: <DashboardIcon fill="#F8FAFC" />,
  },
  // {
  //   item: "Account",
  //   route: "/account",
  //   icon: <PersonIcon />,
  //   iconActive: <PersonIcon fill="#F8FAFC" />,
  // },
  {
    item: "Create/Edit",
    route: "/create",
    icon: <CreateIcon />,
    iconActive: <CreateIcon fill="#F8FAFC" />,
  },
  {
    item: "Settings",
    route: "/settings",
    icon: <SettingsIcon />,
    iconActive: <SettingsIcon fill="#F8FAFC" />,
  },
];

function SidebarNavigation() {
  return (
    <StyledSidebarNavigation>
      <nav>
        {navigationOptions.map((option, index) => (
          <NavLink key={index} to={option.route}>
            {({ isActive }) => (
              <StyledSidebarNavigationOption $isActive={isActive}>
                <div className="icon">
                  {isActive ? option.iconActive : option.icon}
                </div>
                <p className="option">{option.item}</p>
              </StyledSidebarNavigationOption>
            )}
          </NavLink>
        ))}
      </nav>
      {/* <StyledSidebarNavigationBottom>
                <div className="icon">
                    <LogoutIcon />
                </div>
                <p className="option">
                    Logout
                </p>
            </StyledSidebarNavigationBottom> */}
    </StyledSidebarNavigation>
  );
}

export default SidebarNavigation;
