import React from "react";

// styles
import { StyledWhyChoose } from "./styles/WhyChoose.styles";

// why choose data
import { WhyChooseArray } from "./assets/data";

const WhyChoose = () => {
  return (
    <StyledWhyChoose>
      <h1 className="header">Why Choose Street Rates?</h1>

      {/* why choose */}
      <div className="WhyContainer">
        {WhyChooseArray.map((list) => {
          return (
            <div key={list.id} className="listDiv">
              <img src={list.icon} alt="icon" height={100} width={100} />
              <h2>{list.header}</h2>
              <p style={{ maxWidth: "266px" }}>{list.description}</p>
            </div>
          );
        })}
      </div>
    </StyledWhyChoose>
  );
};

export default WhyChoose;
