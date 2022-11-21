import React from 'react';
import globe from '../assets/encyglobe.svg'
import { Container, Content, CurrencyContainer, Header, Image, ImageWrapper, Select } from './EnCurrencyStyles';

import CountrySort from '../../CountrySort'


const EnCurrency = () => {
  return (
    <CurrencyContainer>
      <Container>
        <Header>World Currency Encyclopedia</Header>
        <Content>
          Learn more about the currencies you interact with everyday.
        </Content>

        <Select >
       <CountrySort/>
        </Select>
      </Container>

     

      <ImageWrapper>
        <Image src={globe} alt="" />
      </ImageWrapper>
    </CurrencyContainer>
  );
}

export default EnCurrency

