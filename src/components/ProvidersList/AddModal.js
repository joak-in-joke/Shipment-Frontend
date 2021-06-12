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

export default function AddModal({
  open,
  handleClose,
  createProvider,
  data,
  handleChange,
}) {
  const classes = useStyles();

  return (
    <DialogCustom
      open={open}
      handleClose={handleClose}
      title="Añadir nuevo proveedor"
      maxWidth={false}
      onSubmit={createProvider}
      content={
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Proveedor"
                variant="outlined"
                name="nombre"
                value={data.nombre}
                onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="País"
                variant="outlined"
                name="pais"
                value={data.pais}
                onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="RUT"
                variant="outlined"
                name="rut"
                value={data.rut}
                onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Dirección"
                variant="outlined"
                name="direccion"
                value={data.direccion}
                onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={data.email}
                onChange={handleChange}
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
                //value={data}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="Cargo"
                variant="outlined"
                name="cargo_contacto"
                value={data.cargo_contacto}
                onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={2}>
              <TextField
                label="Teléfono"
                variant="outlined"
                name="telefono_contacto"
                value={data.telefono_contacto}
                onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Email del Contacto"
                variant="outlined"
                name="email_contacto"
                value={data.email_contacto}
                onChange={handleChange}
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
                name="banco_cuenta"
                value={data.banco_cuenta}
                onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Número de Cuenta"
                variant="outlined"
                name="numeroCuenta"
                //value={data.cuenta_contacto[0].n_cuenta}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Tipo de Cuenta"
                variant="outlined"
                name="tipoCuenta"
                //value={data.cuenta_contacto[0].tipo_cuenta}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombreCuenta"
                //value={data.cuenta_contacto[0].nombre}
                //onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Email"
                variant="outlined"
                //value={data.cuenta_contacto[0].email}
                name="emailCuenta"
                // onChange={handleChange}
                className={classes.formControl}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      }
    />
  );
}
