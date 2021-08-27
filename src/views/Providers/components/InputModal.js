import React from "react";
import { Grid, TextField } from "@material-ui/core";
import useStyles from "./styles";

const InputModal = ({ data, handleChange, isEditting = false }) => {
  const classes = useStyles();
  const {
    nombre,
    pais,
    rut,
    direccion,
    email,
    telefono,
    nombre_contacto,
    cargo,
    //telefono_contacto,
    //email_contacto,
    banco,
    n_cuenta,
    tipo_de_cuenta,
    nombre_empresa,
    email_cuentabanco,
    rut_cuentabanco,
  } = data;
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TextField
          label="Proveedor"
          variant="outlined"
          name="nombre"
          defaultValue={isEditting ? nombre : null}
          value={nombre}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          label="País"
          variant="outlined"
          name="pais"
          defaultValue={isEditting ? pais : null}
          value={pais}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          label="RUT"
          variant="outlined"
          name="rut"
          defaultValue={isEditting ? rut : null}
          value={rut}
          onChange={handleChange}
          className={classes.formControl}
          type="number"
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          label="Teléfono"
          variant="outlined"
          name="telefono"
          defaultValue={isEditting ? telefono : null}
          value={telefono}
          onChange={handleChange}
          className={classes.formControl}
          type="number"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Dirección"
          variant="outlined"
          name="direccion"
          defaultValue={isEditting ? direccion : null}
          value={direccion}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          defaultValue={isEditting ? email : null}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={12}>
        Información de Contacto
      </Grid>

      <Grid item xs={3}>
        <TextField
          label="Nombre del Contacto"
          variant="outlined"
          name="nombre_contacto"
          defaultValue={isEditting ? nombre_contacto : null}
          value={nombre_contacto}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          label="Cargo"
          variant="outlined"
          name="cargo"
          value={cargo}
          defaultValue={isEditting ? cargo : null}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      {/* <Grid item xs={2}>
        <TextField
          label="Teléfono"
          variant="outlined"
          name="telefono_contacto"
          value={telefono_contacto}
          defaultValue={isEditting ? telefono_contacto : null}
          onChange={handleChange}
          className={classes.formControl}
          type="number"
        />
      </Grid>

      <Grid item xs={5}>
        <TextField
          label="Email del Contacto"
          variant="outlined"
          name="email_contacto"
          defaultValue={isEditting ? email_contacto : null}
          value={email_contacto}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid> */}

      <Grid item xs={12}>
        Datos Bancarios
      </Grid>

      <Grid item xs={4}>
        <TextField
          label="Banco"
          variant="outlined"
          name="banco"
          value={banco}
          defaultValue={isEditting ? banco : null}
          onChange={handleChange}
          className={classes.formControl}
          type="number"
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          label="Número de Cuenta"
          variant="outlined"
          name="n_cuenta"
          value={n_cuenta}
          defaultValue={isEditting ? nombre_empresa : null}
          onChange={handleChange}
          className={classes.formControl}
          type="number"
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          label="Tipo de Cuenta"
          variant="outlined"
          name="tipo_de_cuenta"
          value={tipo_de_cuenta}
          defaultValue={isEditting ? tipo_de_cuenta : null}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={3}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre_empresa"
          defaultValue={isEditting ? nombre_empresa : null}
          value={nombre_empresa}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          label="Email"
          variant="outlined"
          name="email_cuentabanco"
          value={email_cuentabanco}
          defaultValue={isEditting ? email_cuentabanco : null}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          label="RUT"
          variant="outlined"
          name="rut_cuentabanco"
          defaultValue={isEditting ? rut_cuentabanco : null}
          value={rut_cuentabanco}
          onChange={handleChange}
          className={classes.formControl}
          type="number"
        />
      </Grid>
    </Grid>
  );
};

export default InputModal;
