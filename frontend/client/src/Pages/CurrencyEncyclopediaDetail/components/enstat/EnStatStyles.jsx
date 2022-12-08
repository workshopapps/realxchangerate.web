import styled from "styled-components";
export const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  gap: 32px;
  margin-top: 40px;
  height: 310px;
  width: 100%;
  margin-bottom: 100px;


  @media screen and (min-width: 768px) {
    padding: 0 100px;
  }
`;

export const Header = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #0F172A;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 250px;
  padding: 0 5%;
  width: 100%;

  div {
    display: flex;
    width: 100%;
  }

  div span {
    width: 50%;
  }

  div:first-child {
    height: 34px;
    background: #F8FAFC;
    border-radius: 4px 4px 0px 0px;
  }

  div:first-child span {
    padding: 8px 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #94A3B8;
  }

  div:not(.header) span {
    padding: 8px 16px;
  }

  div:not(.header) span:first-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #0F172A;
  }

  div:not(.header) span:last-child {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #0F172A;
  }


  @media screen and (min-width: 768px) {
    width: 632px;
  }
`;
export const Image = styled.img`
  // width: 100%;
  // height: 445px;
  // //  height: 45px;
  // @media screen and (max-width: 768px) {
  //   height: 250px;
  //   width: 100%;
  // }
`;



