import React from "react";
import styled from "styled-components";
import gbp from "../assets/Flags.svg";
import eur from "../assets/Flag.svg";
import canada from "../assets/canada.svg";
import japan from "../assets/japan.svg";
import usa from "../assets/usa.svg";
import aud from "../assets/aud.svg";

function EnPopCurrencies() {
  return (
    <Parent>
      <Wrapper>
        <h3>Popular Currencies</h3>
      </Wrapper>
      <Wrapper>
        <ImageWrapper>
          <img src={gbp} alt="gbp__img" />
          <span>GBP-Bristish Pound</span>
        </ImageWrapper>
        <ImageWrapper>
          <img src={eur} alt="eur__img" />

          <span>EUR-Euro</span>
        </ImageWrapper>
        <ImageWrapper>
          <img src={canada} alt="globe__img" />

          <span>CAD-Canadian Dollar</span>
        </ImageWrapper>
        <ImageWrapper>
          <img src={japan} alt="globe__img" />

          <span>JPY-Japanese Yen</span>
        </ImageWrapper>
        <ImageWrapper>
          <img src={usa} alt="globe__img" />

          <span>USD-US Dollar</span>
        </ImageWrapper>
        <ImageWrapper>
          <img src={aud} alt="globe__img" />

          <span>AUD-Australian Dollar</span>
        </ImageWrapper>
      </Wrapper>
    </Parent>
  );
}

export default EnPopCurrencies;

const Parent = styled.div`
  width: 100%;
  background-color: #e6efff;
  padding: 50px 20px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h3 {
    margin-bottom: 34.67px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.001em;
    color: #1e293b;
  }
`;
const ImageWrapper = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #2f343f;
  }
  img {
    width: 70px;
    height: 50px;
  }
`;

// import React from "react";
// import gbp from "../assets/Flags.svg";
// import eur from "../assets/Flag.svg";
// import canada from "../assets/canada.svg";
// import japan from "../assets/japan.svg";
// import usa from "../assets/usa.svg";
// import aud from "../assets/aud.svg";

// import { Image, ImageCont, Text } from "./EncPopularStyles";
// import {
//   CurrencyContainer,
//   CurrencyWrapper,
//   Header,
//   ImageWrapper,

// } from "./EncPopularStyles";

// const EnPopCurrencies = () => {
//   return (
//     <CurrencyContainer>
//       <Wrapper>

//       <Header>Popular Currencies</Header>
//       <CurrencyWrapper>

//         <ImageWrapper>
//           <>
//             <Image src={gbp} alt="gbp__img" />
//

//           <Text>GBP-Bristish Pound</Text>
//         </ImageWrapper>

//         <ImageWrapper>
//           <ImageCont>
//             <Image src={eur} alt="eur__img" />
//           </ImageCont>

//           <Text>EUR-Euro</Text>
//         </ImageWrapper>

//         <ImageWrapper>
//           <ImageCont>
//             <Image src={canada} alt="globe__img" />
//           </ImageCont>
//           <Text>CAD-Canadian Dollar</Text>
//         </ImageWrapper>

//         <ImageWrapper>
//           <ImageCont>
//             <Image src={japan} alt="globe__img" />
//           </ImageCont>

//           <Text>JPY-Japanese Yen</Text>
//         </ImageWrapper>

//         <ImageWrapper>
//           <ImageCont>
//             <Image src={usa} alt="globe__img" />
//           </ImageCont>

//           <Text>USD-US Dollar</Text>
//         </ImageWrapper>

//         <ImageWrapper>
//           <ImageCont>
//             <Image src={aud} alt="globe__img" />
//           </ImageCont>

//           <Text>AUD-Australian Dollar</Text>
//         </ImageWrapper>

//       </CurrencyWrapper>
//       </Wrapper>

//     </CurrencyContainer>
//   );
// };

// export default EnPopCurrencies;
