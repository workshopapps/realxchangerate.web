import { Box, Typography } from "@mui/material";

const Country = ({ name, image }) => {
  return (
    <Box display="flex" gap="5px" justifyContent="center" alignItems="center">
      <img src={image} alt="" />
      <Typography
        letterSpacing="0.01em"
        color="#0F172A"
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
