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
      <DataTable />
    </StyledWrapper>
  );
};

export default TrendingDataLayout;
