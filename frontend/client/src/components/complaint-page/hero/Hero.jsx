import React, { useEffect, useState } from "react";
import HeroWrapper from "./hero.styles";
import heroImage from "../assets/hero.png";
import FormModal from "../modal/FormModal";

const Hero = () => {
  const [modalOpen, setmodalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, [modalOpen]);

  const toggleModal = () => {
    setmodalOpen((prev) => !prev);
  };

  return (
    <>
      <HeroWrapper>
        <div className="container">
          <div className="hero-desc">
            <h1>SUPPORT CENTER FOR YOUR HELP</h1>
            <button onClick={toggleModal}>Contact Support</button>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </HeroWrapper>
      <FormModal toggleModal={toggleModal} modalOpen={modalOpen} />
    </>
  );
};

export default Hero;
