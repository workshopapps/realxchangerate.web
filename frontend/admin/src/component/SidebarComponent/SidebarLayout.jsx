import { useNavigate } from "react-router-dom";
import SidebarNavigation from "./nav/SidebarNavigation";
import {
  StyledSidebarTopBlock,
  StyledSidebarTopBlockLogo,
  StyledSidebarWrapper,
} from "./SidebarLayout.styled";
import { ReactComponent as LogoAndTitle } from "../../assets/icons/logo_and_title.svg";
import Box from "@mui/material/Box";

function SidebarLayout() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <StyledSidebarWrapper id="sidebar">
        <StyledSidebarTopBlock>
          <StyledSidebarTopBlockLogo onClick={() => navigate("/")}>
            <Box sx={{ display: { xs: "none", md: "block", width: "70%" } }}>
              <LogoAndTitle width="98px" />
            </Box>
            {/* <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Logo width="30px" />
            </Box> */}
          </StyledSidebarTopBlockLogo>
        </StyledSidebarTopBlock>

        <SidebarNavigation />
      </StyledSidebarWrapper>
    </Box>
  );
}

export default SidebarLayout;
