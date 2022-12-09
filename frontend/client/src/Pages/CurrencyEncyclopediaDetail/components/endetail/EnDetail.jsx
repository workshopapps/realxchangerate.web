import React from "react";
import  canada from "../assets/canada.svg";
import { Container, Text, Wrap } from "./EnDetailStyles";


const EnCurrency = () => {
  return (
    <Container>
      <Wrap>
        {" "}
        <img src={canada} alt="" /> 
        <span>CAD - Canadian
        Dollar</span>
      </Wrap>
      <Text>
        The Canadian Dollar is the currency of Canada. currency rankings show
        that the most popular Canadian Dollar exchange rate is the CAD to USD
        rate. The currency code for Dollars is CAD, and the currency symbol is
        $.
      </Text>
    </Container>
  );
};

export default EnCurrency;
