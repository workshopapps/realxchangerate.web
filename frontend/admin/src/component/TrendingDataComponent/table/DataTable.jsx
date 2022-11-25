import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ZAR_flag from "../../../assets/images/flags/ZAR.png";
import GBP_flag from "../../../assets/images/flags/GBP.png";
import CAD_flag from "../../../assets/images/flags/CAD.png";
import AUD_flag from "../../../assets/images/flags/AUD.png";
import JPY_flag from "../../../assets/images/flags/JPY.png";
import USD_flag from "../../../assets/images/flags/USD.png";
import EUR_flag from "../../../assets/images/flags/EUR.png";
import CNY_flag from "../../../assets/images/flags/CNY.png";
import {
  StyledFlagAndCountry,
  StyledGrowth,
  StyledLoss,
} from "./DataTable.styled";

function createData(flag, country, currency, day, week, month, tvl, mktcap) {
  return {
    country: { flag, country },
    currency,
    day,
    week,
    month,
    tvl,
    mktcap,
  };
}

const rows = [
  createData(
    ZAR_flag,
    "South Africa",
    "ZAR",
    -1.34,
    -0.34,
    -4.34,
    47.34,
    "1,234,340"
  ),
  createData(GBP_flag, "Britain", "GBP", 2.23, 0.23, 3.23, 256, "1,267,456"),
  createData(CAD_flag, "Canada", "CAD", 0.21, 0.21, 6.21, 56, "46.4t"),
  createData(
    AUD_flag,
    "Australia",
    "AUD",
    -3.92,
    -0.92,
    -6.92,
    34.45,
    "3,678,123"
  ),
  createData(JPY_flag, "Japan", "JPY", -2.12, -0.12, -7.12, 23.54, "4,563,678"),
  createData(
    USD_flag,
    "United States",
    "USD",
    -1.38,
    -0.38,
    -4.38,
    98.34,
    "9,368,905"
  ),
  createData(EUR_flag, "Europe", "EUR", 4.45, 0.45, 8.45, 527, "10,456,789"),
  createData(CNY_flag, "China", "CNY", 6.59, 0.59, 4.59, 357, "20.45m"),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 750 }}
        size="small"
        aria-label="trending data table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ paddingBlock: 2, fontWeight: 600 }}>
              Country
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              Currency
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              1d Change
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              7d Change
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              1m Change
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              TVL
            </TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              Mkt. Cap
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.currency}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <StyledFlagAndCountry>
                  <img alt={row.country.country} src={row.country.flag} />
                  <p>{row.country.country}</p>
                </StyledFlagAndCountry>
              </TableCell>
              <TableCell align="right">{row.currency}</TableCell>
              <TableCell align="right">
                {row.day > 0 ? (
                  <StyledGrowth>+{row.day}</StyledGrowth>
                ) : (
                  <StyledLoss>-{row.day}</StyledLoss>
                )}
              </TableCell>
              <TableCell align="right">
                {row.week > 0 ? (
                  <StyledGrowth>+{row.week}</StyledGrowth>
                ) : (
                  <StyledLoss>-{row.week}</StyledLoss>
                )}
              </TableCell>
              <TableCell align="right">
                {row.month > 0 ? (
                  <StyledGrowth>+{row.month}</StyledGrowth>
                ) : (
                  <StyledLoss>-{row.month}</StyledLoss>
                )}
              </TableCell>
              <TableCell align="right">${row.tvl}</TableCell>
              <TableCell align="right">{row.mktcap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
