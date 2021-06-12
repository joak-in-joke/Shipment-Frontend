import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
// core components
import DialogCustom from "components/Dialog/Dialog";

const styles = {
  line: {},
  formControl: {
    width: "100%",
    margin: "50px",
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

export default function Modal({
  open,
  handleClose,
  createMision,
  state,
  handleChange2,
}) {
  const classes = useStyles();

  return (
    <>
      <DialogCustom
        open={open}
        handleClose={handleClose}
        title="Crear nueva Mision"
        maxWidth={true}
        onSubmit={createMision}
        content={
          <>
            <Grid container className={classes.line} spacing={1}>
              <Grid item xs={8}>
                <TextField
                  label="Mision"
                  variant="outlined"
                  name="contenido"
                  value={state.contenido}
                  onChange={handleChange2}
                  className={classes.formControl}
                />
              </Grid>

              {/* <Grid item xs={5}>
                <TextField
                  label="Confirmar Contraseña"
                  variant="outlined"
                  name="confirmPassword"
                  // onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Dirección"
                  variant="outlined"
                  name="address"
                 // onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="countryLabel">Nacionalidad</InputLabel>
                  <Select
                    labelId="countryLabel"
                    name="country"
                   // value={state.transporte}
                    //onChange={handleChange}
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
                    //value={state.transporte}
                    //onChange={handleChange}
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
              </Grid> */}
            </Grid>
          </>
        }
      />
    </>
  );
}
