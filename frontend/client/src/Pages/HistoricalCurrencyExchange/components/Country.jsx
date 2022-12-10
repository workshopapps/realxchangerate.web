import { Box, Typography } from "@mui/material";

const Country = ({ name, image }) => {
  return (
    <>
      <Box display="flex" gap="5px" justifyContent="center" alignItems="center">
        <img
          loading="lazy"
          width="20"
          src={`https://flagcdn.com/w20/${
            image.code ? image.code.toLowerCase() : "us"
          }.png `}
          srcSet={`https://flagcdn.com/w40/${
            image.code ? image.code.toLowerCase() : "us"
          }.png 2x`}
          alt=""
        />
        <Typography
          letterSpacing="0.01em"
          fontSize="14px"
          fontWeight="400"
          lineHeight="20px"
        >
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default Country;
