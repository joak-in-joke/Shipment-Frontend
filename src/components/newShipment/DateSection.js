import React from "react";
import { Grid, TextField } from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Controller } from "react-hook-form";

const DateSection = ({ control }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.rootSection}>
      Información de fechas
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="etd"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="ETD"
                type="date"
                variant="outlined"
                value={value}
                onChange={onChange}
                className={classes.formControl}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="puertoETD"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Puerto de embarque"
                variant="outlined"
                value={value}
                onChange={onChange}
                className={classes.formControl}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="eta"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="ETA"
                type="date"
                variant="outlined"
                value={value}
                onChange={onChange}
                className={classes.formControl}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name="puertoETA"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Puerto de destino"
                variant="outlined"
                value={value}
                onChange={onChange}
                className={classes.formControl}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name="destino"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Lugar destino"
                variant="outlined"
                value={value}
                onChange={onChange}
                className={classes.formControl}
              />
            )}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DateSection;
