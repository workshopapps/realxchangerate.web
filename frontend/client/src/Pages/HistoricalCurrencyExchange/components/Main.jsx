import {Box} from "@mui/material"
import { RowHeaderComponent, RowComponent } from "./Row";
import MobileView from "./MobileView"
import {rows} from "../constants"

const MainComponent = ({ data }) => {
    return (
      <Box
        marginTop="44px"
        width='100%'
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

  export default MainComponent