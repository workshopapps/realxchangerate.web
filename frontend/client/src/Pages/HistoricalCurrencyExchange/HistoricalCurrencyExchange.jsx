import styled from 'styled-components';
import React from "react"
import {
  TopComponentWrapper,
} from './syles/HistoricalCurrencyExchangeStyles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ConverterWrapper } from './syles/HistoricalCurrencyExchangeStyles';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Typography, } from '@mui/material';
import { MobileTable } from './syles/HistoricalCurrencyExchangeStyles';
import { Table } from './syles/HistoricalCurrencyExchangeStyles';
import { MobileViewWrapper } from './syles/HistoricalCurrencyExchangeStyles';
import flag1 from "./images/Flag1.png"
import arrow from "./images/arrow.png"
import right from "./images/Vector.png"

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#F8FAFC',
  500: '#007FFF',
  600: '#00368C',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const NewTab = styled(TabUnstyled)`
  font-family: Inter, sans-serif;
  color: #64748b;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 400px;
  background-color: ${blue[400]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const Calender = () => {
  

};

const Currencies = ({name,img}) =>{
  return (
    <Box display="flex" alignItems="center">
      <Typography marginRight="10px">{name}</Typography>
      <img src={img} alt="" width="24px" height="17px" className='flag' />
      <img src={right} alt="" width="6px" height="13px" />
    </Box>
  )
  
}

const Converter = () => {
  return(
    <ConverterWrapper>
      <TextField className='convert' id="outlined-basic" label="Amount" 
          InputProps={{
            endAdornment: <InputAdornment position="start"><Currencies name="Nigerian Naira" img={flag1}/></InputAdornment>,
          }} 
      />
      <img className="arrow" src={arrow} alt="" width={20} height={20} />
      <TextField marginLeft="2px" className='convert' id="outlined-basic" label="Amount" 
          InputProps={{
            endAdornment: <InputAdornment position="start"><Currencies name="US Dollar" img={flag1}/></InputAdornment>,
          }} />
    </ConverterWrapper>
  )
};

const MobileView = ({data}) => {
  return (
    <MobileViewWrapper>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <NewTab>Bank Rate</NewTab>
          <NewTab>Parallel Rate</NewTab>
        </TabsList>
        <TabPanelUnstyled value={0}>
          <Box>
            <MobileTable className=' w-full mt-6'>
              <tr className='mobile_table font-inter font-normal text-[18px] bg-[#F8FAFC] h-[44px]'>
                <th className='text-left pl-[24px]'>Country</th>
                <th className='text-right pr-[24px]'>Bank Rate</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key} className='border-b-2 h-[45px] text-[18px]'>
                    <td className='rates2 pl-[24px]'>{val.country}</td>
                    <td className='rates text-right pr-[24px]'>{val.bank_rates}</td>
                    
                  </tr>
                  
                );
              })}
            </MobileTable>
          </Box>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1}>
          <Box className='w-full'>
            <MobileTable className='w-full mt-6'>
              <tr className='font-inter font-normal text-[18px] bg-[#F8FAFC] h-[44px] '>
                <th className='text-left pl-[24px]'>Country</th>
                <th className='text-right pr-[24px]'>Parallel Rates</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key} className='border-b-2 h-[45px] text-[18px]'>
                    <td className=' rates2 pl-[24px]'>{val.country}</td>
                    <td className=' rates text-right pr-[24px]'>{val.parallel_rates}</td>
                  </tr>
                );
              })}
            </MobileTable>
          </Box>
        </TabPanelUnstyled>
      </TabsUnstyled>
    </MobileViewWrapper>
  )
};

const Country = ({name,image}) => {
  return (
    <Box display="flex" >
        <img src={image} alt="" width={24} height={18} />
        <Typography >
            {name}
        </Typography>
    </Box>
  )
    
}

const TopComponent = () => {
  return (
    <TopComponentWrapper>
      <Calender />
      <Converter />
    </TopComponentWrapper>
  );
};
function createData(country, bank_rates, parallel_rates) {
    return { country, bank_rates, parallel_rates};
  }
  
  const rows = [
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760),
    createData(<Country name="NGN" image={flag1}/>, 400, 760), 
  ];

const MainComponent = ({ data }) => {
  return (
    <Box
      marginTop="44px"
      width='80%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding='0px'
    >
      <Box
        alignItems='center'
        display='flex'
        width="100%"
      
      
      >
        <Table>
          <tr className='table_row '>
            <th className='table_header one'>Country</th>
            <th className='table_header two'>Bank Rates</th>
            <th className='table_header three'>Parallel Rates</th>
          </tr>
          {rows.map((val, key) => {
            return (
              <tr key={key} className='table_row_two border-b-2 h-[45px] text-[18px]'>
                <td className="one">{val.country}</td>
                <td className="two">{val.bank_rates}</td>
                <td className="three">{val.parallel_rates}</td>
              </tr>
            );
          })}
        </Table>
      </Box>
      <Box display={{sm:"hidden", md:"flex"}} width="100%" justifyContent="center" marginY="auto" >
        <MobileView data={rows} />
      </Box>
    </Box>
  );
};



const HistoricalCurrencyExchange = () => {
  const datas = [
    { isocode: 'ibk', bank: '450', parallel: '700', flag: '' },
    { isocode: 'ibk', bank: '450', parallel: '700', flag: '' },
  ];

  // useEffect(() => {}, []);

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" className='flex flex-col w-full items-center'>
      {/* <Header/> */}
      <TopComponent />
      <MainComponent data={datas} />
    </Box>
  );
};

export default HistoricalCurrencyExchange;
