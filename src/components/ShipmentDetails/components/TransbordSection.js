import React from "react";
import { Grid, IconButton, TextField } from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Add, Delete } from "@material-ui/icons";

const TransbordSection = ({ isDisabled = true }) => {
  const classes = useStyles();
  const { control, getValues } = useFormContext(); // retrieve all hook methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: "transbordos",
  });
  return (
    <Grid className={classes.rootSectionTransbord}>
      {!isDisabled && (
        <IconButton
          aria-label="add"
          onClick={() => append()}
          color="primary"
          size="small"
        >
          <Add /> <small>Añadir</small>
        </IconButton>
      )}
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
              defaultValue={getValues(`transbordos.${index}.puertoName`)}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Puerto de trasbordo"
                  variant="outlined"
                  className={classes.formControl}
                  disabled={isDisabled && true}
                />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              control={control}
              name={`transbordos.${index}.naveId`}
              defaultValue={getValues(`transbordos.${index}.naveId`)}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Valor"
                  variant="outlined"
                  type="number"
                  className={classes.formControl}
                  disabled={isDisabled && true}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <Controller
              control={control}
              name={`transbordos.${index}.date`}
              defaultValue={getValues(`transbordos.${index}.date`)}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Fecha trasbordo"
                  variant="outlined"
                  type="date"
                  className={classes.formControl}
                  disabled={isDisabled && true}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          {!isDisabled && (
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
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default TransbordSection;
