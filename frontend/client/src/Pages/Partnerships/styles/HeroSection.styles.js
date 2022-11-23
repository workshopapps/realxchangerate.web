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
  height: 500px;

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
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  top: 50%;
  left: 100px;
  transform: translateY(-50%);

  & h1 {
    font-size: 42px;
    font-weight: 800;
  }

  & h3 {
    width: 75%;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.3;
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
      font-size: 18px;
      padding: 10px 50px;
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
    left: 30px;

    & h1 {
      font-size: 28px;
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

  @media screen and (max-width: 320px) {
    left: 30px;

    & h1 {
      font-size: 23px;
      width: 90%;
    }

    & h3 {
      font-size: 18px;
      width: 90%;
    }

    & button {
      padding: 10px 30px;
      font-size: 16px;
    }
  }
`;
