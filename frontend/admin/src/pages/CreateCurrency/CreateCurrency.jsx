import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { MainWrapper, Container, Integration } from "./currStyles";
import arrow from "../../assets/arrow_forward.svg";

import Card from "./Card";

import AddModalUi from "./AddModal";
import EditModalUi from "./EditModal";
import AddRatesModalUi from "./AddRatesModal";
import { Button, IconButton, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../store/actions/dashboardActions";
import Flag from "react-world-flags";
import rafiki from "../../assets/rafiki.png";
import cuate from "../../assets/cuate.png";
import contact from "../../assets/contact.png";
import styled from "styled-components";
import MenuDrop from "../../component/MenuDrop/MenuDrop";
import { getBaseDetails, getRates } from "../../store/actions/rateActions";
import { toast } from "react-toastify";
import Menu from "@mui/material/Menu";
import more from "../../assets/more.svg";
import MenuItem from "@mui/material/MenuItem";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.white,
    backgroundColor: theme.palette.action.hover,
    fontSize: 15,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CreateCurrency() {
  const [open, setOpen] = useState(false);
  const [editVal, setEditVal] = useState({
    country: "",
    isocode: "",
    symbol: "",
    name: "",
  });

  const [editOpen, setEditOpen] = useState(false);
  const [addRate, setAddRate] = useState(false);

  const [currencyNo, setCurrencyNo] = useState(10);
  const [viewMore, setViewMore] = useState(true);
  const [currs, setCurrs] = useState([]);
  const dispatch = useDispatch();
  const { currencies, requestStatus } = useSelector((state) => state.dashboard);
  const {
    currencyRates,

    baseCurrency,
    baseCurrencyDetails,
    currencyStatus,
    error,
  } = useSelector((state) => state.rates);

  const handleViewMore = () => {
    if (10 + currencyNo > currencies.length) {
      setCurrencyNo(currencies.length);
      setViewMore(false);
    } else {
      setCurrencyNo((prev) => {
        return prev + 10;
      });
    }
  };
  useEffect(() => {
    dispatch(getTrending());

    dispatch(getBaseDetails("USD"));

    dispatch(getRates("USD"));

    //eslint-disable-next-line
  }, [dispatch]);
  useEffect(() => {
    setCurrs(currencyRates);
  }, [currencyRates]);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const handleAddRate = () => {
    setAddRate(!addRate);
  };
  const handleAddRateClose = () => {
    setAddRate(!addRate);
  };

  const handleEditOpen = () => {
    setEditOpen(!editOpen);
  };
  const handleEditClose = () => {
    setEditOpen(!editOpen);
  };

  if (currencyStatus === "failed" || requestStatus === "failed") {
    toast.error(error);
  }
  const cellSkeleton = (
    <Skeleton variant="rectangular" sx={{ mb: 1 }} width="100%" height="40px" />
  );

  return (
    <MainWrapper>
      <h1>Dashboard</h1>
      <Integration>
        <Card
          title={"Update FAQs"}
          desc={
            "Edit, add and delete Frequently Asked Questions (FAQs) on the web app"
          }
          link={"Update FAQs"}
          loc={"/admin/faqs"}
          bg={"#F7F9FD"}
          img={rafiki}
        />
        <Card
          title={"View Suggestions"}
          desc={
            "Get to view and attend to all user suggestions on the web app "
          }
          link={"All suggestions"}
          loc={"/admin/complaints"}
          bg={"#FCF7FD"}
          img={cuate}
        />
        {/* <Card
          title={'Contact us Responses'}
          desc={'Get to give feedback to users who submit the Contact Us form'}
          link={'Give feedback'}
          loc={'/admin/contact'}
          bg={'#F7FDF8'}
          img={contact}
        /> */}
      </Integration>
      <Container>
        <div className="topSect">
          <div>
            <h1>Currency Overview</h1>
            <p>Create and edit currency exchange rates</p>
          </div>
          <AddModalUi
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
          />
          <EditModalUi
            handleEditOpen={handleEditOpen}
            handleEditClose={handleEditClose}
            editOpen={editOpen}
            editVal={editVal}
          />
          <AddRatesModalUi
            handleAddRate={handleAddRate}
            handleAddRateClose={handleAddRateClose}
            addRate={addRate}
            editVal={editVal}
          />
        </div>
        <TableContainer
          style={{ margin: "auto -10px", width: "auto", overflowY: "visible" }}
          component={Paper}
        >
          <Table
            sx={{ minWidth: 500 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead style={{ backgroundColor: "#f8fafc" }}>
              <TableRow>
                <StyledTableCell sx={{ fontWeight: "700" }}>
                  Country
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ fontWeight: "700" }}>
                  Code
                </StyledTableCell>
                <StyledTableCell align="right" sx={{ fontWeight: "700" }}>
                  {`Rate/${baseCurrencyDetails.symbol}`}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {/* Carbs&nbsp;(g) */}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {requestStatus === "pending" ? (
                <>
                  {Array.from(Array(3)).map((_, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {Array.from(Array(3)).map((_, index) => (
                        <TableCell key={index} component="th" scope="row">
                          {cellSkeleton}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </>
              ) : (
                currencies
                  .filter((currency) => {
                    return currency.isocode !== baseCurrency;
                  })
                  .slice(0, currencyNo)
                  .map((row, index) => (
                    <StyledTableRow key={row.country}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{ color: "rgba(71, 85, 105, 1)" }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Flag
                            code={row?.isocode?.slice(0, 2)}
                            style={{ width: "30px", marginRight: "10px" }}
                          />
                          <span>{row.country}</span>
                        </div>
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ color: "rgba(71, 85, 105, 1)" }}
                      >
                        {row.isocode}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ color: "rgba(71, 85, 105, 1)" }}
                      >
                        {currs[index]?.status === "fulfilled"
                          ? currs[index]?.value?.data?.parallel_total
                          : "-"}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ color: "rgba(71, 85, 105, 1)" }}
                      >
                        <MenuDrop
                          handleEditOpen={handleEditOpen}
                          handleAddRate={handleAddRate}
                          rowData={row}
                          setRowData={setEditVal}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {viewMore && (
          <Button
            variant="text"
            sx={{ my: 2, textTransform: "capitalize", fontSize: "0.8rem" }}
            onClick={handleViewMore}
          >
            view more currencies{" "}
            <img src={arrow} alt="arrow" style={{ marginLeft: "10px" }} />
          </Button>
        )}
      </Container>
    </MainWrapper>
  );
}
