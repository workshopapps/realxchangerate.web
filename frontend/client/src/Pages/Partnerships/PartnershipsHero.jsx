import React from "react";
import { Link } from "react-router-dom";
import bgImage from "./assets/images/bg-image.png";
import styled from "styled-components";

// styles
import {
  StyledHeroSection,
  HeroContent,
  Button,
} from "./styles/HeroSection.styles";

const PartnershipsHero = () => {
  return (
    // <>
    //   <Container></Container>
    // </>
    <StyledHeroSection>
      {/* background image */}
      <img src={bgImage} alt="bg-img" />

      {/* hero text */}
      <HeroContent>
        <h1>Affiliate and Referral Partner Programs</h1>
        <h3>
          Help your clients save time and money when making their international
          payments
        </h3>
        <div className="contact-btn">
          <Link to="/contact">
            <Button padding="70px">Contact us</Button>
          </Link>
        </div>
      </HeroContent>
    </StyledHeroSection>
  );
};

export default PartnershipsHero;

// const Container = styled.div`
//   background-image: url(${bgImage});
//   height: 443.67px;
//   opacity: 0.3;
//   object-fit: cover;
//   width: 100%;
// `;
