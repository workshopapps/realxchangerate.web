import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Rates from "./Rates";

//
const columns = [
    { id: "currency", label: "Currency" },
    { id: "bdc", label: "BDC" },
    { id: "bank", label: "Bank" },
];

export default function CustomPaginationActionsTable({ currencyAndFlag }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#F1F5F9",
            color: "#0F172A",
            fontSize: "16px",
            fontWeight: 600,
        },
    }));

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", marginBottom: 10 }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={
                                        index === 2
                                            ? "right"
                                            : index === 1
                                            ? "center"
                                            : "left"
                                    }
                                    style={{ minWidth: 170 }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ overflow: "hidden" }}>
                        {currencyAndFlag
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        {columns.map((column, index) => {
                                            return (
                                                <>
                                                    {index === 0 ? (
                                                        <TableCell
                                                            key={column.id}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    display:
                                                                        "flex",
                                                                    alignItems:
                                                                        "center",
                                                                    gap: "1rem",
                                                                }}
                                                            >
                                                                <Box>
                                                                    <img
                                                                        loading="lazy"
                                                                        width="20"
                                                                        src={`data:image/jpeg;base64,${row?.flag}`}
                                                                        srcSet={`data:image/jpeg;base64,${row?.flag}`}
                                                                        alt=""
                                                                    />
                                                                </Box>
                                                                <Box>
                                                                    <Box
                                                                        style={{
                                                                            fontSize:
                                                                                "13px",
                                                                        }}
                                                                    >
                                                                        {
                                                                            row
                                                                                .currency
                                                                                .code
                                                                        }
                                                                    </Box>
                                                                    <Box
                                                                        style={{
                                                                            fontSize:
                                                                                "13px",
                                                                        }}
                                                                    >
                                                                        {
                                                                            row
                                                                                .currency
                                                                                .name
                                                                        }
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </TableCell>
                                                    ) : index === 1 ? (
                                                        <TableCell
                                                            key={column.id}
                                                            align={"center"}
                                                            style={{
                                                                fontSize:
                                                                    "13px",
                                                            }}
                                                        >
                                                            <Rates
                                                                code={
                                                                    row.currency
                                                                        .code
                                                                }
                                                                type={
                                                                    "parallel_buy"
                                                                }
                                                            />
                                                        </TableCell>
                                                    ) : (
                                                        <TableCell
                                                            key={column.id}
                                                            align={"right"}
                                                            style={{
                                                                fontSize:
                                                                    "13px",
                                                            }}
                                                        >
                                                            <Rates
                                                                code={
                                                                    row.currency
                                                                        .code
                                                                }
                                                                type={
                                                                    "official_buy"
                                                                }
                                                            />
                                                        </TableCell>
                                                    )}
                                                </>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={currencyAndFlag.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
