import React from 'react'
import globe from '../assets/encyglobe.svg'
import { Container, Content, CurrencyContainer, Header, ImageWrapper, Option, Select } from './EnCurrencyStyles';

const EnCurrency = () => {
  return (
    <CurrencyContainer>
      
      <Container>
        <Header >World Currency Encyclopedia</Header>
        <Content>
          Street rates Encyclopedia allows you check every countries exchange
          rates, currency facts and more.
        </Content>

        
        <Select name="" id="">
          <Option value=""> CAD-canadian Dollar</Option>
          <Option value=""> GEL-Georgian Lari</Option>
          <Option value=""> GGP-Guernsey Pound</Option>
          <Option value=""> GHS-Ghanaian Cedi</Option>
        </Select>
      </Container>

      <ImageWrapper>
        <img src={globe} alt="" />
      </ImageWrapper>
    </CurrencyContainer>
  );
}

export default EnCurrency

