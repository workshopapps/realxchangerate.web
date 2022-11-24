import React from "react";
import gbp from "../assets/Flags.svg";
import eur from "../assets/Flag.svg";
import canada from "../assets/canada.svg";
import japan from "../assets/japan.svg";
import usa from "../assets/usa.svg";
import aud from "../assets/aud.svg";


import { Image, ImageCont, Text } from "./EncPopularStyles";
import {
  CurrencyContainer,
  CurrencyWrapper,
  Header,
  ImageWrapper,

 
} from "./EncPopularStyles";

const EnPopCurrencies = () => {
  return (
    <CurrencyContainer>
      <Header>Popular Currencies</Header>
      <CurrencyWrapper>

        <ImageWrapper>
          <ImageCont>
            <Image src={gbp} alt="gbp__img" />
          </ImageCont>

          <Text>GBP-Bristish Pound</Text>
        </ImageWrapper>

        <ImageWrapper>
          <ImageCont>
            <Image src={eur} alt="eur__img" />
          </ImageCont>

          <Text>EUR-Euro</Text>
        </ImageWrapper>

        <ImageWrapper>
          <ImageCont>
            <Image src={canada} alt="globe__img" />
          </ImageCont>
          <Text>CAD-Canadian Dollar</Text>
        </ImageWrapper>

        <ImageWrapper>
          <ImageCont>
            <Image src={japan} alt="globe__img" />
          </ImageCont>

          <Text>JPY-Japanese Yen</Text>
        </ImageWrapper>

        <ImageWrapper>
          <ImageCont>
            <Image src={usa} alt="globe__img" />
          </ImageCont>

          <Text>USD-US Dollar</Text>
        </ImageWrapper>

        <ImageWrapper>
          <ImageCont>
            <Image src={aud} alt="globe__img" />
          </ImageCont>

          <Text>AUD-Australian Dollar</Text>
        </ImageWrapper>
        
      </CurrencyWrapper>
    </CurrencyContainer>
  );
};

export default EnPopCurrencies;
