import { Box, useMediaQuery } from "@mui/material";
import { Flag, Flag2, Arrow, InverseArrow } from "../assets/";
import AmountInput from "./AmountInput";

const TopComponent = () => {
  const mobileScreen = useMediaQuery("(max-width:481px)")
  const CurrencyArrow = mobileScreen ? InverseArrow : Arrow
  
  const CalendarStyle = {
    height: "44px",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #9B9DFD",
    width: "100%"
  };

  const Calender = () => {
    return (
      <div style={{width: mobileScreen ? "45%" :"23%"}}>
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
        flexDirection:{xs:"column", sm:"row"},
        alignItems:{xs:"flex-start", sm:"center"},
        gap:{xs:"20px"},
        marginTop:{xs:"50px", sm:"auto"}
      }}
    >
      <Calender />

      <AmountInput flag={Flag} />
      <Box display="flex" alignSelf="center" justifyContent="center" >
        <img src={CurrencyArrow} alt="icon"/>
      </Box>

      <AmountInput flag={Flag2} />
    </Box>
  );
};

export default TopComponent;
