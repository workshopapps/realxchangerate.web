import {Box, Typography} from "@mui/material"

const Country = ({name,image}) => {
    return (
      <Box display="flex" gap="5px" justifyContent="center" alignItems="center">
          <img src={image} alt="" width={24} height={18} />
          <Typography >
              {name}
          </Typography>
      </Box>
    )  
  }

  export default Country