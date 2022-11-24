import {Box, Typography} from "@mui/material"
import {Arrow} from "../assets/index"

const Currencies = ({name,img}) =>{
    return (
      <Box display="flex" alignItems="center">
          <Box sx={{display:"flex",paddingLeft:"50px",paddingRight:"10px"}} alignItems="center">
            <Typography marginRight="10px">{name}</Typography>
            <img src={img} alt="" width="24px" height="17px" className='flag' />
          </Box>
        <img src={Arrow} alt="" width="6px" height="13px" />
      </Box>
    )
    
  }

  export default Currencies