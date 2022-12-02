import React from "react";
import { EntrepreneurSection } from "./entrepreneurStyle";
import heroImg from '../../assets/images/entrepreneur-hero-img.png'
import { AmbassadorsData } from "./data";

const EntrepreneurLayout = () => {
  return (
    <EntrepreneurSection>
      <div className="hero">
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
          <button>Apply Now</button>
        </div>
      </div>
      <div className="profile-gallery">
        <h2>Meet our entrepreneur ambassadors</h2>
        <div className="profile-grid">
          {/* <div className="profile-card">
            <div className="profile-img">

            </div>
            <h4>Martha Martins</h4>
            <p>Entrepreneur</p>
          </div>
          <div className="profile-card">
            <div className="profile-img">

            </div>
            <h4>Martha Martins</h4>
            <p>Entrepreneur</p>
          </div>
          <div className="profile-card">
            <div className="profile-img">

            </div>
            <h4>Martha Martins</h4>
            <p>Entrepreneur</p>
          </div> */}
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
