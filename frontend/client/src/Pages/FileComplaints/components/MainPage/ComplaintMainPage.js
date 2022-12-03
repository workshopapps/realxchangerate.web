import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledComplaintQuery,
  StyledComplaintEnquiry,
  StyledNeedMoreHelp,
} from "./ComplaintMainPage.styled";
import ComplaintImage from "../assets/complaintsImage.png";
import ArrowRight from "../assets/arrow-right.svg";
import EmailSvg from "../assets/Mail.svg";
import PhoneSvg from "../assets/phone.svg";
import EnquiriesSvg from "../assets/Enquiries.svg";
import FAQSvg from "../assets/FAQ.svg";

const enquiriesData = [
  {
    id: 1,
    icon: EnquiriesSvg,
    heading: "Enquiries",
    description: `For general enquiries and feedback, send us an email at `,
    linkTitle: "contact@streetrate.com",
  },
  {
    id: 2,
    icon: FAQSvg,
    heading: "FAQ",
    description:
      "Get some answers to dome of the most commonly asked questions and feedback.",
  },
];

const ComplaintMainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledComplaintQuery>
        <div className="query">
          <p className="topText">FILE A COMPLAINT</p>
          <h3 className="mainText">
            Have queries? <br /> Talk to us
          </h3>
          <p className="bottomText">
            Providing accurate and real time access to exchange rates is
            personal for us, so we'd like to hear from you.
          </p>

          <div className="link">
            <img
              className="contactSvg"
              src={EmailSvg}
              alt="email"
              height={20}
            />
            <a
              href="mailto:contact@streetrate.com"
              className="linkText"
              target="_blank"
              rel="noreferrer"
            >
              Email: contact@streetrate.com
            </a>
            <img src={ArrowRight} alt="right arrow" height={25} />
          </div>

          <div className="link">
            <img
              className="contactSvg"
              src={PhoneSvg}
              alt="phone"
              height={20}
            />
            <a
              href="tel:+2349013719500"
              className="linkText"
              target="_blank"
              rel="noreferrer"
            >
              Phone: +234 901 371 9500
            </a>
            <img src={ArrowRight} alt="right arrow" height={25} />
          </div>
        </div>
        <img src={ComplaintImage} alt="query img" className="queryImage" />
      </StyledComplaintQuery>

      <StyledComplaintEnquiry>
        <h3 className="header">We are always here for you.</h3>
        <p className="subHeader">
          Find answers to your questions. Explore our FAQs to learn everything
          you need to know about StreetRates.
        </p>

        <div className="enquiry">
          {enquiriesData.map((data) => {
            return (
              <div key={data.id}>
                <img src={data.icon} alt="enquiries" height={60} />
                <h3>{data.heading}</h3>
                <p>
                  {data.description}
                  <a
                    href={`mailto:${data.linkTitle}`}
                    className="linkText"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.linkTitle}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </StyledComplaintEnquiry>

      <StyledNeedMoreHelp>
        <div>
          <h2>Need More Help?</h2>
          <p className="more">
            If you were not able to get your desired answers from the FAQs,
            please click the link below to fill this short form and we'd give
            you special attention as quickly as possible.
          </p>
          <div
            className="link"
            onClick={() => {
              navigate("/complaint/form");
            }}
          >
            <p className="linkText">Complaint form</p>
            <img src={ArrowRight} alt="right arrow" height={25} />
          </div>
        </div>
      </StyledNeedMoreHelp>
    </>
  );
};

export default ComplaintMainPage;
