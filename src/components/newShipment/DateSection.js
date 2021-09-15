import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import Autocomplete from 'components/Autocomplete/Autocomplete';
import API from "variables/api.js";

const DateSection = () => {
  const classes = useStyles();
  const [ports, setPorts] = useState(null);
  const { control } = useFormContext();

  const getPorts = () => {
    API.get(`port`).then(({ data: { resultado, ports } }) => {
      if (resultado) {
        console.log(ports)
        setPorts(ports);
      }
    });
  };

  useEffect(() => {
    getPorts();
  }, []);

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
              <Autocomplete
                options={ports}
                label="Puerto de embarque"
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
              <Autocomplete
                options={ports}
                label="Puerto de destino"
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
