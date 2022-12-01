import React from "react";
import rate from "../assets/encyrate.png";
import table from "../assets/Updated Table.svg";
import styled from "styled-components";

const EnCurrenciesRate = () => {
  return (
    <Parent>
      <p>Currencies Rate</p>
      <Wrapper>
        <Left>
          <img src={rate} alt="" />
        </Left>
        <Right>
          <img src={table} alt="" />
        </Right>
      </Wrapper>
    </Parent>
  );
};

export default EnCurrenciesRate;

const Parent = styled.div`
  width: 100%;
  padding-top: 95px;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #1e293b;
    padding-left: 10px;
  }
  @media screen and (max-width: 1194px) {
    padding-left: 10px;
  }
  @media screen and (max-width: 376px) {
    padding-left: 10px;
  }
`;
const Wrapper = styled.div`
  margin: auto;
  display: flex;
  height: 100%;
  max-width: 1440px;
`;
const Left = styled.div`
  width: 40%;
  @media screen and (max-width: 1194px) {
    img {
      display: none;
    }
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    img {
      margin: auto;
    }
  }
`;
const Right = styled.div`
  width: 60%;
  img {
    width: 655px;
    width: 100%;
  }

  @media screen and (max-width: 1194px) {
    width: 100%;
    img {
      margin: auto;
    }
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
