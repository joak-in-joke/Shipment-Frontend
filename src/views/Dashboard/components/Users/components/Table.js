import React, { useState, useContext } from "react";
import { AuthContext } from "context/AuthProvider";
import PropTypes from "prop-types";

import md5 from "md5";
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

import EditDialog from "./EditDialog";
import DialogDelete from "components/Dialog/Dialog.js";

import API from "variables/api.js";
const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { userData } = useContext(AuthContext);
  const { tableHead, tableData, tableHeaderColor } = props;
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [eliminar, setEliminar] = useState(false);
  const [data, setData] = useState({
    tipo: "",
    nombre: "",
    apellido: "",
    rut: null,
    dv: "",
    email: "",
    estado: "",
    cargo: "",
    asesor: "",
    telefono: "",
    pass: "",
  });
  const [permission, setPermission] = useState({
    finanzas: false,
    misiones: false,
    superuser: false,
    admin: false,
    embarques: false,
  });

  const handleClose = (e = null) => {
    console.log(`users/${e}`);
    setOpen(!open);
    setId(e);

    API.get(`users/${e}`, {}).then(({ data: { respuesta, data } }) => {
      if (respuesta) {
        setData({
          tipo: data.tipo,
          nombre: data.nombre,
          apellido: data.apellido,
          rut: data.rut,
          dv: data.dv,
          email: data.mail,
          estado: data.estado,
          cargo: data.cargo,
          asesor: data.asesor,
          telefono: data.telefono,
          pass: data.pass,
        });
        setPermission({
          finanzas: data.permUser.perm_finanza,
          misiones: data.permUser.perm_misiones,
          superuser: data.permUser.perm_superuser,
          admin: data.permUser.perm_admin,
        });
        setOpen(!open);
      }
    });
  };

  const deleteUser = (id) => {
    API.post(`users/delete`, {
      id: id,
    })
      .then(() => {
        props.getUsers();
        setEliminar(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editUser = () => {
    console.log(id);
    API.post(`users/update`, {
      id: id,
      tipo: data.tipo,
      nombre: data.nombre,
      apellido: data.apellido,
      rut: data.rut,
      dv: data.dv,
      mail: data.mail,
      cargo: data.cargo,
      asesor: data.asesor,
      telefono: data.telefono,
      pass: md5(data.pass),
      permission: permission,
    }).then(() => {
      props.getUsers();
      setOpen(false);
    });
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

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
                  {userData.permisos.perm_admin && (
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
                  )}
                  {userData.id !== prop[0] && userData.permisos.perm_admin && (
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
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <EditDialog
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        id={id}
        editUser={editUser}
        setData={setData}
        data={data}
        state={permission}
        setState={setPermission}
      />
      <DialogDelete
        open={eliminar}
        handleClose={handleClickEliminar}
        title="Eliminar Usuario"
        buttonSubmit="Eliminar"
        maxWidth={false}
        id={id}
        onSubmit={() => deleteUser(id)}
        content={
          <Typography>
            ¿Estás seguro de que quieres eliminar a este Usuario?
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
