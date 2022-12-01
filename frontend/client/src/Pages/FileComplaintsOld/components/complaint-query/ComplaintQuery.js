import React from "react";
import { StyledComplaintQuery } from "./ComplaintQuery.styled";
import ComplaintImage from "../assets/complaintsImage.png";

const ComplaintQuery = () => {
  return (
    <StyledComplaintQuery>
      <div>
        <p className="topText">FILE A COMPLAINT</p>
        <h3>
          Have queries? <br /> Talk to us
        </h3>
        <p className="bottomText">
          Providing accurate and real time access to exchange rates is personal
          for us, so we'd like to hear from you.
        </p>
        <p className="linkText">Read through our FAQs </p>
      </div>
      <img src={ComplaintImage} alt="query img" />
    </StyledComplaintQuery>
  );
};

export default ComplaintQuery;
