import styled from "styled-components";

export const CurrencyContainer = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  height: 324px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: #F8FAFC;
  box-sizing: border-box;
  
  @media screen and (min-width: 768px) {
    width: 40%;
  }

  @media screen and (min-width: 1440px) {
    width: 30%;
  }
`;

export const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  // @media screen and (max-width: 768px) {
  //   padding: 1em;
  // }
`;

export const Header = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  height: 32px;
  display: flex;
  align-items: center;
  color: #0F172A;

  @media screen and (max-width: 768px) {
    margin-right: 1em;
    font-size: 1.8em;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  color: #2f343f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  @media screen and (max-width: 768px) {
  }
`;

export const HorizontalRule = styled.hr`
  border: 1px solid #cbd5e1;

  @media screen and (max-width: 768px) {
  }
`;

export const TextHighlight = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #131825;
  padding-left: 18px;
  @media screen and (max-width: 768px) {
  }
`;

export const Select = styled.div`
 margin-top:5%;
`;



export const Button = styled.button`
  background: #0062ff;
  border-radius: 4px;
  border: 1px solid #0062ff;
  width: 80%;
  height: 48px;
  color: #f8fafc;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 26px;
  width: 100%;
  display: flex;
  justify-content: center;
  // @media screen and (max-width: 768px) {
  //   margin-top: 26px;
  // }
`;
