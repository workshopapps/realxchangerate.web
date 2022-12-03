import React from "react";
import styled from "styled-components";
import groupIcon from "./assets/svg/GroupIcon.svg";
import ReferralPartnersType from "./ReferralPartnersType";
import checkMark from "./assets/svg/check.svg";

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
            <p>{props.text}</p>
          </div>
          <button className="high-button">{props.btn}</button>
        </div>
        <div>
          <ul>
            <li>
              <img src={checkMark} alt="check list" />
              <div>{props.list1}</div>
            </li>
            <li>
              <img src={checkMark} alt="check list" />
              <div>{props.list2}</div>
            </li>
            <li>
              <img src={checkMark} alt="check list" />
              <div>{props.list3}</div>
            </li>
          </ul>
          <button className="low-button">{props.btn}</button>
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
  margin: 20px;

  .left-content {
    max-width: 435px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 120px;
    margin-top: 32px;
    @media screen and (max-width: 1194px) {
      max-width: none;
      width: 100%;
      padding: 0 12px;
      align-items: flex-start;
      h2 {
        text-align: left;
      }
    }
  }
  h2 {
    color: #0f172a;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 32px;
    @media screen and (max-width: 480px) {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #0f172a;
    @media screen and (max-width: 480px) {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
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
    @media screen and (max-width: 480px) {
      align-items: flex-start;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 558px;
    @media screen and (max-width: 1194px) {
      max-width: none;
      width: 100%;
      padding: 0 15px;
      justify-content: none;
      h2 {
        text-align: left;
      }
    }
  }
  ul div {
    margin-left: 16px;
  }
  @media screen and (max-width: 1194px) {
    gap: 32px;
    margin: 20px;
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
