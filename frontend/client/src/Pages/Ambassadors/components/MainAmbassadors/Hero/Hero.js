import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeroAmbassadors } from "./Hero.styled";
import HeroImage from "../../../images/MainAmbassadors/HeroImage.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <StyledHeroAmbassadors>
      <div className="heroContent">
        <h3>Meet our Brand Ambassadors</h3>
        <p>
          We believe in the power of authentic relationships. You can join us
          now as an entrepreneur ambassador or as a student ambassador.
        </p>

        <div className="btns">
          <button
            className="btn1"
            onClick={() => {
              navigate("/ambassadors");
            }}
          >
            Apply as an entrepreneur
          </button>
          <button
            className="btn2"
            onClick={() => {
              navigate("/ambassadors");
            }}
          >
            Apply as a student
          </button>
        </div>
      </div>

      {/* div 2 */}
      <div className="heroImage">
        <p>Our Ambassadors are our pride and we love connecting with them.</p>
        <img src={HeroImage} alt="hero img" />
      </div>
    </StyledHeroAmbassadors>
  );
};

export default Hero;
