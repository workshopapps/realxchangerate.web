import styled from "styled-components";
export const CurrencyContainer = styled.div`
  width: 100%;
  height: 514px;
  align-items: left;
  background: #00296b;
  display:flex;
  justify-content:space-between;

  @media screen and (min-width:350px) and (max-width: 550px) {
    height: 263px;
   
  }
`;


export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  height: 80px;
  color: #ffffff;
  padding: 209px 0px 225px 223px;
  width: 30%;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    padding: 65px 0px 66px 16px;
    width: 60%;
  }
`;
export const Container = styled.div`
  width: 484px;
  height: 398px;


  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 263px;
  }
`;
