import React, { useEffect, useState } from "react";
import { useFieldArray, Controller, useFormContext } from "react-hook-form";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Add, Delete } from "@material-ui/icons";

const GoodsSection = () => {
  const classes = useStyles();
  const [valueCIF, setValueCIF] = useState(0);
  const { control, watch, setValue } = useFormContext();
  const goodsWatch = watch("mercancias");
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mercancias",
  });

  const calculateCif = () => {
    if (fields) {
      let total = 0;
      fields.map((field) => {
        total =
          parseInt(total) +
          parseInt(field.value) +
          parseInt(field.secure) +
          parseInt(field.flete);
        setValueCIF(total);
        setValue("cif", total);
        return null;
      });
    } else {
      setValueCIF(0);
    }
  };

  useEffect(() => {
    calculateCif();
    // eslint-disable-next-line
  }, [goodsWatch]);

  return (
    <Grid container className={classes.rootSectionGoods} spacing={2}>
      <Grid item xs={12} className={classes.headerSection}>
        Mercancias:
        <IconButton
          aria-label="add"
          onClick={() => append({ value: 0, secure: 0, flete: 0 })}
          color="primary"
          size="small"
        >
          <Add /> <small>Añadir</small>
        </IconButton>
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
                render={({ field: { onChange, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    label="Nombre"
                    variant="outlined"
                    className={classes.formControl}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                control={control}
                name={`mercancias.${index}.value`}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    label="Valor"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">USD</InputAdornment>
                      ),
                    }}
                    className={classes.formControl}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                control={control}
                name={`mercancias.${index}].flete`}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    label="Flete"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">USD</InputAdornment>
                      ),
                    }}
                    className={classes.formControl}
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                control={control}
                name={`mercancias.${index}.secure`}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    onChange={onChange}
                    value={value}
                    label="Seguro"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">USD</InputAdornment>
                      ),
                    }}
                    className={classes.formControl}
                  />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton
                aria-label="delete"
                onClick={() => remove(index)}
                color="primary"
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12} className={classes.totalSection}>
          Valor CIF: {valueCIF}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GoodsSection;
