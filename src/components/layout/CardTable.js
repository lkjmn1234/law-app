import React from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import MixCard2 from "./MixCard2"

function createData(props) {
  return {name:<MixCard2 name={props.name} lang={props.lang} content={props.content}></MixCard2>};
}

const rows = [
  createData({name:"1. Firm A" ,lang:"普 | ENG | ALL ROUNDED", content:"Wan Chai | 10 yrs. of exp | updated 3 days ago | 100 views"}),
  createData({name:"2. Firm B" ,lang:"普 | ENG ", content:"North Point | 15 yrs. of exp | updated 13 days ago | 124 views"}),
  createData({name:"3. Firm C" ,lang:"普 | ENG ", content:"Central | 10 yrs. of exp | updated 23 days ago | 23 views"}),
  createData({name:"4. Firm D" ,lang:"普 | ENG ", content:"Mong Kok | 10 yrs. of exp | updated 33 days ago | 33 views"}),
  createData({name:"5. Firm E" ,lang:"普 | ENG ", content:"Hung Hom | 10 yrs. of exp | updated 13 days ago | 11 views"}),
  createData({name:"6. Firm F" ,lang:"普 | ENG ", content:"Causeway Bay | 10 yrs. of exp | updated 13 days ago | 44 views"}),
  createData({name:"7. Firm G" ,lang:"普 | ENG ", content:"Jordan | 10 yrs. of exp | updated 23 days ago | 56 views"}),
  createData({name:"8. Firm H" ,lang:"普 | ENG ", content:"Wan Chai | 10 yrs. of exp | updated 33 days ago | 46 views"}),
  createData({name:"9. Firm I" ,lang:"普 | ENG ", content:"Wan Chai | 10 yrs. of exp | updated 43 days ago | 5 views"}),
  createData({name:"10. Firm J", lang: "普 | ENG | Hindu", content:"Wan Chai | 10 yrs. of exp | updated 13 days ago | 1 views"}),
  createData({name:"11. Firm K", lang: "普 | ENG | Russian", content:"Wan Chai | 10 yrs. of exp | updated 3 days ago | 10 views"}),
  createData({name:"12. Firm L", lang: "普 | ENG | JPN", content:"Wan Chai | 10 yrs. of exp | updated 2 days ago | 111 views"}),
  createData({name:"13. Firm M", lang: "普 | ENG ", content:"Wan Chai | 10 yrs. of exp | updated 0 days ago | 123 views"})
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function CardTable() {
  const classes = useStyles();
  const [order] = React.useState("asc");
  const [orderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="10px"
                      >
                        {row.name}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
