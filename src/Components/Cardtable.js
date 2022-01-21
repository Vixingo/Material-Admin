import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import results from "../results.json";

let cardlist = results;

const columns = [
    { id: "creationTime", label: "Creation Time ", minWidth: 170 },
    { id: "modifiedTime", label: "Modified Time", minWidth: 100 },
    {
        id: "id",
        label: "ID",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "cardNumber",
        label: "Card Number",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "panFirst6",
        label: "panFirst6",
        minWidth: 170,
        align: "center",
    },
    {
        id: "panLast4",
        label: "panLast4",
        minWidth: 170,
        align: "center",
    },
    {
        id: "type",
        label: "Type",
        minWidth: 170,
        align: "center",
    },
    {
        id: "state",
        label: "State",
        minWidth: 170,
        align: "center",
    },
    {
        id: "sequenceNumber",
        label: "Sequence Number",
        minWidth: 170,
        align: "center",
    },
    {
        id: "cardProfileName",
        label: "Card Profile Name",
        minWidth: 170,
        align: "center",
    },
    {
        id: "pinFailCount",
        label: "Pin Fail Count",
        minWidth: 170,
        align: "center",
    },
    {
        id: "reissue",
        label: "Reissue",
        minWidth: 170,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "expiry",
        label: "Expiry",
        minWidth: 170,
        align: "center",
    },
    {
        id: "customerNumber",
        label: "Customer Number",
        minWidth: 170,
        align: "center",
    },
    {
        id: "embossedName",
        label: "Embossed Name",
        minWidth: 170,
        align: "center",
    },
    {
        id: "programName",
        label: "Program Name",
        minWidth: 170,
        align: "center",
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
];

function Cardtable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cardlist
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
                                        >
                                            {columns.map((column) => {
                                                const value =
                                                    row.card[column.id];
                                                return (
                                                    <TableCell
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            "number"
                                                            ? column.format(
                                                                  value
                                                              )
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}

export default Cardtable;
