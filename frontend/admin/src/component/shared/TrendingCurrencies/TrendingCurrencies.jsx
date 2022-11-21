import React from "react";
import { StyledWrapper } from "./TrendingCurrencies.styled";
import CardHeader from "../CardComponent/CardHeader";

function TrendingCurrencies() {
  return (
    <StyledWrapper>
      <CardHeader title="Trending Currencies" />
    </StyledWrapper>
  );
}

export default TrendingCurrencies;
