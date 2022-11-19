import React from "react";
import FXToolsIcon from "../Pages/Partnerships/assets/svg/FXToolsIcon.svg";
import SecureIcon from "../Pages/Partnerships/assets/svg/SecureIcon.svg";
import DollarIcon from "../Pages/Partnerships/assets/svg/DollarIcon.svg";
import { StyledWhyChoose } from "../Pages/Partnerships/styles/WhyChoose.styles";

const WhyChooseArray = [
  {
    id: 1,
    header: "FX Tools",
    icon: FXToolsIcon,
    description:
      "Stay one step ahead of the competition with the latest tools and market insights so you can make informed decisions.",
  },
  {
    id: 2,
    header: "Secure",
    icon: SecureIcon,
    description:
      "We take the greatest care in ensuring the safety of Street Rates. Your data is safe with Street Rates.",
  },
  {
    id: 3,
    header: "Market Experts",
    icon: DollarIcon,
    description:
      "We closely monitor the markets, to tailor our services to your business; With our support, our clients can make targeted and educated trading decisions.",
  },
];

const WhyChoose = () => {
  return (
    <StyledWhyChoose>
      <h1 className="header">Why Choose Street Rates?</h1>

      <div className="WhyContainer">
        {WhyChooseArray.map((list) => {
          return (
            <div key={list.id} className="listDiv">
              <img src={list.icon} alt="icon" height={100} width={100} />
              <h2>{list.header}</h2>
              <p>{list.description}</p>
            </div>
          );
        })}
      </div>
    </StyledWhyChoose>
  );
};

export default WhyChoose;
