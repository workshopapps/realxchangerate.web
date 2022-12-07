import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 216px;
  width: 100%;
  padding: 0 5%;

  @media screen and (min-width: 768px) {

  }
`;
export const Wrap = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 40px;

  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #1B1C20;
  }

  img {
    width: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 641px;
    
    span {
      font-size: 36px;
      line-height: 40px;
    }

    img {
      width: 70px;
    }
  }
`;
export const Text= styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000;

  @media screen and (min-width: 768px) {
    width: 641px;
    font-size: 18px;
  line-height: 24px;
  }
`;