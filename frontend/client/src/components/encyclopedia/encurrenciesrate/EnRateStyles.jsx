import styled from "styled-components";

export const CurrencyContainer = styled.div`
  width: 100%;
  height: 616px;
  align-items: center;
  background: #ffffff;

  @media screen and (min-width: 350) and (max-width: 750px) {
    padding: 10px 16.66px 56px 16px;
    height: 993px;
  }
`;

export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding: 96px 0px 0px 120px;
  line-height: 28px;
  color: #1e293b;

  @media screen and (min-width:350px) and (max-width: 550px) {
  
    font-size: 1.8em;
    padding: 15px 0px 0px 10px;
  
`;
export const RateWrapper = styled.div`
  height: 486px;
  justify-content: space-between;
  display: flex;
  margin-top: 49px;

  @media screen and (min-width: 350px) and (max-width: 750px) {
    height: 286px;
   width:100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageRateWrapper = styled.div`
  height: 50%;
  width: 50%;
  margin: 0px 0px 0px 10%;
  @media screen and (min-width: 350px) and (max-width: 550px) {
    padding: 1em;
    margin: 0px;
    height: 20%;
    width: 60%;
  }
  @media screen (min-width: 950px) and (max-width: 1200px) {
    display: none;
  }
`;


export const ImageT = styled.img`
  height: 100%;       
  width: 100%;          
  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 100%;
    width: 100%;
  }

`;

export const ImageTable = styled.img`
  height: 100%;
  width: 100%;
  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 100%;
    width: 100%;
  }

`;

export const ImageWrapper = styled.div`
  height: 80%;
  width: 50%;
  margin: 0px 20px 70.11px 0px;
  @media screen and (min-width: 350px) and (max-width: 550px) {
    margin: 250px 0px 5px 10px;
    height: 100%;
    width: 90%;
  }
  @media screen and (max-width: 1121px) {
    margin: 250px 0px 5px 10px;
    width: 90%;
  }
`;












