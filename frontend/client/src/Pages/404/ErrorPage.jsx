import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import smallImage from "./errorsmall.svg";
function ErrorPage() {
  const Text = ({ text }) => (
    <Typography fontWeight="400" fontSize="16px" lineHeight="28px">
      {text}
    </Typography>
  );
  return (
    <Box
      margin="50px auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" flexDirection="column" gap="16px" alignItems="center">
        <Typography fontWeight="600" fontSize="24px" lineHeight="28px">
          <span style={{ color: "#EF4444" }}> Oops!</span> Something went wrong
        </Typography>
        <Text text="We found the rate not the page" />
      </Box>

      <Image src={smallImage} alt="Sorry page not available" />
      <Box display="flex" flexDirection="column" gap="16px" alignItems="center">
        <Text text="It may have been removed or you misspelled the URL" />
        <Typography fontWeight="400" fontSize="14px" lineHeight="28px">
          You can go back to {" "}
          <Link to={"/"} style={{ color: "#3381FF" }}>
            streetrate.com {" "}
          </Link>
          or kindly {" "}
          <Link to={"/contact"} style={{ color: "#3381FF" }}>
            contact us {" "}
          </Link>
          about the problem
        </Typography>
      </Box>
    </Box>
  );
}

const Image = styled.img`
  width: 100%;
  max-width: 700px;
`;
export default ErrorPage;
