import {Box, Typography} from "@mui/material"

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

  export default Country