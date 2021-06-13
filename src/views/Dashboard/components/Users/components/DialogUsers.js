import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// core components
import DialogCustom from "components/Dialog/Dialog";
import SwitchSection from "./SwitchSection";
import FormSection from "./FormSection";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Modal({
  open,
  handleClose,
  createUser,
  data,
  handleChange,
  state,
  setState,
}) {
  const classes = useStyles();

  const handleCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <DialogCustom
        open={open}
        handleClose={handleClose}
        title="Crear nueva cuenta"
        maxWidth={true}
        onSubmit={createUser}
        content={
          <Grid container spacing={4}>
            <Grid item xs={10} className={classes.line}>
              <FormSection handleChange={handleChange} data={data} />
            </Grid>
            <Grid item xs={2}>
              <SwitchSection handleChange={handleCheckbox} state={state} />
            </Grid>
          </Grid>
        }
      />
    </>
  );
}
