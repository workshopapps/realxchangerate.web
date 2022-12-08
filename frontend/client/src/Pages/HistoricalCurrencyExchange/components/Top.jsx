import { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Arrow, InverseArrow } from "../assets";
import AmountInput from "./AmountInput";
import { useSelector } from "react-redux";

const TopComponent = () => {
  const mobileScreen = useMediaQuery("(max-width:481px)");
  const CurrencyArrow = mobileScreen ? InverseArrow : Arrow;

  const [baseAmount, setBaseAmount] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState("");

  const { defaultCurrency } = useSelector((state) => state.service);

  const BaseConversion = (value) => {
    setBaseAmount(value);
    const rate = 400;
    let result = rate * parseInt(value);
    result = isNaN(result) ? "" : result;

    setCalculatedAmount(result.toLocaleString());
  };

  const ReverseConversion = (value) => {
    setCalculatedAmount(value);
    const rate = 400;
    let result = parseInt(value) / rate;
    result = isNaN(result) ? "" : result;

    setBaseAmount(result.toLocaleString());
  };

  const CalendarStyle = {
    height: "44px",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #9B9DFD",
    width: "100%",
  };

  const Calender = () => {
    return (
      <div style={{ width: mobileScreen ? "45%" : "23%" }}>
        <input placeholder="Select date" type="date" style={CalendarStyle} />
      </div>
    );
  };


  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      width="100%"
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        gap: { xs: "20px" },
        marginTop: { xs: "50px", sm: "auto" },
      }}
    >
      <Calender />

      <AmountInput
        defaultCurrency={{
          code: "US",
          label: "United States",
          phone: "1",
        }}
        amount={baseAmount}
        setAmount={BaseConversion}
      />
      <Box display="flex" alignSelf="center" justifyContent="center">
        <img src={CurrencyArrow} alt="icon" />
      </Box>

      <AmountInput
        defaultCurrency={defaultCurrency}
        amount={calculatedAmount}
        setAmount={ReverseConversion}
      />
    </Box>
  );
};

export default TopComponent;
