import React from "react";
import { Grid, IconButton, Switch, TextField } from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Add, Delete } from "@material-ui/icons";

const TransbordSection = () => {
  const classes = useStyles();
  const { control, watch } = useFormContext();
  const transbordWatch = watch("transbordo", false);
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
            onClick={() =>
              append({ puertoName: "", naveId: 0, fecha: "8/06/2021" })
            }
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
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
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
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="naveID"
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
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
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
