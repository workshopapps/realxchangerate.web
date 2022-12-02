import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { mockData } from "./mockData";
import { Container, Integration } from "./currStyles";
import arrow from "../../assets/arrow_forward.svg";

import Card from "./Card";
import createIcon from "../../assets/create_new.svg";
import updateIcon from "../../assets/update.svg";
import ModalUi from "./Modal";
import { Button, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../store/actions/dashboardActions";
import Flag from "react-world-flags";
import rafiki from "../../assets/rafiki.png";
import cuate from "../../assets/cuate.png";
import contact from "../../assets/contact.png";
import styled from "styled-components";
import MenuDrop from "../../component/MenuDrop/MenuDrop";

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
  const dispatch = useDispatch();
  const { currencies, requestStatus } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const cellSkeleton = (
    <Skeleton variant="rectangular" sx={{ mb: 1 }} width="100%" height="40px" />
  );

  return (
    <section style={{ margin: "0 20px" }}>
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
          title={"Resolve Complaints"}
          desc={"Get to resolve all user complaints on the web app "}
          link={"Resolve Complaints"}
          loc={"/admin/complaints"}
          bg={"#FCF7FD"}
          img={cuate}
        />
        <Card
          title={"Contact Us Responses"}
          desc={"Get to give feedback to users who submit the Contact Us form"}
          link={"Give Feedback"}
          loc={"/admin/contact"}
          bg={"#F7FDF8"}
          img={contact}
        />
      </Integration>
      <Container>
        <div className="topSect">
          <div>
            <h1>Currency Overview</h1>
            <p>Create and edit currency exchange rates</p>
          </div>

          <ModalUi
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
          />
        </div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 500 }}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontWeight: "700" }}>
                  Country
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ fontWeight: "700" }}>
                  Code
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ fontWeight: "700" }}>
                  Rate/₦
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
                currencies.map((row, index) => (
                  <StyledTableRow key={row.country}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ color: "rgba(71, 85, 105, 1)" }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Flag
                          code={row.isocode.slice(0, 2)}
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        <span>{row.country}</span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{ color: "rgba(71, 85, 105, 1)" }}
                    >
                      {row.isocode}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{ color: "rgba(71, 85, 105, 1)" }}
                    >
                      {mockData[index].rate}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      style={{ color: "rgba(71, 85, 105, 1)" }}
                    >
                      <MenuDrop handleOpen={handleOpen} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="text" sx={{ my: 2, fontSize: "0.8rem" }}>
          view more currencies{" "}
          <img src={arrow} alt="arrow" style={{ marginLeft: "10px" }} />
        </Button>
      </Container>
    </section>
  );
}
