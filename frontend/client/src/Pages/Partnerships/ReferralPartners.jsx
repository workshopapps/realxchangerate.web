import React from "react";
import styled from "styled-components";
import groupIcon from "./assets/svg/GroupIcon.svg";
import ReferralPartnersType from "./ReferralPartnersType";
import checkMark from "./assets/svg/check.svg";
import { Link } from "react-router-dom";

// styles
import {
  PartnersHeader,
  PartnersDescription,
} from "./styles/ReferralPartners.styles";

const ReferralPartners = (props) => {
  return (
    <Container>
      <StyledSection>
        <div className="left-content">
          <div>
            <h2> {props.title}</h2>
            <p>
              {props.text}
            </p>
          </div>
          <button className="high-button">
            <Link to={props.link}>{props.btn}</Link>
          </button>
        </div>
        <div>
          <ul>
            <li>
              <img src={checkMark} alt="check list" />
              <div>
                {props.list1}
              </div>
            </li>
            <li>
              <img src={checkMark} alt="check list" />
              <div>
              {props.list2}
              </div>
            </li>
            <li>
              <img src={checkMark} alt="check list" />
              <div>
              {props.list3}
              </div>
            </li>
          </ul>
          <Link to={props.link} className="low-button link">
            {props.btn}
          </Link>
        </div>
        {/* header
      <PartnersHeader>
        <img src={groupIcon} alt="group icon" />
        <h1>Referral Partners</h1>
      </PartnersHeader> */}

        {/* partners section description */}
        {/* <PartnersDescription>
        Considering how important your clients are to your business, it's
        essential you choose the right international payments partner. We're
        proud that hundreds of businesses including banks, financial
        institutions, retailers, estate agents and financial advisors recommend
        Street Rates.
      </PartnersDescription> */}

        {/* introducers and affliate */}
        {/* <ReferralPartnersType /> */}
      </StyledSection>
    </Container>
  );
};

export default ReferralPartners;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`;
const StyledSection = styled.div`
  background-color: #f8fafc;
  padding: 46px 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 40px;

  .left-content {
    max-width: 435px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 120px;
  }
  h2 {
    color: #0f172a;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 32px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #0f172a;
  }
  .high-button {
    border: none;
    outline: none;
    padding: 16px 20px;
    background: #0062ff;
    border-radius: 4px;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #f8fafc;
    width: 253px;
    /* margin-top: 140px; */
  }
  .low-button {
    display: none;
  }
  li {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-left: 18px;
    display: flex;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 558px;
  }
  ul div {
    margin-left: 16px;
  }
  .link {
    width: fit-content;
  }
  @media screen and (max-width: 1350px) {
    justify-content: center;
    gap: 32px;
    margin: 40px;
    padding: 16px 20px;
    .high-button {
      display: none;
    }

    .low-button {
      display: block;
      border: none;
      outline: none;
      padding: 16px 20px;
      background: #0062ff;
      border-radius: 4px;
      margin-top: 48px;

      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #f8fafc;
    }

  }
  @media screen and (max-width: 780px) {
    button {
      display: none;
    }
  }
`;
