import React from 'react';
import { Button, ButtonWrapper, Container, CurrencyContainer,Header, HorizontalRule,  Select, Text, TextHighlight } from './EnCurrenChStyles';
import flag from '../assets/canada.svg'
import CountrySort from '../../CountrySort'

const EnCurrencyCh = ({display,color}) => {
  return (
    <CurrencyContainer display={display} color={color}>
      <Container>
        <Header>Currency set for canadian Dollar (CAD)</Header>
        <img src={flag} alt="" style={{ width: "7%" }} />
        <Text>CAD-Canadian Dollar</Text>
      </Container>

      <HorizontalRule />
      <TextHighlight>Change Currency</TextHighlight>
      <Container>
        <Select>
          <CountrySort/>
       
        </Select>

        <ButtonWrapper>
          <Button>Continue</Button>
        </ButtonWrapper>
      </Container>
    </CurrencyContainer>
  );
};

export default EnCurrencyCh;


