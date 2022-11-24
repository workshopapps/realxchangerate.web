import { StyledHamburger, StyledWrapper } from "./HamburgerMenu.styled";

function HamburgerMenu({ openHamburger }) {
  return (
    <StyledWrapper>
      <StyledHamburger className={openHamburger ? "open" : " "} id="nav-icon2">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
        <span className="five"></span>
        <span className="six"></span>
      </StyledHamburger>
    </StyledWrapper>
  );
}

export default HamburgerMenu;
