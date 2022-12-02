import React from "react";
import { Link } from "react-router-dom";
import { StyledComplaintQuery } from "./ComplaintQuery.styled";
import ComplaintImage from "../assets/complaintsImage.png";
import ArrowRight from "../assets/arrow-right.svg";

const ComplaintQuery = () => {
  return (
    <StyledComplaintQuery>
      <div className="query">
        <p className="topText">FILE A COMPLAINT</p>
        <h3>
          Have queries? <br /> Talk to us
        </h3>
        <p className="bottomText">
          Providing accurate and real time access to exchange rates is personal
          for us, so we'd like to hear from you.
        </p>
        <div className="link">
          <Link to="/faq" className="linkText">
            Read through our FAQs
          </Link>
          <img src={ArrowRight} alt="right arrow" height={30} />
        </div>
      </div>
      <img src={ComplaintImage} alt="query img" className="queryImage" />
    </StyledComplaintQuery>
  );
};

export default ComplaintQuery;
