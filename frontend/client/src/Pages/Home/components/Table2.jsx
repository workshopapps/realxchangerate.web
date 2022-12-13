import { Typography, Box, useTheme, Button } from "@mui/material";
import React from "react";
import { countries } from "../data";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { maxWidth } from "@mui/system";
import "../table.css";
import Tooltip from "@mui/material/Tooltip";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function Table2({ isocode, country, deleteIcon, rates, link, symbol }) {
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const countryDetails = countries.filter((countr) => countr.label === country);
  return (
    <TableRow
    // justifyContent="space-between"
    // display="flex"
    // flexDirection="row"
    // padding="10px"
    // alignItems="center"
    // borderTop={dark ? "1px solid #001E4E" : "1px solid #CBD5E1"}
    // fontSize="1.4rem"
    // height="70px"
    // gap="150px"
    // overflowX="scroll"
    // style={{ position: "relative" }}
    >
      <StyledTableCell>
        <Link to={`/${isocode}/currency-profile`}>
          <Tooltip title={country} placement="right-start">
            <Button>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <Box>
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${countryDetails[0]?.code.toLowerCase()}.png`}
                    alt=""
                  />
                </Box>
                <Box>
                  <Box
                    style={{
                      color: dark ? "#8C9FBC" : "#555962",
                      fontSize: "16px",
                    }}
                  >
                    {isocode}
                  </Box>
                  {/* <Box

                sx={{ fontSize: "1rem", color: dark ? "#FAFAFA" : "#94A3B8" }}
              >
                 
              </Box> */}
                </Box>
              </Box>
            </Button>
          </Tooltip>
        </Link>
      </StyledTableCell>
      {/* <Box>
        <div>
          <Box fontSize="16px">
            {symbol} {Number(rates?.parallel_buy).toFixed(2)}
          </Box>
        </div>
      </Box> */}
      <StyledTableCell style={{ fontSize: "14px" }}>
        {symbol} {Number(rates?.parallel_buy).toFixed(2)}
      </StyledTableCell>
      {/* <Box>
        <div style={{ display: "flex" }}>
          <Box fontSize="16px" width="80px">
            {symbol} {Number(rates?.official_buy).toFixed(2)}
          </Box>
        </div>
      </Box> */}
      <StyledTableCell
        style={{
          height: "40px",
          paddingTop: "40px",
          paddingBottom: "40px",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          width:"200px"
        }}
      >
        <span style={{ width: "70px", fontSize: "14px", display: "flex" }}>
          {symbol} {Number(rates?.official_buy).toFixed(2)}
        </span>
        <span>{deleteIcon}</span>
      </StyledTableCell>
    </TableRow>
  );
}

export default Table2;

const DeleteBox = styled(Box)`
  /* @media screen and (max-width: 480px) {
    /* position: fixed; */
  /* position: absolute;
    left: 300px;
    right: 20px;
    top: 20px;
    animation-name: scale-in-hor-right;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none; */

  /* @keyframes scale-in-hor-right {
      0% {
        transform: scaleX(0);
        transform-origin: 100% 100%;
        opacity: 1;
      }
      100% {
        transform: scaleX(1);
        transform-origin: 100% 100%;
        opacity: 1;
      }
    } */
  /* } */
`;

const StyledTableCell = styled(TableCell)`
  @media screen and (max-width: 480px) {
    width: 70px;
  }
`;
