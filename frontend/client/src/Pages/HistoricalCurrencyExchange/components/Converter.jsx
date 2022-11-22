import {TextField, InputAdornment} from "@mui/material"
import { ConverterWrapper } from "../syles/HistoricalCurrencyExchangeStyles";
import Currencies from "./Currencies";
import {Flag1, Arrow} from "../assets/"

const Converter = () => {
    return(
      <ConverterWrapper>
        <TextField className='convert' id="outlined-basic" label="Amount" 
            InputProps={{
              endAdornment: <InputAdornment position="start"><Currencies name="Nigerian Naira" img={Flag1}/></InputAdornment>,
            }} 
        />
        <img className="arrow" src={Arrow} alt="" width={20} height={20} />
        <TextField marginLeft="2px" className='convert' id="outlined-basic" label="Amount" 
            InputProps={{
              endAdornment: <InputAdornment position="start"><Currencies name="US Dollar" img={Flag1}/></InputAdornment>,
            }} />
      </ConverterWrapper>
    )
  }

  export default Converter;