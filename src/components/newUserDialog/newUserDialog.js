import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  Grid,
  TextField,
  InputLabel,
  FormControl,
} from "@material-ui/core";
// core components
import DialogCustom from "components/Dialog/Dialog";

const styles = {
  line: {},
  formControl: {
    width: "100%",
  },
  checkboxArea: {
    display: "flex",
    alignItems: "center",
    justfiyContent: "center",
  },
  sumSeccion: {
    display: "flex",
    justfiyContent: "center",
    alignItems: "center",
    padding: "2px",
    marginTop: "25px",
    borderRadius: "4px",
    border: "1px solid #000000",
  },
};

const useStyles = makeStyles(styles);

export default function Modal({ open, handleClose }) {
  const classes = useStyles();
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      valorTotal:
        parseInt(state.valor) +
        parseInt(state.valorFlete) +
        parseInt(state.valorSeguro),
    }); // eslint-disable-next-line
  }, [state.valor, state.valorFlete, state.valorSeguro]);

  return (
    <>
      <DialogCustom
        open={open}
        handleClose={handleClose}
        title="Crear nueva cuenta"
        maxWidth={true}
        content={
          <>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  name="name"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Apellido"
                  variant="outlined"
                  name="lastname"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  label="Rut"
                  variant="outlined"
                  name="rut"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  label="Correo"
                  variant="outlined"
                  name="email"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  label="Teléfono"
                  variant="outlined"
                  name="phone"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={2}>
                <TextField
                  label="Cargo"
                  variant="outlined"
                  name="cargo"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  label="Contraseña"
                  variant="outlined"
                  name="password"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={5}>
                <TextField
                  label="Confirmar Contraseña"
                  variant="outlined"
                  name="confirmPassword"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Dirección"
                  variant="outlined"
                  name="address"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="countryLabel">Nacionalidad</InputLabel>
                  <Select
                    labelId="countryLabel"
                    name="country"
                    value={state.transporte}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Selecciona nacionalidad</em>
                    </MenuItem>
                    <MenuItem value="asd">aaa</MenuItem>
                    <MenuItem value="asd">aaa</MenuItem>
                    <MenuItem value="asd">aa</MenuItem>
                    <MenuItem value="cccc">bb</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="comuneLabel">Comuna</InputLabel>
                  <Select
                    labelId="comuneLabel"
                    name="comune"
                    value={state.transporte}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Selecciona comuna</em>
                    </MenuItem>
                    <MenuItem value="asd">aaa</MenuItem>
                    <MenuItem value="asd">aaa</MenuItem>
                    <MenuItem value="asd">aa</MenuItem>
                    <MenuItem value="cccc">bb</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </>
        }
      />
    </>
  );
}
