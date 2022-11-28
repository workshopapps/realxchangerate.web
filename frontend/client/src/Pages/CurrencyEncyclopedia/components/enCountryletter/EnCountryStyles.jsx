import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const CurrencyContainer = styled.div`
  box-sizing: border-content;
  width: 100%;
  align-items: center;
`;
export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1e293b;
  letter-spacing: 0.001em;
  padding: 29px 0px 14px 120px;
  /* margin-top: 29px; */
  margin-bottom: 14px;
`;

export const CounrtryOptionWrapper = styled.div`
  align-items: center;
  width: 80%;
  height: 28px;
  padding: 0px 0px 34px 208px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 376px) {
    overflow: auto;
  }
`;

export const Redirect = styled(LinkR)`
  text-decoration: none;
  align-items: center;
  margin: 25px 0;

  cursor: pointer;
  &:hover {
    color: #00000f;
    transition: 0.4s ease-in-out;
  }
`;

export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #94a3b8;
  padding-left: 5px;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  width: 50%;
  padding: 0px 0px 0px 120px;
  margin-bottom: 2%;
  align-items: center;
`;

export const CountryNames = styled.div`
  display: flex;
  min-width: 160px;
  margin: 10px;
  align-items: center;
  @media screen and (max-width: 1194px) {
  }

  span {
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #2f343f;
    margin-right: 10%;
    margin: 25px 0;
  }

  img {
    width: 24px;
    height: 17.14px;
    margin-right: 8px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Indicator = styled.div`
  border-bottom: 4px solid #00296b;
  width: 10%;
  p {
    text-align: center;
    font-family: "Inter";

    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.02em;
    color: #4c4f59;
  }
`;

export const CountryCurrencyWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 7%;
`;
