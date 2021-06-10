import React, { useState } from "react";
import {
  Grid,
  Tooltip,
  IconButton,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import API from "variables/api.js";
import { ExpandMore, Edit, Close } from "@material-ui/icons";
import DialogCustom from "components/Dialog/Dialog.js";
import EditModal from "./EditModal";
import useStyles from "./styles";

const ItemList = ({ id, info, deleteProvider, getProviders }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const [data, setData] = useState(info);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const editProvider = () => {
    API.post(`provider/add`, {
      id,
      nombre: data.nombre,
      pais: data.pais,
      rut: data.rut,
      direccion: data.direccion,

      email: data.email,
      telefono: data.telefono,

      nombre_proveedor: data.nombre_contacto,
      cargo: data.cargo_contacto,
      correo: data.email_contacto,
      fono: data.telefono_contacto,

      n_cuenta: data.numero_cuenta,
      buzon: data.email_cuenta,
      rutt: data.rut,
      banco: data.banco_cuenta,
      tipo_cuenta: data.tipo_cuenta,
    })
      .then(({ data: { resultado } }) => {
        if (resultado) {
          getProviders();
          setOpen(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickEliminar = () => {
    setEliminar(!eliminar);
  };

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={data.nombre} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography className={classes.textProvider}>
                {data.nombre}&nbsp;
                <Tooltip
                  id="tooltip-top"
                  title="Editar"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                  onClick={handleClickOpen}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
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
                  onClick={handleClickEliminar}
                >
                  <IconButton
                    aria-label="Close"
                    className={classes.tableActionButton}
                  >
                    <Close
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Accordion className={classes.inline}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMore className={classes.accordionHeaderText} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.accordionHeaderTop}
                >
                  <Typography
                    component="span"
                    className={classes.accordionHeaderText}
                  >
                    Datos de Empresa
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.inline}>
                  <Grid container spacing={3}>
                    <Grid item xs>
                      <Typography className={classes.text}>
                        País: {data.pais}
                      </Typography>
                      <Typography className={classes.text}>
                        Dirección: {data.direccion}
                      </Typography>
                      <Typography className={classes.text}>
                        RUT: {data.rut}
                      </Typography>
                      <Typography className={classes.text}>
                        Email: {data.email}
                      </Typography>
                    </Grid>
                    <Grid item xs className={classes.rightBox}>
                      <Typography className={classes.textTitle}>
                        Información de Contacto
                      </Typography>
                      <Grid>
                        <Typography className={classes.text}>
                          Nombre: {data.nombre_contacto}
                        </Typography>
                        <Typography className={classes.text}>
                          Cargo: {data.cargo_contacto}
                        </Typography>
                        <Typography className={classes.text}>
                          Teléfono: {data.telefono_contacto}
                        </Typography>
                        <Typography className={classes.text}>
                          Email: {data.email_contacto}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.inline}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMore className={classes.accordionHeaderText} />
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className={classes.accordionHeaderBottom}
                >
                  <Typography
                    component="span"
                    className={classes.accordionHeaderText}
                  >
                    Datos Bancarios
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.inline}>
                  <Typography className={classes.text}>
                    Banco: {data.banco_cuenta}
                  </Typography>
                  <Typography className={classes.text}>
                    Número de Cuenta: {data.numero_cuenta}
                  </Typography>
                  <Typography className={classes.text}>
                    Tipo de Cuenta: {data.tipo_cuenta}
                  </Typography>
                  <Typography className={classes.text}>
                    Nombre: {data.nombre_cuenta}
                  </Typography>
                  <Typography className={classes.text}>
                    Correo: {data.email_cuenta}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </React.Fragment>
          }
        />
        <EditModal
          open={open}
          handleClose={handleClickOpen}
          data={data}
          handleChange={handleChange}
          editProvider={editProvider}
        />
        <DialogCustom
          open={eliminar}
          handleClose={handleClickEliminar}
          title="Eliminar Proveedor"
          buttonSubmit="Eliminar"
          maxWidth={false}
          onSubmit={() => deleteProvider(id)}
          content={
            <Typography>
              ¿Estás seguro de que quieres eliminar a este proveedor?
            </Typography>
          }
        />
      </ListItem>
    </React.Fragment>
  );
};

export default ItemList;
