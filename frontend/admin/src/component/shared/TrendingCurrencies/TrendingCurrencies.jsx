import React from "react";
import { StyledWrapper } from "./TrendingCurrencies.styled";
import CardHeader from "../CardComponent/CardHeader";

// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function TrendingCurrencies() {
  return (
    <StyledWrapper>
      <CardHeader title="Trending Currencies" />
    </StyledWrapper>
  );
}

export default TrendingCurrencies;
