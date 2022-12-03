import React from "react";
import PartnershipHero from "./PartnershipsHero";
import ReferralPartners from "./ReferralPartners";
import Experts from "./Experts";
import WhyChoose from "./WhyChoose";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import frame from "./assets/images/frame.png";

const Partnerships = () => {
  return (
    <>
      {/* <PartnershipHero />
      <ReferralPartners />
      <WhyChoose />
      <Experts /> */}

      <StyledHero>
        <div className="context">
          <div>
            <img src={frame} alt="partner" />
          </div>
          <div className="content">
            <h1>Become a StreetRates Partner</h1>
            <p>
              Help your clients save time and money when making their
              international payments
            </p>
            <HashLink smooth to={"/partnerships/#learn"}>
              <button>Learn more</button>
            </HashLink>
          </div>
        </div>
      </StyledHero>
      <WhyChoose />
      <AffiliateSection id="learn">
        <h2 className="title">What type of partner are you?</h2>
        <ReferralPartners
          title="Affiliate partners"
          text="Help businesses discover StreetRates by promoting us through your content or content distribution strategy"
          btn="Become an Affiliate Partner"
          list1="Register and manage the StreetRates deal cycle through to close with a dedicated channel partner manager"
          list2="Be involved in the implementation and onboarding proccess"
          list3="Register and manage the StreetRates deal cycle through to close with a dedicated channel partner manager"
          link="/partnerships/affiliate"
        />
        <ReferralPartners
          title="Referral Partners"
          text="Submit Leads and get rewarded when they become Street Rates Customers"
          btn="Become a Referral Partner"
          list1="Submit leads directly into StreetRates"
          list2="Be involved in the implementation and onboarding proccess"
          list3="Earn Up to 15% commissions on your referrals"
          link="/partnerships/referral"
        />
      </AffiliateSection>
    </>
  );
};

export default Partnerships;

const StyledHero = styled.div`
  background-color: #e6efff;
  .context {
    max-width: 1440px;
    margin: auto;
    padding: 72px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: center;
    /* gap: 100px; */
    justify-content: space-between;
    @media screen and (max-width: 1480px) {
      justify-content: center;
      padding: 20px;
    }
    @media screen and (max-width: 480px) {
    }
  }
  .content {
    max-width: 628px;
  }
  h1 {
    font-size: 48px;
    font-weight: 800;
    line-height: 56px;

    letter-spacing: -0.04em;
    color: #0f172a;
    margin-bottom: 45px;
    @media screen and (max-width: 1190px) {
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      /* or 125% */

      letter-spacing: -0.02em;
    }
    @media screen and (max-width: 480px) {
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      letter-spacing: -0.02em;
    }
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #1e293b;
    margin-bottom: 45px;
    @media screen and (max-width: 480px) {
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  button {
    outline: none;
    border: none;
    color: #f8fafc;
    padding: 16px 20px;
    gap: 8px;

    width: 128px;
    height: 56px;
    background: #0062ff;
    border-radius: 4px;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
  img {
    @media screen and (max-width: 1194px) {
      max-width: 281.54px;
      margin-bottom: 32px;
    }
  }
`;

const AffiliateSection = styled.div`
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 72px;
    @media screen and (max-width: 480px) {
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      margin-bottom: 32px;
      text-align: center;
    }
  }
`;
