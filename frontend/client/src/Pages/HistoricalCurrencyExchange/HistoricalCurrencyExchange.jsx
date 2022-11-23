import React from "react";
import { Box } from "@mui/material";
import TopComponent from "./components/Top";
import MainComponent from "./components/Main";

const HistoricalCurrencyExchange = () => {
  const datas = [
    { isocode: "ibk", bank: "450", parallel: "700", flag: "" },
    { isocode: "ibk", bank: "450", parallel: "700", flag: "" },
  ];

  return (
    <Box width="84%" display="flex" margin="auto" flexDirection="column" alignItems="center" justifyContent="space-between">
      <TopComponent />
      <MainComponent data={datas} />
    </Box>
  );
};

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
        <Box sx={{display:"flex",paddingLeft:"5px",paddingRight:"10px"}} alignItems="center">
          <Typography marginRight="10px">{name}</Typography>
          <img src={img} alt="" width="24px" height="17px" className='flag' />
        </Box>
      <img src={right} alt="" width="6px" height="13px" />
    </Box>
  )

}
const MobileRowHeaderComponent = ({rate}) =>{
  return (
    <Box width="100%" backgroundColor="#F8FAFC" display="flex" fontSize="18px" height="44px" justifyContent="space-between" alignItems="center">
        <Typography>Country</Typography>

        <Typography>{rate}</Typography>
    </Box>
  )
}

// const handleChange = (e,length) =>{
//   const val =e
//   if (e === 10){
//     val=0;
//   }
//   else{
//     e++
//     val = e
//   }
//   return val
// }

const RowHeaderComponent = () =>{
  return (
    <Box width="100%" backgroundColor="#F8FAFC" display="flex" fontSize="18px" height="44px" justifyContent="space-between" alignItems="center">
        <Typography>Country</Typography>
        <Typography sx={{paddingLeft:"64px"}}>Bank Rates</Typography>
        <Typography>Parallel Rates</Typography>
    </Box>
  )
}

const RowComponent = ({country,bank,parallel})=>{
  return(
    <Box display="flex" justifyContent="space-between" height="45px" alignItems="center" fontSize="18px"  borderBottomColor="gray" width="100%" sx={{ borderBottom: 1,borderColor: 'grey.500' }}>
      {country}
      <Typography>{bank}</Typography>
      <Typography>{parallel}</Typography>
    </Box>
  )
}

const MobileRowComponent = ({country,rate})=>{
  return(
    <Box display="flex" justifyContent="space-between" height="45px" alignItems="center" fontSize="18px"  borderBottomColor="gray" width="100%" sx={{ borderBottom: 1,borderColor: 'grey.500' }}>
      {country}
      <Typography>{rate}</Typography>
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
      flexDirection='column'
      alignItems='center'
      padding='0px'
      display="flex"
      marginBottom="50px"
    >
      <Box
        alignItems='center'
        width="100%"

        sx={{display:{xs:'none',sm:"flex"}}}


      >
        <Box width="100%" display="flex" flexDirection="column">
          <RowHeaderComponent/>
          {rows.map((val, key) => {
            return (
              <RowComponent key={key} country={val.country} bank={val.bank_rates} parallel={val.parallel_rates}/>
                 // <tr key={key} className='table_row_two border-b-2 h-[45px] text-[18px]'>
              //   <td className="one">{val.country}</td>
              //   <td className="two">{val.bank_rates}</td>
              //   <td className="three">{val.parallel_rates}</td>
              // </tr>
            );
          })}
        </Box>
      </Box>
      <Box display={{xs:'flex',sm:"none",}} width="100%" justifyContent="center" marginY="auto" >
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
