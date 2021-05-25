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

export default function EditModal({
  open,
  handleClose,
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
}) {
  const classes = useStyles();
  return (
    <DialogCustom
      open={open}
      handleClose={handleClose}
      title="Editar proveedor"
      maxWidth={false}
      buttonSubmit="Editar"
      content={
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Proveedor"
                variant="outlined"
                name="proveedor"
                defaultValue={nombre}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="País"
                variant="outlined"
                name="pais"
                defaultValue={pais}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="RUT"
                variant="outlined"
                name="rut"
                defaultValue={rut}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Dirección"
                variant="outlined"
                name="direccion"
                defaultValue={direccion}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                defaultValue={email}
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
                defaultValue={nombre_contacto}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="Cargo"
                variant="outlined"
                name="cargo"
                defaultValue={cargo}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="Teléfono"
                variant="outlined"
                name="telefono"
                defaultValue={telefono}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Email del Contacto"
                variant="outlined"
                name="emailContacto"
                defaultValue={email_contacto}
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
                defaultValue={banco}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Número de Cuenta"
                variant="outlined"
                name="numeroCuenta"
                defaultValue={cuenta}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Tipo de Cuenta"
                variant="outlined"
                name="tipoCuenta"
                defaultValue={tipo_cuenta}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombreCuenta"
                defaultValue={nombre_cuenta}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                name="emailCuenta"
                defaultValue={email_cuenta}
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
