import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogCustom from "components/Dialog/Dialog.js";
import { Grid, TextField } from "@material-ui/core";

const styles = {
  formControl: {
    width: "100%",
  },
};

const useStyles = makeStyles(styles);

export default function AddModal({ open, handleClose }) {
  const classes = useStyles();
  return (
    <DialogCustom
      open={open}
      handleClose={handleClose}
      title="Añadir nuevo proveedor"
      maxWidth={false}
      content={
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Proveedor"
                variant="outlined"
                name="proveedor"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="País"
                variant="outlined"
                name="pais"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="RUT"
                variant="outlined"
                name="rut"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Dirección"
                variant="outlined"
                name="direccion"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={10}>
              Información de Contacto
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Nombre del Contacto"
                variant="outlined"
                name="nombreContacto"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="Cargo"
                variant="outlined"
                name="cargo"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="Teléfono"
                variant="outlined"
                name="telefono"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Email del Contacto"
                variant="outlined"
                name="emailContacto"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={10}>
              Datos Bancarios
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Banco"
                variant="outlined"
                name="banco"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Número de Cuenta"
                variant="outlined"
                name="numeroCuenta"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Tipo de Cuenta"
                variant="outlined"
                name="tipoCuenta"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombreCuenta"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                name="emailCuenta"
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      }
    />
  );
}
