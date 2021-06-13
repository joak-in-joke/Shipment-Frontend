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
  handleChange,
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
                  value={state}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
            </Grid>
          </>
        }
      />
    </>
  );
}
