import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Add, Delete } from "@material-ui/icons";

const GoodsSection = ({ control, calculateCif, goodsWatch }) => {
  const classes = useStyles();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mercancias",
  });

  return (
    <Grid container className={classes.rootSectionGoods} spacing={2}>
      <Grid item xs={12} className={classes.headerSection}>
        Mercancias:
        <IconButton
          aria-label="add"
          onClick={() => append()}
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
                render={({ field }) => (
                  <TextField
                    {...field}
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
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                control={control}
                name={`mercancias.${index}.flete`}
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
                  />
                )}
              />
            </Grid>
            <Grid item xs={3}>
              <Controller
                control={control}
                name={`mercancias.${index}.secure`}
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
          Valor CIF: {calculateCif()}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GoodsSection;
