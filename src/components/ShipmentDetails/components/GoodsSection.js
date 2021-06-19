import React, { useState, useEffect } from "react";
import { useFieldArray, Controller, useFormContext } from "react-hook-form";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Add, Delete } from "@material-ui/icons";

const GoodsSectionRun = ({ isDisabled = true }) => {
  const classes = useStyles();
  const { control, getValues, setValue } = useFormContext(); // retrieve all hook methods
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mercancias",
  });
  const [valueCIF, setValueCIF] = useState(0);

  const calculateCif = () => {
    if (fields) {
      let total = 0;
      fields.map((field) => {
        if (!field.value || !field.secure || !field.flete) return 0;
        total =
          parseInt(total) +
          parseInt(field.value) +
          parseInt(field.secure) +
          parseInt(field.flete);
        setValueCIF(total);
        setValue("cif", total);
        return total;
      });
      if (total === isNaN) return 0;
      setValueCIF(total);
      setValue("cif", total);
    } else {
      setValueCIF(0);
    }
  };

  useEffect(() => {
    calculateCif();
    // eslint-disable-next-line
  }, [fields]);

  return (
    <Grid container className={classes.rootSectionGoods} spacing={2}>
      <Grid item xs={12} className={classes.headerSection}>
        Mercancias:
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
      </Grid>
      <Grid item xs={12}>
        {fields.map((field, index) => (
          <Grid
            container
            spacing={1}
            key={field.id}
            className={classes.containerItemsGoods}
          >
            <Grid item xs={2}>
              <Controller
                control={control}
                name={`mercancias.${index}.name`}
                defaultValue={getValues(`mercancias.${index}.name`)}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nombre"
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
                name={`mercancias.${index}.value`}
                defaultValue={getValues(`mercancias.${index}.value`)}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Valor"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">USD</InputAdornment>
                      ),
                    }}
                    className={classes.formControl}
                    disabled={isDisabled && true}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                control={control}
                name={`mercancias.${index}.flete`}
                defaultValue={getValues(`mercancias.${index}.flete`)}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Flete"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">USD</InputAdornment>
                      ),
                    }}
                    className={classes.formControl}
                    disabled={isDisabled && true}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                control={control}
                name={`mercancias.${index}.secure`}
                defaultValue={getValues(`mercancias.${index}.secure`)}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Seguro"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">USD</InputAdornment>
                      ),
                    }}
                    className={classes.formControl}
                    disabled={isDisabled && true}
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
                >
                  <Delete />
                </IconButton>
              </Grid>
            )}
          </Grid>
        ))}
        <Grid item xs={12} className={classes.totalSection}>
          Valor CIF: {valueCIF}
        </Grid>
      </Grid>
    </Grid>
  );
};

const GoodsSection = React.memo(GoodsSectionRun);

export default GoodsSection;
