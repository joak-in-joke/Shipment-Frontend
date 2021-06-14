import React from "react";
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
import { Controller } from "react-hook-form";

const ShippingSection = ({ control, transportWatch, tipeWatch }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.rootSection}>
      Datos de envío
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Controller
            control={control}
            name="exportador"
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="exportadorLabel">Exportador</InputLabel>
                <Select
                  labelId="exportadorLabel"
                  value={value}
                  onChange={onChange}
                  label="Exportador"
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  <MenuItem value="agregar">Agregar Exportadores</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="importador"
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="importadorLabel">Importador</InputLabel>
                <Select
                  labelId="importadorLabel"
                  value={value}
                  onChange={onChange}
                  label="Importador"
                >
                  <MenuItem value="">
                    <em>Seleccionar</em>
                  </MenuItem>
                  <MenuItem value="agregar">Agregar Exportadores</MenuItem>
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
              />
            )}
          />
        </Grid>

        {(transportWatch === "LCL" || transportWatch === "FCL") && (
          <>
            {tipeWatch === "exportacion" && (
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
                          label="Tipo de documento"
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
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Controller
                    control={control}
                    name="contTipo"
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
                          label="Tipo"
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
