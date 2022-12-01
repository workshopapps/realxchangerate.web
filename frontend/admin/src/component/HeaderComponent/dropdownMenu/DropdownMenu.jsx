import { useNavigate } from "react-router-dom";
import Search from "../search/HeaderSearch";
import { StyledWrapper, StyledMenuOption } from "./DropdownMenu.styled";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout_icon_black.svg";
import { ReactComponent as LogoutIconWhite } from "../../../assets/icons/logout_icon_white.svg";
import { ReactComponent as NotificationIcon } from "../../../assets/icons/notification_icon.svg";
import { ReactComponent as NotificationIconWhite } from "../../../assets/icons/notification_icon_white.svg";
import { ReactComponent as DashboardIconWhite } from "../../../assets/icons/dashboard_icon.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard_black_icon.svg";
import { ReactComponent as AccountIcon } from "../../../assets/icons/account_circle.svg";
import { ReactComponent as AccountIconActive } from "../../../assets/icons/account_circle_white.svg";
import { ReactComponent as AnalyticsIcon } from "../../../assets/icons/analytics_icon.svg";
import { ReactComponent as AnalyticsIconWhite } from "../../../assets/icons/analytics_icon_white.svg";

const menuItems = [
  {
    option: "Dashboard",
    icon: <DashboardIcon />,
    iconActive: <DashboardIconWhite />,
    route: "/admin",
  },
  {
    option: "Notifications",
    icon: <NotificationIcon />,
    iconActive: <NotificationIconWhite />,
    route: false,
  },
  {
    option: "Trending Data",
    icon: <AnalyticsIcon />,
    iconActive: <AnalyticsIconWhite />,
    route: "/admin/trending",
  },
  {
    option: "Account",
    icon: <AccountIcon />,
    iconActive: <AccountIconActive />,
    route: "/admin/account",
  },
  {
    option: "Logout",
    icon: <LogoutIcon />,
    iconActive: <LogoutIconWhite />,
    route: false,
  },
];

function DropdownMenu({ setMenuOpen }) {
  const navigate = useNavigate();

  return (
    <StyledWrapper
      data-aos="zoom-in-down"
      data-aos-duration="500"
      data-aos-mirror="true"
    >
      <div className="search">
        <Search />
      </div>

      <ul>
        {menuItems.map((option, index) => (
          <StyledMenuOption
            key={index}
            onClick={() => {
              option.route && navigate(`${option.route}`);
              setMenuOpen(false);
            }}
          >
            <div className="icon">{option.icon}</div>
            <p className="option">{option.option}</p>
          </StyledMenuOption>
        ))}
      </ul>
    </StyledWrapper>
  );
}

export default DropdownMenu;
