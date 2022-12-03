import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  StyledFlagAndCountry,
  StyledGrowth,
  StyledLoss,
} from "./DataTable.styled";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../../store/actions/dashboardActions";
import Flag from "react-world-flags";
import { Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

export default function DataTable() {
  const dispatch = useDispatch();
  const { currencies, requestStatus } = useSelector((state) => state.dashboard);

  /* useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);*/

  const [table, setTable] = useState(null);
  const [sortedItems, setSortedItems] = useState([])
  useEffect(() => {
    let arr = [];

    const fetchCode = (isocodes) => {
      for (let i = 0; i < isocodes.length; i++) {
        const isocode = isocodes[i];
        axios
          .get(`https://api.streetrates.hng.tech/api/currency/trend/${isocode}`)
          .then((res) => {
            arr.push(res.data);
          })
          .catch((e) => console.log(e));
      }

      setTable(arr);

      setSortedItems(prevData=> (
        [...prevData, arr]
      ))
    };

    axios
      .get(`https://api.streetrates.hng.tech/api/currency/currencies`)
      .then((res) => {
        const data = res.data.currencies;
        const items = data.map((e) => {
          return e.isocode;
        });
        fetchCode(items);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(`THIS IS SORTED `, sortedItems);

  if (requestStatus === "failed") {
    toast.error("request failed");
  }

  const currentRows = [
    {
      day: -1.34,
      week: -0.34,
      month: -4.34,
      tvl: 47.34,
      mktcap: "1,234,340",
    },
    {
      day: 2.23,
      week: 0.23,
      month: 3.23,
      tvl: 256,
      mktcap: "1,267,456",
    },
    {
      day: 0.21,
      week: 0.21,
      month: 6.21,
      tvl: 56,
      mktcap: "46.4t",
    },
    {
      day: -3.92,
      week: -0.92,
      month: -6.92,
      tvl: 34.45,
      mktcap: "3,678,123",
    },
    {
      day: -1.34,
      week: -0.34,
      month: -4.34,
      tvl: 47.34,
      mktcap: "1,234,340",
    },
    {
      day: -1.34,
      week: -0.34,
      month: -4.34,
      tvl: 47.34,
      mktcap: "1,234,340",
    },
    {
      day: 2.23,
      week: 0.23,
      month: 3.23,
      tvl: 256,
      mktcap: "1,267,456",
    },
    {
      day: 0.21,
      week: 0.21,
      month: 6.21,
      tvl: 56,
      mktcap: "46.4t",
    },
    {
      day: -3.92,
      week: -0.92,
      month: -6.92,
      tvl: 34.45,
      mktcap: "3,678,123",
    },
    {
      day: -1.34,
      week: -0.34,
      month: -4.34,
      tvl: 47.34,
      mktcap: "1,234,340",
    },
  ];

  const cellSkeleton = (
    <Skeleton variant="rectangular" sx={{ mb: 1 }} width="100%" height="40px" />
  );

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
          {!table ? (
            <>
              {Array.from(Array(3)).map((_, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Array.from(Array(7)).map((_, index) => (
                    <TableCell key={index} component="th" scope="row">
                      {cellSkeleton}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          ) : (
            table.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>NGN</TableCell>
                <TableCell component="th" scope="row">
                  <StyledFlagAndCountry>
                    <Flag code={row?.data.isocode.slice(0, 2)} />
                    <p>{row?.country}</p>
                  </StyledFlagAndCountry>
                </TableCell>
                <TableCell align="right">ngn</TableCell>
                <TableCell align="right">
                  {row?.data.one_day ? (
                    row?.data.one_day > 0 ? (
                      <StyledGrowth>+{row?.data.one_day}</StyledGrowth>
                    ) : (
                      <StyledLoss>{row?.data.one_day}</StyledLoss>
                    )
                  ) : currentRows[index].day > 0 ? (
                    <StyledGrowth>+{currentRows[index].day}</StyledGrowth>
                  ) : (
                    <StyledLoss>{currentRows[index].day}</StyledLoss>
                  )}
                </TableCell>
                <TableCell align="right">
                  {row?.data.seven_days ? (
                    row?.data.seven_days > 0 ? (
                      <StyledGrowth>+{row?.data.seven_days}</StyledGrowth>
                    ) : (
                      <StyledLoss>{row?.data.seven_days}</StyledLoss>
                    )
                  ) : currentRows[index].week > 0 ? (
                    <StyledGrowth>+{currentRows[index].week}</StyledGrowth>
                  ) : (
                    <StyledLoss>{currentRows[index].week}</StyledLoss>
                  )}
                </TableCell>
                <TableCell align="right">
                  {row?.data.one_month ? (
                    row?.data.one_month > 0 ? (
                      <StyledGrowth>+{row?.data.one_month}</StyledGrowth>
                    ) : (
                      <StyledLoss>{row?.data.one_month}</StyledLoss>
                    )
                  ) : currentRows[index].month > 0 ? (
                    <StyledGrowth>+{currentRows[index].month}</StyledGrowth>
                  ) : (
                    <StyledLoss>{currentRows[index].month}</StyledLoss>
                  )}
                </TableCell>
                <TableCell align="right">
                  ${row?.data.tvl ? row?.data.tvl : currentRows[index].tvl}
                </TableCell>
                <TableCell align="right">
                  {row?.data.mktcap
                    ? row?.data.mktcap
                    : currentRows[index].mktcap}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
