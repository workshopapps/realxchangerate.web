import {
  StyledGrid,
  StyledCard,
  StyledTrendCards,
  StyledWrapper,
} from "./TrendingDataLayout.styled";
import DataTable from "./table/DataTable";
import Chart from "./chart/Chart";

const data = {
  tvl: "41.58b",
  change: "1.32", //
};
const TrendingDataLayout = () => {
  return (
    <StyledWrapper>
      <StyledGrid>
      <Chart />
        <StyledTrendCards>
          <StyledCard>
            <h3>Total Value Locked (USD)</h3>
            <p>${data.tvl}</p>
          </StyledCard>

          <StyledCard>
            <h3>Change (24h)</h3>
            <span>{data.change}%</span>
          </StyledCard>
        </StyledTrendCards>

        
      </StyledGrid>

      <DataTable />
    </StyledWrapper>
  );
};

export default TrendingDataLayout;
