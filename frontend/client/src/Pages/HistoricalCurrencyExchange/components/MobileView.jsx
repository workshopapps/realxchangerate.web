import { MobileViewWrapper, TabsList, NewTab } from "../syles/HistoricalCurrencyExchangeStyles";
import {  TabPanelUnstyled } from "@mui/base";
import { MobileRowComponent, MobileRowHeaderComponent } from "./Row";
import {Box} from "@mui/material"
import {TabsUnstyled} from "@mui/base";

const MobileView = ({data}) => {
    return (
      <MobileViewWrapper>
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <NewTab>Bank Rate</NewTab>
            <NewTab>Parallel Rate</NewTab>
          </TabsList>
          <TabPanelUnstyled value={0}>
            
              <Box widht="100%">
                <MobileRowHeaderComponent rate="Bank Rate"/>
                {data.map((val, key) => {
                  return (
                    <MobileRowComponent country={val.country} rate={val.bank_rates}/>
                    
                  );
                })}
              </Box>
            
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
          <Box widht="100%">
                <MobileRowHeaderComponent rate="Parallel Rate"/>
                {data.map((val, key) => {
                  return (
                    <MobileRowComponent country={val.country} rate={val.parallel_rates}/>
                    
                  );
                })}
              </Box>
          </TabPanelUnstyled>
        </TabsUnstyled>
      </MobileViewWrapper>
    )
  };

  export default MobileView