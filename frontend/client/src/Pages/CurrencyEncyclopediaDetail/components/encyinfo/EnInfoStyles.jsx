import styled from "styled-components";
export const CurrencyContainer = styled.div`
  width: 100%;
  height: 540px;
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 58px 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 58px 40px;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    gap: 15%;
    padding: 58px 100px;
  }
`;


export const Header = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  height: 80px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #0F172A;

  @media screen and (min-width: 768px) {
    width: 60%;
    font-size: 72px;
    line-height: 80px;
    text-align: left;
    align-item: flex-start;
  }

  @media screen and (min-width: 1440) {
    width: 60%;
    flex-grow: 0;
  }
`;
export const Container = styled.div`
  width: 484px;
  height: 398px;


  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 263px;
  }
`;
