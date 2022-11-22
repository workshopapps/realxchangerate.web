import { Box, Typography } from "@mui/material";
import { Flag, RightArrow, Arrow } from "../assets/";

const TopComponent = () => {
  const CalendarStyle = {
    height: "44px",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #9B9DFD",
    width: "278px",
  };

  const TextInput = {
    border: "none",
    width: "120px",
    "::focus": {
      border: "none",
    },
  };
  const Calender = () => {
    return (
      <div>
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
    >
      
  
      <Calender />
        <Box
          display="flex"
          flexDirection="row"
          border="1px solid #9B9DFD"
          alignItems="center"
          padding="10px 12px"
          height="44px"
          width="380px"
          gap="2px"
          borderRadius="6px"
        >
          <Typography
            fontSize="16px"
            lineHeight="24px"
            fontWeight="400"
            color="#111827"
          >
            Amount
          </Typography>
          <input type="text" style={TextInput} />
          <Typography
            fontSize="16px"
            lineHeight="20px"
            fontWeight="400"
            color="#6B7280"
          >
            US Dollar (USD)
          </Typography>
          <img src={Flag} alt="Flag" />
          <img src={RightArrow} alt="arrow" />
        </Box>

        <Box>
          <img src={Arrow} alt="icon"/>
        </Box>


        <Box
          display="flex"
          flexDirection="row"
          border="1px solid #9B9DFD"
          alignItems="center"
          padding="10px 12px"
          height="44px"
          width="380px"
          gap="2px"
          borderRadius="6px"
        >
          <Typography
            fontSize="16px"
            lineHeight="24px"
            fontWeight="400"
            color="#111827"
          >
            Amount
          </Typography>
          <input type="text" style={TextInput} />
          <Typography
            fontSize="16px"
            lineHeight="20px"
            fontWeight="400"
            color="#6B7280"
          >
            US Dollar (USD)
          </Typography>
          <img src={Flag} alt="Flag" />
          <img src={RightArrow} alt="arrow" />
        </Box>
      </Box>
 
  );
};

export default TopComponent;
