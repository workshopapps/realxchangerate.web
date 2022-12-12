import { useNavigate } from "react-router-dom";
import { StyledWrapper, StyledMenuOption } from "./DropdownMenu.styled";
import { useTheme } from "@mui/material";

const menuItems = [
  {
    option: "Home",
    route: "/",
  },
  {
    option: "Blog",
    route: "/blogs",
  },
  {
    option: "About Us",
    route: "/contact",
  },
];

function DropdownMenu({ setMenuOpen, close }) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      {menuItems.map((option, index) => (
        <StyledWrapper onClick={close} key={index}>
          <StyledMenuOption
            onClick={() => {
              navigate(`${option.route}`);
              setMenuOpen(false);
            }}
          >
            <p
              className="option"
              style={
                theme.palette.mode === "dark"
                  ? {
                      color: "#fff",
                    }
                  : {
                      color: "#3a4e6190",
                    }
              }
            >
              {option.option}
            </p>
          </StyledMenuOption>
        </StyledWrapper>
      ))}
    </>
  );
}

export default DropdownMenu;
