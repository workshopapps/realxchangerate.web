import { Box, Typography } from "@mui/material";
import { countries } from "../../../utils/data";
import Country from "./Country";

export const RowComponent = ({ country, bank, parallel }) => {
  let image = countries.find((x) => x.label === country.country);
  return (
    <>
      {image && (
        <Box
          display="flex"
          height="45px"
          width="100%"
          sx={{ sm: { borderBottom: "1px solid #E2E8F0" } }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            fontSize="18px"
            padding="12px 24px"
            width="100%"
          >
            <Country name={country.isocode} image={image} />

            <Typography
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0.01em"
            >
              {bank}
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0.01em"
            >
              {parallel}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export const MobileRowComponent = ({ country, rate }) => {
  let image = countries.find((x) => x.label === country.country);
  return (
    <>
      {image && (
        <Box
          display="flex"
          height="45px"
          alignItems="center"
          width="100%"
          sx={{ sm: { borderBottom: "1px solid #E2E8F0" } }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="12px 24px"
            width="100%"
          >
            {image && <Country name={country.isocode} image={image} />}
            <Typography fontSize="14px">{rate}</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export const RowHeaderComponent = () => {
  return (
    <Box
      width="100%"
      backgroundColor="#F8FAFC"
      display="flex"
      padding="12px 24px 12px 24px"
      height="44px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        fontSize="14px"
        fontWeight="400"
        lineHeight="20px"
        letterSpacing="0.001em"
        color="#000000"
      >
        Country
      </Typography>
      <Typography
        marginLeft="50px"
        fontWeight="400"
        fontSize="14px"
        lineHeight="20px"
        letterSpacing="0.001em"
        color="#000000"
      >
        Bank Rates
      </Typography>
      <Typography
        fontWeight="400"
        lineHeight="20px"
        fontSize="14px"
        letterSpacing="0.001em"
        color="#000000"
      >
        Parallel Rates
      </Typography>
    </Box>
  );
};

export const MobileRowHeaderComponent = ({ rate }) => {
  return (
    <Box
      width="100%"
      backgroundColor="#F8FAFC"
      display="flex"
      padding="12px 24px"
      height="44px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        fontSize="14px"
        lineHeight="20px"
        color="#1E293B"
        fontWeight="400"
      >
        Country
      </Typography>

      <Typography
        fontSize="14px"
        lineHeight="20px"
        color="#1E293B"
        fontWeight="400"
      >
        {rate}
      </Typography>
    </Box>
  );
};
