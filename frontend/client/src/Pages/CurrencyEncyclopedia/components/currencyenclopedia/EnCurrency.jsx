import React from "react";
import globe from "../assets/globe.png";
import styled from "styled-components";
import CountrySort from "../CountrySort";

function EnCurrency() {
  return (
    <Parent>
      <Wrapper>
        <Left>
          <Contents>
            <h3>World Currency Encyclopedia</h3>
            <p className="p">
              Street rates Encyclopedia allows you check every countries
              exchange rates, currency facts and more.
            </p>
            <div className="sort">
              <CountrySort />
            </div>
          </Contents>
        </Left>
        <Right>
          <img src={globe} alt="" />
        </Right>
      </Wrapper>
    </Parent>
  );
}

export default EnCurrency;

const Parent = styled.div`
  width: 100%;
  background-color: #00296b;
  height: 514px;
  padding: 30px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  /* tablet */
  @media screen and (max-width: 1194px) {
  }
`;

const Right = styled.div`
  flex: 1;

  height: 100%;

  img {
    /* width: 406px; */
    /* max-width: 406px; */
  }
  @media screen and (max-width: 1194px) {
    display: none;
  }
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  max-width: 523px;
  h3 {
    color: white;
    font-family: "inter";
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 12px;
  }
  .p {
    margin-bottom: 41px;

    color: white;
    font-family: "inter";
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }

  .sort {
    width: 100%;
    max-width: 329px;
  }
  @media screen and (max-width: 1194px) {
    h3 {
      text-align: center;
      color: white;
      font-family: "inter";
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 12px;
    }
    .p {
      text-align: center;
      color: white;
      font-family: "inter";
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 12px;
    }
    .sort {
      margin: auto;
    }
  }
  @media screen and (max-width: 376px) {
    h3 {
      text-align: center;
      color: white;
      font-family: "inter";
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      margin-bottom: 12px;
    }
    .p {
      text-align: left;
      color: white;
      font-family: "inter";
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 48px;
    }
    .sort {
      margin: auto;
    }
  }
`;

// import React from "react";
// import globe from "../assets/encyglobe.svg";
// import {
//   Container,
//   Content,
//   CurrencyContainer,
//   Header,
//   Image,
//   ImageWrapper,

// } from "./EnCurrencyStyles";

// import CountrySort from "../../CountrySort";
// import { CountrySort } from ".";s

// const EnCurrency = () => {
//   return (
//     <CurrencyContainer>
//       <Container>
//         <Header>World Currency Encyclopedia</Header>
//         <Content>
//           Street rates encyclopedia
//         </Content>

//         <CountrySort />
//       </Container>

//       <ImageWrapper>
//         <Image src={globe} alt="" />
//       </ImageWrapper>
//     </CurrencyContainer>
//   );
// };

// export default EnCurrency;
