import { Box, Typography } from "@mui/material";

const Country = ({ name, image }) => {
  return (
    <Box display="flex" gap="5px" justifyContent="center" alignItems="center">
      <img src={image} alt="" />
      <Typography
        letterSpacing="0.01em"
        fontSize="14px"
        fontWeight="400"
        lineHeight="20px"
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Country;
