import React from "react";
import { EntrepreneurSection } from "./entrepreneurStyle";
import heroImg from "../../assets/images/entrepreneur-hero-img.png";
import { AmbassadorsData } from "./data";
import { Link } from "react-router-dom";

const EntrepreneurLayout = () => {
  return (
    <EntrepreneurSection>
      <div className="hero">
        <div className=""></div>
        <div className="grid grid-1">
          <img src={heroImg} alt="" />
        </div>
        <div className="grid grid-2">
          <h2>Become an entrepreneur ambassador</h2>
          <p>
            We are looking forward to working with passionate entrepreneurs who
            can successfully promote our company’s values and products in their
            community.
          </p>
          <p>
            Entrepreneurs with great communication and marketing skills to help
            bring authenticity and assist in the growth of our brand are
            encouraged to apply.
          </p>
          <Link to={"/ambassadors/apply-to-become-entrepreneur-ambassador"}>
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
      <div className="profile-gallery">
        <h2>Meet our entrepreneur ambassadors</h2>
        <div className="profile-grid">
          {AmbassadorsData.map((item) => (
            <div className="profile-card" key={item.id}>
              <div className="profile-img">
                <img src={item.image} alt="img" />
              </div>
              <h4>{item.name}</h4>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </EntrepreneurSection>
  );
};

export default EntrepreneurLayout;
