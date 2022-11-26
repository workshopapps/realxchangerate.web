import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import editIcon from "../../assets/editIcon.svg";
import { mockData } from "./mockData";
import { Container, Integration } from "./currStyles";
import arrow from "../../assets/arrow_forward.svg";

import Card from "./Card";
import createIcon from "../../assets/create_new.svg";
import updateIcon from "../../assets/update.svg";
import ModalUi from "./Modal";
import { Button, IconButton, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../store/actions/dashboardActions";
import Flag from "react-world-flags";

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

  return (
    <section style={{ margin: "0 20px" }}>
      <Integration>
        <Card
          icon={createIcon}
          title={"Create Integration"}
          desc={"Get new users on board and integrated into the system"}
          link={"Create"}
        />
        <Card
          icon={updateIcon}
          title={"Update Integration"}
          desc={"Update information on all user integrations easily"}
          link={"Update"}
        />
        <Card
          icon={createIcon}
          title={"Manage Integration"}
          desc={"Update and make changes to user integration"}
          link={"Manage"}
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
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
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
                  <Skeleton
                    variant="rounded"
                    sx={{ mb: 1 }}
                    width="100%"
                    height="4rem"
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ mb: 1 }}
                    width="100%"
                    height="4rem"
                  />
                  <Skeleton
                    variant="rounded"
                    sx={{ mb: 1 }}
                    width="100%"
                    height="4rem"
                  />
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
                      <IconButton>
                        <img src={editIcon} alt="edit" />
                      </IconButton>
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
