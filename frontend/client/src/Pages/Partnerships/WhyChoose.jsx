import React from "react";

// styles
import { StyledWhyChoose } from "./styles/WhyChoose.styles";
import styled from "styled-components";

// why choose data
import { WhyChooseArray } from "./assets/data";

const WhyChoose = () => {
  return (
    <StyledWhyChoose>
      <h1 className="header">
        Help more companies discover the power of Street Rates
      </h1>

      {/* why choose */}
      <div className="WhyContainer">
        {WhyChooseArray.map((list) => {
          return (
            <div key={list.id} className="listDiv">
              <WhyImg src={list.icon} alt="icon" />
              <h2>{list.header}</h2>
              <p style={{}}>{list.description}</p>
            </div>
          );
        })}
      </div>
    </StyledWhyChoose>
  );
};

export default WhyChoose;

const WhyImg = styled.img`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
