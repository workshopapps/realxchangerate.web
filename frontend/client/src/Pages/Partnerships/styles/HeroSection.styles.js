import styled from "styled-components";

export const Button = styled.button`
  background-color: #1d4ed8;
  color: white;
  padding: 10px ${(props) => props.padding};
  border: none;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 700;
  border-radius: 5px;
`;

export const StyledHeroSection = styled.section`
  position: relative;
  width: 100%;
  background-color: black;
  height: 340px;

  & img {
    opacity: 0.3;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    height: 380px;
    & img {
      opacity: 0.3;
      object-fit: cover;
      height: 30%;
      width: 100%;
    }
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);

  @media screen and (max-width: 395px) {
    background: #00296b;
    top: 60.6%;
    padding-bottom: 30px;
    padding-top: 10px;
  }

  @media screen and (max-width: 480px) {
    background: #00296b;
    top: 64.6%;
    padding-bottom: 65px;
    padding-top: 30px;
  }

  @media screen and (max-width: 420px) {
    background: #00296b;
    top: 65.6%;
    padding-bottom: 46px;
    padding-top: 43.5px;
  }

  & h1 {
    font-size: 48px;
    font-weight: 600;
  }

  & h3 {
    width: 75%;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.3;
  }

  & button {
    font-size: 17px;
    padding: 10px 50px;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    left: 70px;

    & h1 {
      font-size: 29px;
      width: 90%;
    }

    & h3 {
      font-size: 20px;
    }

    & button {
      font-size: 12px;
      padding: 10px 50px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 900px) {
    left: 70px;
    & h1 {
      font-size: 32px;
      width: 90%;
    }

    & h3 {
      font-size: 21px;
    }

    & button {
      font-size: 17px;
      padding: 10px 30px;
    }
  }

  @media screen and (max-width: 480px) {
    & h1 {
      font-size: 33px;
      width: 90%;
    }

    & h3 {
      font-size: 18px;
      width: 85%;
    }

    & button {
      font-size: 17px;
      padding: 10px 30px;
    }
  }

  @media screen and (max-width: 480px) {
    left: 0px;

    & h1 {
      font-size: 23px;
      text-align: center;
      width: 100%;
    }

    & h3 {
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      width: 100%;
    }

    .contact-btn {
      display: flex;
      justify-content: center;
    }

    & button {
      padding: 10px 30px;
      font-size: 16px;
    }
  }
`;
