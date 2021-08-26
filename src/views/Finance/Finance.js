import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Modal from "./modal";
import { rows } from "./rowsData";

const useStyles = makeStyles({
  root: {
    borderBottom: "1px solid unset",
    background: "#f9f9f9",
  },
  header: {
    borderBottom: "1px solid #000",
    background:
      "linear-gradient(90deg, rgba(35,97,232,1) 0%, rgba(51,184,255,1) 100%)",
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  resume: {
    borderTop: "1px solid lightgrey",
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.id}</TableCell>
        <TableCell component="th" scope="row">
          {row.clients}
        </TableCell>
        <TableCell align="right">{row.reference}</TableCell>
        <TableCell align="right">{row.description}</TableCell>
        <TableCell align="right">{row.dateStart}</TableCell>
        <TableCell align="right">{row.dateEnd}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Información
                <IconButton
                  aria-label="add-row"
                  size="small"
                  onClick={() => setOpenModal(true)}
                >
                  <AddCircleIcon color="primary" />
                </IconButton>
              </Typography>
              <Table size="small" aria-label="providers">
                <TableHead>
                  <TableRow>
                    <TableCell>Proveedor</TableCell>
                    <TableCell>Concepto</TableCell>
                    <TableCell align="right">Factura</TableCell>
                    <TableCell align="right">AF/EX/BOL</TableCell>
                    <TableCell align="right">Monto ($)</TableCell>
                    <TableCell align="right">Estado</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody className={classes.bodyTable}>
                  {row.data.map((dataRow) => (
                    <TableRow key={dataRow.id}>
                      <TableCell>{dataRow.provider}</TableCell>
                      <TableCell>{dataRow.concept}</TableCell>
                      <TableCell align="right">{dataRow.facture}</TableCell>
                      <TableCell align="right">{dataRow.tipe}</TableCell>
                      <TableCell align="right">{dataRow.amount}</TableCell>
                      <TableCell align="right">{dataRow.state}</TableCell>
                      <TableCell align="right">{dataRow.date}</TableCell>
                      <TableCell>
                        <IconButton aria-label="delete-row" size="small">
                          <DeleteIcon color="secondary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                  <div className={classes.resume}>
                    <TableRow>
                      <TableCell align="left">Total</TableCell>
                      <TableCell align="right">45345</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left">Peso&nbsp;(kg)</TableCell>
                      <TableCell align="right">45</TableCell>
                    </TableRow>
                  </div>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Modal open={openModal} handleClose={() => setOpenModal(false)} />
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="FinanceTable">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell />
            <TableCell className={classes.headerText} align="left">
              ID
            </TableCell>
            <TableCell className={classes.headerText}>Clientes</TableCell>
            <TableCell className={classes.headerText} align="right">
              Referencia
            </TableCell>
            <TableCell className={classes.headerText} align="right">
              Descripción
            </TableCell>
            <TableCell className={classes.headerText} align="right">
              Fecha inicio
            </TableCell>
            <TableCell className={classes.headerText} align="right">
              Fecha término
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
