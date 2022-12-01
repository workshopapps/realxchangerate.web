import styled from 'styled-components';

export const Alphabet = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px;
  h4 {
    margin: 8px;
    color: #1e293b;
    font-size: 16px;
    line-height: 24px;
  }

  h3 {
    margin: 8px;
    color: #94a3b8;
    font-size: 16px;
    line-height: 24px;
  }

  @media only screen and (min-width: 768px) {
    padding: 16px 15rem;
    h4 {
      margin: 10px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }

    h3 {
      margin: 10px;
      color: #94a3b8;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media only screen and (min-width: 992px) {
    padding: 16px;
    h4 {
      margin: 8px;
      font-size: 22px;
      line-height: 32px;
    }

    h3 {
      margin: 8px;
      font-size: 22px;
      line-height: 32px;
    }
  }
  @media only screen and (min-width: 1200px) {
    padding: 20px;
    h4 {
      margin: 10px;
      font-size: 28px;
      line-height: 32px;
    }

    h3 {
      margin: 10px;
      font-size: 28px;
      line-height: 32px;
    }
  }
`;
export const Container = styled.div`
  background: #f5f5f5;
  height: 400px;
`;
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  h3 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    /* letter-spacing: -0.04em; */
    font-weight: 600;
    font-size: 50px;
    /* line-height: 72px; */
    /* margin-right : 50px; */

    color: #00296b;
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #475569;
  }
`;

export const Head = styled.div`
  h1 {
    font-weight: 600;
    font-size: 60px;
    line-height: 72px;
    text-align: center;
    letter-spacing: --0.4em;
    color: #00296b;
  }
  h4 {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height, or 133% */

    /* Neutral/Gray 600 */
    margin-top: 20px;

    color: #475569;
  }

  @media screen and (max-width: 834px) {
    h1 {
      font-size: 48px;
      line-height: 56px;
    }
    h4 {
      font-size: 22px;
      line-height: 28px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 28px;
      line-height: 32px;
    }
    h4 {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export const Search = styled.div`
  width: 100%;
  max-width: 584px;
  height: 50px;
  position: relative;
  margin-top: 20px;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
  }

  input {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 11px 24px;
    padding-left: 50px;
    gap: 10px;

    background: #f8fafc;

    border: 1px solid #64748b;

    box-shadow: 0px 1px 0px #e2e8f0;
    border-radius: 37px;
  }

  @media screen and (max-width: 834px) {
    max-width: 488px;
    height: 39px;
    img {
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 253px;
    height: 27px;

    img {
      width: 15.83px;
      height: 15.83px;
      top: 1.67px;
      left: 1.67px;
    }
  }
`;

export const Parent = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;

  @media only screen and (min-width: 768px) {
    padding-bottom: 5rem;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 5rem;
  }
`;

export const Box = styled.div`
  min-width: 243px;
  max-width: 243px;
  margin-right: 20px;
  h4 {
    letter-spacing: -0.02em;
    color: #00368c;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    font-family: 'Inter';
    border-bottom: 1px solid #94a3b8;
    padding-bottom: 18px;
    padding-top: 18px;
  }

  @media screen and (max-width: 1200px) {
    min-width: 181px;
    max-width: 181px;
    h4 {
      font-size: 24px;
      line-height: 28px;
    }
    span {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    min-width: 90px;
    max-width: 90px;

    h4 {
      font-size: 14px;
      line-height: 20px;
    }
    span {
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  span a {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    line-height: 4.5rem;
    color: #475569;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 834px) {
    span a {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    span a {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export const Header = styled.div`
  background-color: #f6faff;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  flex-direction: column;
  position: relative;
  @media only screen and (min-width: 768px) {
    height: 400px;
  }

  @media only screen and (min-width: 992px) {
    height: 437px;
  }
`;

export const ImageArround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
  }
`;
export const LeftTop = styled.img`
  top: 1.5rem;
  left: 17rem;
  width: 34.07px;
  @media only screen and (min-width: 768px) {
    width: 63.34px;
    top: 3rem;
    left: 35rem;
  }

  @media only screen and (min-width: 992px) {
    top: 5rem;
    left: 20rem;
  }
  @media only screen and (min-width: 1200px) {
    top: 6rem;
    left: 22rem;
  }
`;
export const LeftMiddle = styled.img`
  top: 5rem;
  left: 5rem;
  width: 34.07px;
  @media only screen and (min-width: 768px) {
    width: 63.34px;
    top: 6rem;
    left: 10rem;
  }

  @media only screen and (min-width: 992px) {
    top: 15rem;
    left: 10rem;
  }
`;
export const LeftBottom = styled.img`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    bottom: 2rem;
    left: 10rem;
  }

  @media only screen and (min-width: 992px) {
    bottom: 2rem;
    left: 20rem;
  }
  @media only screen and (min-width: 1200px) {
    bottom: 5rem;
    left: 20rem;
  }
`;

export const RightTop = styled.img`
  width: 40px;
  top: 5rem;
  right: 5rem;
  @media only screen and (min-width: 768px) {
    width: 63.34px;
    top: 6rem;
    right: 10rem;
  }

  @media only screen and (min-width: 992px) {
    top: 5rem;
    right: 20rem;
  }
  @media only screen and (min-width: 1200px) {
    top: 5rem;
    right: 22rem;
  }
`;
export const RightMiddle = styled.img`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    top: 15rem;
    right: 10rem;
  }
`;
export const RightBottom = styled.img`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    bottom: 2rem;
    right: 10rem;
  }

  @media only screen and (min-width: 992px) {
    bottom: 2rem;
    right: 20rem;
  }
  @media only screen and (min-width: 1200px) {
    bottom: 5rem;
    right: 20rem;
  }
`;
