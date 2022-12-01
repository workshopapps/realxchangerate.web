import React from "react";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroContents,
  HeroImage,
} from "../style/StudentAmbassador.styled";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImage>Become a Student Ambassador</HeroImage>
      <HeroContents>
        <p>
          We are looking forward to working with passionate students who can
          successfully promote our company&lsquo;s values and products in their
          school communities.
        </p>
        <p>
          We encourage students who have great communication skills, marketing
          skills and are also active members on social media platforms and
          actively engaged in school activities to apply as a student ambassador
          for our brand.
        </p>
        <Link to="/">Apply now</Link>
      </HeroContents>
    </HeroContainer>
  );
};

export default HeroSection;
