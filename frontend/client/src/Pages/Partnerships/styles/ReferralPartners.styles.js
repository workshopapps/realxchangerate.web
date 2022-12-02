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

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const PartnersHeader = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;
  margin-top: 140px;

  & img {
    margin-bottom: 30px;
  }

  & h1 {
    font-size: 25px;
    font-weight: 700px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 480px) {
    & h1 {
      font-size: 23px;
    }
  }
`;

export const PartnersDescription = styled.p`
  width: 65%;
  max-width: 908px;
  margin: 15px auto 80px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    font-size: 18px;
  }
`;

export const StyledPartnersType = styled.div`
  width: 85%;
  max-width: 1204px;
  margin: 0 auto 80px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 70px;

  & div {
    width: 60%;
    height: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (max-width: 480px) {
      & button {
        align-self: center;
      }
    }

    & h1 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 50px;

      @media screen and (max-width: 480px) {
        font-size: 20px;
      }
    }

    & p {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;

      @media screen and (max-width: 480px) {
        font-size: 18px;
      }
    }

    & ul {
      font-size: 16px;
      font-weight: 400;
      list-style-position: inside;

      @media screen and (max-width: 480px) {
        font-size: 18px;
      }

      & li:nth-child(2) {
        margin: 30px 0;
      }
    }
  }

  & button {
    cursor: pointer;
  }

  @media screen and (max-width: 1240px) {
    width: 80%;
    height: auto;
    padding-right: 0;

    & img {
      display: none;
    }

    & div {
      width: 100%;

      & h1 {
        text-align: center;
      }

      & button {
        align-self: center;
        cursor: pointer;
      }
    }
  }
`;
