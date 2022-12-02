import React from "react";
import { Link } from "react-router-dom";
// styles
import { StyledPartnersType, Button } from "./styles/ReferralPartners.styles";

// data for introducers and affliate section
import { PartnersTypeArray } from "./assets/data";

const ReferralPartnersType = () => {
  return (
    <>
      {PartnersTypeArray.map((type) => {
        return (
          <StyledPartnersType key={type.id}>
            <div>
              <h1>{type.header}</h1>
              <p style={{ maxWidth: "621px" }}>{type.description}</p>

              <ul>
                {type.list.map((list) => {
                  return (
                    <li
                      key={list.id}
                      style={{ listStyle: "disc", marginLeft: "15px" }}
                    >
                      {list.text}
                    </li>
                  );
                })}
              </ul>
              <Link to="/contact">
                <Button padding="70px">Contact us</Button>
              </Link>
            </div>

            <img src={type.icon} alt="icon" height={80} />
          </StyledPartnersType>
        );
      })}
    </>
  );
};

export default ReferralPartnersType;
