import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Controller, useFormContext } from "react-hook-form";
import API from "variables/api.js";

const ShippingSection = ({ isDisabled = true }) => {
  const classes = useStyles();
  const { control, watch } = useFormContext();
  const transportWatch = watch("transporte");
  const tipeWatch = watch("tipo");
  const [providers, setProviders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProviders = () => {
    API.get(`provider/all`).then(({ data: { resultado, getprovider } }) => {
      if (resultado) {
        setProviders(getprovider);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getProviders();
  }, []);

  return (
    <Grid className={classes.rootSection}>
      Datos de envío
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Controller
            control={control}
            name="exportador"
            defaultValue
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="exportadorLabel">Exportador</InputLabel>
                <Select
                  labelId="exportadorLabel"
                  value={value}
                  onChange={onChange}
                  disabled={isDisabled && true}
                  label="Exportador"
                  defaultValue
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  {isLoading
                    ? null
                    : providers.map(({ id, nombre }) => (
                        <MenuItem key={id} value={nombre}>
                          {nombre}
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="importador"
            defaultValue
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="importadorLabel">Importador</InputLabel>
                <Select
                  labelId="importadorLabel"
                  value={value}
                  onChange={onChange}
                  disabled={isDisabled && true}
                  label="Importador"
                  defaultValue
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  {isLoading
                    ? null
                    : providers.map(({ id, nombre }) => (
                        <MenuItem key={id} value={nombre}>
                          {nombre}
                        </MenuItem>
                      ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="operador"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Operador logistico"
                variant="outlined"
                value={value}
                onChange={onChange}
                disabled={isDisabled && true}
                className={classes.formControl}
              />
            )}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="agencia"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Agencia aduanas"
                variant="outlined"
                value={value}
                className={classes.formControl}
                onChange={onChange}
                disabled={isDisabled && true}
              />
            )}
          />
        </Grid>

        {(transportWatch === "LCL" || transportWatch === "FCL") && (
          <>
            {tipeWatch === "Exportacion" && (
              <Grid item xs={2}>
                <Controller
                  control={control}
                  name="reserva"
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Número de reserva"
                      variant="outlined"
                      value={value}
                      className={classes.formControl}
                      onChange={onChange}
                      disabled={isDisabled && true}
                    />
                  )}
                />
              </Grid>
            )}

            {transportWatch === "LCL" && (
              <>
                <Grid item xs={2}>
                  <Controller
                    control={control}
                    name="tipoDocumento"
                    defaultValue
                    render={({ field: { onChange, value } }) => (
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="tipoDocumentolabel">
                          Tipo de documento
                        </InputLabel>
                        <Select
                          labelId="tipoDocumentolabel"
                          value={value}
                          onChange={onChange}
                          disabled={isDisabled && true}
                          label="Tipo de documento"
                          defaultValue
                        >
                          <MenuItem value="">
                            <em>Seleccionar</em>
                          </MenuItem>
                          <MenuItem value="MBL">MBL</MenuItem>
                          <MenuItem value="HBL">HBL</MenuItem>
                          <MenuItem value="NBL">NBL</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="documento"
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Número de Documento"
                        variant="outlined"
                        value={value}
                        className={classes.formControl}
                        onChange={onChange}
                        disabled={isDisabled && true}
                      />
                    )}
                  />
                </Grid>
              </>
            )}

            {transportWatch === "FCL" && (
              <>
                <Grid item xs={2}>
                  <Controller
                    control={control}
                    name="depositoContenedores"
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Depósito de Contenedores"
                        variant="outlined"
                        value={value}
                        className={classes.formControl}
                        onChange={onChange}
                        disabled={isDisabled && true}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Controller
                    control={control}
                    name="contTipo"
                    defaultValue
                    render={({ field: { onChange, value } }) => (
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="contTipolabel">Tipo</InputLabel>
                        <Select
                          labelId="contTipolabel"
                          value={value}
                          onChange={onChange}
                          disabled={isDisabled && true}
                          label="Tipo"
                          defaultValue
                        >
                          <MenuItem value="">
                            <em>Seleccionar</em>
                          </MenuItem>
                          <MenuItem value="0">Sin container</MenuItem>
                          <MenuItem value="1">20’ Flat Rack</MenuItem>
                          <MenuItem value="2">20’ Open Top</MenuItem>
                          <MenuItem value="3">20’ Standard</MenuItem>
                          <MenuItem value="4">40’ Flat Rack</MenuItem>
                          <MenuItem value="5">40’ High Cube</MenuItem>
                          <MenuItem value="6">40’ NOR</MenuItem>
                          <MenuItem value="7">40’ Open Top</MenuItem>
                          <MenuItem value="8">40’ Reefer</MenuItem>
                          <MenuItem value="9">40’ Standard</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Controller
                    control={control}
                    name="sello"
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        label="Sello"
                        variant="outlined"
                        value={value}
                        className={classes.formControl}
                        onChange={onChange}
                        disabled={isDisabled && true}
                      />
                    )}
                  />
                </Grid>
              </>
            )}
          </>
        )}

        <Grid item>
          <Controller
            control={control}
            name="motonave"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Motonave"
                variant="outlined"
                value={value}
                className={classes.formControl}
                onChange={onChange}
                disabled={isDisabled && true}
              />
            )}
          />
        </Grid>

        <Grid item>
          <Controller
            control={control}
            name="viaje"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Viaje"
                variant="outlined"
                value={value}
                className={classes.formControl}
                onChange={onChange}
                disabled={isDisabled && true}
              />
            )}
          />
        </Grid>

        <Grid item>
          <Controller
            control={control}
            name="naviera"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Naviera"
                variant="outlined"
                value={value}
                className={classes.formControl}
                onChange={onChange}
                disabled={isDisabled && true}
              />
            )}
          />
        </Grid>

        {transportWatch === "LCL" && (
          <Grid item xs={4}>
            <Controller
              control={control}
              name="almacen"
              render={({ field: { onChange, value } }) => (
                <TextField
                  label="Almacen extraportuario"
                  variant="outlined"
                  value={value}
                  className={classes.formControl}
                  onChange={onChange}
                  disabled={isDisabled && true}
                />
              )}
            />
          </Grid>
        )}

        {transportWatch === "LCL" && (
          <>
            <Grid item xs={6}>
              <Controller
                control={control}
                name="contenedor"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="Número de Contenedor"
                    variant="outlined"
                    value={value}
                    className={classes.formControl}
                    onChange={onChange}
                    disabled={isDisabled && true}
                  />
                )}
              />
            </Grid>

            <Grid item xs={2}>
              <Controller
                control={control}
                name="bultos"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="Cantidad de bultos"
                    variant="outlined"
                    type="number"
                    value={value}
                    className={classes.formControl}
                    onChange={onChange}
                    disabled={isDisabled && true}
                  />
                )}
              />
            </Grid>

            <Grid item xs={2}>
              <Controller
                control={control}
                name="peso"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="Peso"
                    variant="outlined"
                    type="number"
                    value={value}
                    className={classes.formControl}
                    onChange={onChange}
                    disabled={isDisabled && true}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">kg</InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={2}>
              <Controller
                control={control}
                name="volumen"
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="Volumen"
                    variant="outlined"
                    type="number"
                    value={value}
                    className={classes.formControl}
                    onChange={onChange}
                    disabled={isDisabled && true}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">m³</InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ShippingSection;
