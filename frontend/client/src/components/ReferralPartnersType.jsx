import React from "react";
import introducersIcon from "../Pages/Partnerships/assets/svg/IntroducersIcon.svg";
import affliatesIcon from "../Pages/Partnerships/assets/svg/AffliateIcon.svg";

import {
  StyledPartnersType,
  Button,
} from "../Pages/Partnerships/styles/ReferralPartners.styles";

const PartnersTypeArray = [
  {
    id: 1,
    icon: introducersIcon,
    header: "Introducers",
    description:
      "Help your clients save time and money when making international payments, recommend Street Rates and benefit from:",
    list: [
      {
        id: 1,
        text: "Bank beating exchange rates and no fees from Street Rates for your clients",
      },
      {
        id: 2,
        text: "Access to a range of tools and widgets to enhance your website",
      },
      {
        id: 3,
        text: "Generate an income stream for your business",
      },
    ],
  },
  {
    id: 2,
    icon: affliatesIcon,
    header: "Affliates",
    description:
      "Monetise your traffic by joining the Street Rates affiliate program on Impact Radius. You'll benefit from:",
    list: [
      {
        id: 1,
        text: "Easy to generate trackable links",
      },
      {
        id: 2,
        text: "Real time reporting with in-depth click and conversion data",
      },
      {
        id: 3,
        text: "Creative suite of banners and bespoke ads",
      },
    ],
  },
];

const ReferralPartnersType = () => {
  return (
    <>
      {PartnersTypeArray.map((type) => {
        return (
          <StyledPartnersType key={type.id}>
            <div>
              <h1>{type.header}</h1>
              <p>{type.description}</p>

              <ul>
                {type.list.map((list) => {
                  return <li key={list.id}>{list.text}</li>;
                })}
              </ul>

              <Button padding="60px">Contact us</Button>
            </div>

            <img src={type.icon} alt="icon" height={80} />
          </StyledPartnersType>
        );
      })}
    </>
  );
};

export default ReferralPartnersType;
