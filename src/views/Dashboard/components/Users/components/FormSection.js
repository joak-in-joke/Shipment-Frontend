import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const FormSection = ({ handleChange, data }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          value={data.apellido}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={7}>
        <TextField
          label="Correo"
          variant="outlined"
          name="mail"
          value={data.mail}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={5}>
        <TextField
          label="Contraseña"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          name="pass"
          value={data.pass}
          onChange={handleChange}
          className={classes.formControl}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          label="Teléfono"
          variant="outlined"
          name="telefono"
          value={data.telefono}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={2}>
        <TextField
          label="Cargo"
          variant="outlined"
          name="cargo"
          value={data.cargo}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={4}>
        <Select
          label="Tipo"
          variant="outlined"
          name="tipo"
          value={data.tipo}
          onChange={handleChange}
          className={classes.formControl}
        >
          <MenuItem value="">
            <em>Tipo de cargo</em>
          </MenuItem>
          <MenuItem value={1}>Empleado</MenuItem>
          <MenuItem value={2}>Cliente</MenuItem>
          <MenuItem value={3}>Aweonao</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={4}>
        <TextField
          label="Asesor"
          variant="outlined"
          name="asesor"
          value={data.asesor}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>

      <Grid item xs={7}>
        <TextField
          label="Rut"
          variant="outlined"
          name="rut"
          type="number"
          value={data.rut}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField
          label="DV"
          variant="outlined"
          name="dv"
          value={data.dv}
          onChange={handleChange}
          className={classes.formControl}
        />
      </Grid>
    </Grid>
  );
};

export default FormSection;
