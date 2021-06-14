import React from "react";
import { Grid, IconButton, Switch, TextField } from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Controller, useFieldArray } from "react-hook-form";
import { Add, Delete } from "@material-ui/icons";

const TransbordSection = ({ control, transbordWatch }) => {
  const classes = useStyles();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "transbordos",
  });
  return (
    <Grid className={classes.rootSectionTransbord}>
      <Controller
        control={control}
        name="transbordo"
        render={({ field: { onChange, value } }) => (
          <>
            <Switch size="small" checked={value} onChange={onChange} />
            Trasbordo?
          </>
        )}
      />
      {transbordWatch && (
        <>
          <IconButton
            aria-label="add"
            onClick={() => append()}
            color="primary"
            size="small"
          >
            <Add /> <small>Añadir</small>
          </IconButton>
          {fields.map((field, index) => (
            <Grid
              container
              spacing={1}
              key={field.id}
              className={classes.containerItemsTransbord}
            >
              <Grid item xs={4}>
                <Controller
                  control={control}
                  name={`transbordos.${index}.puertoName`}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Puerto de trasbordo"
                      variant="outlined"
                      className={classes.formControl}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={3}>
                <Controller
                  control={control}
                  name={`transbordos.${index}.naveId`}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Valor"
                      variant="outlined"
                      type="number"
                      className={classes.formControl}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  control={control}
                  name={`transbordos.${index}.date`}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Fecha trasbordo"
                      variant="outlined"
                      type="date"
                      className={classes.formControl}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="delete"
                  onClick={() => remove(index)}
                  color="primary"
                  size="small"
                >
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
};

export default TransbordSection;
