import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { ReactComponent as DashboardIconActive } from "../../assets/icons/dashboard_icon_blue.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard_black_icon.svg";
import { ReactComponent as UsersIconActive } from "../../assets/icons/users_icon_blue.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users_icon.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/account_circle.svg";
import { ReactComponent as AccountIconActive } from "../../assets/icons/account_circle_blue.svg";
import Paper from "@mui/material/Paper";

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, []);

  // check which tab user is on
  useEffect(() => {
    const pathMatchRoute = (route) => {
      if (route === location.pathname) {
        return true;
      }
    };
    const checkTab = () => {
      if (pathMatchRoute("/")) {
        setValue(0);
      } else if (pathMatchRoute("/users")) {
        setValue(1);
      } else if (pathMatchRoute("/account")) {
        setValue(2);
      }
    };
    checkTab();
  }, [location.pathname]);

  return (
    <Box sx={{ pb: 7, display: { xs: "block", sm: "none" } }} ref={ref}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{ backgroundColor: "#F8FAFC" }}
        >
          <BottomNavigationAction
            label="Dashboard"
            onClick={() => navigate("/")}
            icon={value === 0 ? <DashboardIconActive /> : <DashboardIcon />}
          />
          <BottomNavigationAction
            label="Users"
            onClick={() => navigate("/users")}
            icon={value === 1 ? <UsersIconActive /> : <UsersIcon />}
          />
          <BottomNavigationAction
            label="Account"
            onClick={() => navigate("/account")}
            icon={value === 2 ? <AccountIconActive /> : <AccountIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
