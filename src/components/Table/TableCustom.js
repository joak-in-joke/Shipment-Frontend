import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Select from "react-select";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const options = [
  { value: "id", label: "ID" },
  { value: "status", label: "Estado" },
  { value: "referencia", label: "Referencia" },
  // { value: "etd", label: "ETD" },
  // { value: "eta", label: "ETA" },
];

const optionsStatus = [
  { value: "origen", label: "Origen" },
  { value: "abordo", label: "Abordo" },
  { value: "llegada", label: "Llegada" },
  { value: "finalizado", label: "Finalizado" },
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
  return stabilizedThis.map((el) => el[0]);
}
function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    tableHeaderColor,
    dataHeader,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  if (dataHeader !== undefined)
    return (
      <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
            />
          </TableCell>
          {dataHeader.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "default"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  else return null;
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
  filterArea: {
    display: "flex",
    flexDirection: "row",
    width: "550px",
  },
  select: {
    width: "170px",
    marginRight: "10px",
  },
  inputForm: {
    width: "180px",
    height: "36px",
    backgroundColor: "#FFFFFF",
  },
  button: {
    marginLeft: "10px",
    height: "36px",
  },
  cssFocused: {},
  notchedOutline: {},
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const [filtro, setFiltro] = useState(null);
  const [busqueda, setBusqueda] = useState(null);
  const { numSelected } = props;

  const PressEnter = (e) => {
    if (e.key === "Enter") {
      props.filterTable(filtro, busqueda);
    }
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} seleccionados
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Embarques
        </Typography>
      )}

      {numSelected > 0 ? (
        <div>
          <Tooltip title="borrar">
            <IconButton
              aria-label="delete"
              onClick={() => props.deleteShipments()}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        <div className={classes.filterArea}>
          {/* <InputLabel htmlFor="filtroLabel">Filtro</InputLabel>
           <Select
            native
            value={filtro}
            onChange={() => setFiltro()}
            label="filtroLabel"
            placeholder="Selecciona filtro"
            inputProps={{
              name: "age",
              id: "filtroLabel",
            }}
          >
            <option aria-label="" value="" />
            <option value="id">ID</option>
            <option value="status">estado</option>
            <option value="referencia">referencia</option>
            <option value="eta">eta</option>
            <option value="etd">etd</option>
          </Select> */}
          <Select
            className={classes.select}
            options={options}
            placeholder="Selecciona filtro"
            onChange={(e) => setFiltro(e.value)}
          />
          {filtro === "status" ? (
            <Select
              className={classes.select}
              options={optionsStatus}
              placeholder="Selecciona estado"
              onChange={(e) => setBusqueda(e.value)}
              onKeyUp={(e) => PressEnter(e)}
            />
          ) : filtro === "eta" || filtro === "etd" ? (
            <TextField
              placeholder="fecha"
              variant="outlined"
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyUp={(e) => PressEnter(e)}
              size="small"
              type="date"
              InputProps={{
                classes: {
                  root: classes.inputForm,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          ) : (
            <TextField
              placeholder="filtrar"
              variant="outlined"
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyUp={(e) => PressEnter(e)}
              size="small"
              InputProps={{
                classes: {
                  root: classes.inputForm,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          )}

          <Button
            variant="contained"
            className={classes.button}
            size="small"
            disableElevation
            onClick={() => props.filterTable(filtro, busqueda)}
          >
            Filtrar
          </Button>
        </div>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
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
    width: 1,
  },
  tableCellPointer: {
    cursor: "pointer",
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const history = useHistory();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { tableData, tableHeaderColor, dataHeader } = props;

  const deleteShipments = () => {
    props.deleteShipments(selected);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tableData.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClickCheckbox = (event, name) => {
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

  const handleClick = (event, name) => {
    history.push(`/admin/table/shipment?id=${name}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <EnhancedTableToolbar
        numSelected={selected.length}
        dense={dense}
        filterTable={props.filterTable}
        handleChangeDense={handleChangeDense}
        deleteShipments={deleteShipments}
      />
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={dense ? "small" : "medium"}
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={tableData.length}
            tableHeaderColor={tableHeaderColor}
            dataHeader={dataHeader}
          />
          <TableBody>
            {stableSort(tableData, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    className={classes.tableCellPointer}
                  >
                    <TableCell
                      padding="checkbox"
                      onClick={(event) => handleClickCheckbox(event, row.id)}
                    >
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={row.id}
                      scope="row"
                      padding="none"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {row.estado}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {row.referencia}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {row.etd}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(event) => handleClick(event, row.id)}
                    >
                      {row.eta}
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
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) => {
          return "" + from + "-" + to + " de " + count;
        }}
        labelRowsPerPage={"Filas por página"}
      />
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Comprimir tabla"
      />
    </div>
  );
}
