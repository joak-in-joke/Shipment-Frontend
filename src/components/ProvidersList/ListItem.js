import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import EditModal from "./EditModal";
import DialogCustom from "components/Dialog/Dialog.js";

const useStyles = makeStyles((theme) => ({
  inline: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: "14px",
    color: "#4F4F4F",
    lineHeight: "24px",
  },
  textProvider: {
    fontSize: "18px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontWeight: "380",
  },
  textTitle: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: "bold",
  },
  accordionHeaderTop: {
    backgroundColor: "#2361E8",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  accordionHeaderBottom: {
    backgroundColor: "#33B8FF",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  accordionHeaderText: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "16px",
    color: "#FFFFFF",
    fontWeight: "300",
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px",
  },
  edit: {
    backgroundColor: "transparent",
    color: "#9c27b0",
    boxShadow: "none",
  },
  close: {
    backgroundColor: "transparent",
    color: "#f44336",
    boxShadow: "none",
  },
}));

const ItemList = ({
  nombre,
  pais,
  direccion,
  rut,
  email,
  nombre_contacto,
  cargo,
  telefono,
  email_contacto,
  banco,
  cuenta,
  tipo_cuenta,
  nombre_cuenta,
  email_cuenta,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [eliminar, setEliminar] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClickEliminar = () => {
    setEliminar(!eliminar);
  };

  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={nombre} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography className={classes.textProvider}>
                {nombre}&nbsp;
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
                    <ExpandMoreIcon className={classes.accordionHeaderText} />
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
                        País: {pais}
                      </Typography>
                      <Typography className={classes.text}>
                        Dirección: {direccion}
                      </Typography>
                      <Typography className={classes.text}>
                        RUT: {rut}
                      </Typography>
                      <Typography className={classes.text}>
                        Email: {email}
                      </Typography>
                    </Grid>
                    <Grid item xs className={classes.rightBox}>
                      <Typography className={classes.textTitle}>
                        Información de Contacto
                      </Typography>
                      <Grid>
                        <Typography className={classes.text}>
                          Nombre: {nombre_contacto}
                        </Typography>
                        <Typography className={classes.text}>
                          Cargo: {cargo}
                        </Typography>
                        <Typography className={classes.text}>
                          Teléfono: {telefono}
                        </Typography>
                        <Typography className={classes.text}>
                          Email: {email_contacto}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.inline}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon className={classes.accordionHeaderText} />
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
                    Banco: {banco}
                  </Typography>
                  <Typography className={classes.text}>
                    Número de Cuenta: {cuenta}
                  </Typography>
                  <Typography className={classes.text}>
                    Tipo de Cuenta: {tipo_cuenta}
                  </Typography>
                  <Typography className={classes.text}>
                    Nombre: {nombre_cuenta}
                  </Typography>
                  <Typography className={classes.text}>
                    Correo: {email_cuenta}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </React.Fragment>
          }
        />
        <EditModal
          open={open}
          handleClose={handleClickOpen}
          nombre={nombre}
          pais={pais}
          direccion={direccion}
          rut={rut}
          email={email}
          nombre_contacto={nombre_contacto}
          cargo={cargo}
          telefono={telefono}
          email_contacto={email_contacto}
          banco={banco}
          cuenta={cuenta}
          tipo_cuenta={tipo_cuenta}
          nombre_cuenta={nombre_cuenta}
          email_cuenta={email_cuenta}
        />
        <DialogCustom
          open={eliminar}
          handleClose={handleClickEliminar}
          title="Eliminar Proveedor"
          buttonSubmit="Eliminar"
          maxWidth={false}
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
