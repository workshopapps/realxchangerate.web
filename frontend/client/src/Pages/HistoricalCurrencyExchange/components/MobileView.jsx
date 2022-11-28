import {
  TabsList,
  NewTab,
} from "../syles/HistoricalCurrencyExchangeStyles";
import { TabPanelUnstyled } from "@mui/base";
import { MobileRowComponent, MobileRowHeaderComponent } from "./Row";
import { Box } from "@mui/material";
import { TabsUnstyled } from "@mui/base";

const MobileView = ({ data }) => {
  return (
    <Box width="100%">
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <NewTab>Bank Rate</NewTab>
          <NewTab>Parallel Rate</NewTab>
        </TabsList>
        <TabPanelUnstyled value={0}>
          <Box width="100%">
            <MobileRowHeaderComponent rate="Bank Rate" />
            {data.map((val, key) => {
              return (
                <MobileRowComponent
                  country={val.currency}
                  rate={Math.ceil(val.rate.official_buy)}
                  key={key}
                />
              );
            })}
          </Box>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1}>
          <Box width="100%">
            <MobileRowHeaderComponent rate="Parallel Rate" />
            {data.map((val, key) => {
              return (
                <MobileRowComponent
                  country={val.country}
                  rate={val.parallel_rates}
                  key={key}
                />
              );
            })}
          </Box>
        </TabPanelUnstyled>
      </TabsUnstyled>
    </Box>
  );
};


export default MobileView;
