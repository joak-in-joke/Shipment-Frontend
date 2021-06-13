import React, { useState } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import Dialog from "components/newMisionDialog/editMisionModal";
import DialogCustom from "components/Dialog/Dialog.js";

import API from "variables/api.js";
const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  const [open, setOpen] = useState(false);

  const [id, setId] = useState(null);
  const handleClose = (e = null) => {
    setOpen(!open);
    setId(e);
  };

  const deleteMision = (id) => {
    API.post(`mision/delete`, {
      id: id,
    })
      .then(({ state: { respuesta } }) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const [eliminar, setEliminar] = useState(false);

  const handleClickEliminar = (e = null) => {
    setEliminar(!eliminar);
    setId(e);
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
              <TableCell />
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell} key={key}>
                  <Tooltip
                    id="tooltip-top"
                    title="Editar"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Edit"
                      className={classes.tableActionButton}
                      onClick={() => handleClose(prop[0])}
                    >
                      <Edit
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    id="tooltip-top-start"
                    title="Eliminar"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Close"
                      className={classes.tableActionButton}
                      onClick={() => handleClickEliminar(prop[0])}
                    >
                      <Close
                        className={
                          classes.tableActionButtonIcon + " " + classes.close
                        }
                      />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Dialog open={open} handleClose={handleClose} id={id} />
      <DialogCustom
        open={eliminar}
        handleClose={handleClickEliminar}
        title="Eliminar Mision"
        buttonSubmit="Eliminar"
        maxWidth={false}
        id={id}
        onSubmit={() => deleteMision(id)}
        content={
          <Typography>
            ¿Estás seguro de que quieres eliminar a esta misión?
          </Typography>
        }
      />
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
