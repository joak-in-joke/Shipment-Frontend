import React from "react";
import {
  Select,
  MenuItem,
  Grid,
  TextField,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";
import { Controller, useFormContext } from "react-hook-form";

const GeneralSection = ({ isDisabled = true }) => {
  const classes = useStyles();
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  return (
    <Grid className={classes.rootSection}>
      Información general
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Controller
            control={control}
            name="tipo"
            defaultValue="importacion"
            render={({ field }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="tipoLabel">Tipo de operación</InputLabel>
                <Select
                  {...field}
                  labelId="tipoLabel"
                  label="Tipo de operación"
                  disabled={isDisabled ? true : false}
                  error={errors.tipo}
                >
                  <MenuItem value="importacion">Importación</MenuItem>
                  <MenuItem value="exportacion">Exportación</MenuItem>
                  <MenuItem value="triangulacion">Triangulación</MenuItem>
                  <MenuItem value="otros">Otros</MenuItem>
                </Select>
              </FormControl>
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="transporte"
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="opLabel">Tipo de transporte</InputLabel>
                <Select
                  labelId="opLabel"
                  label="Tipo de transporte"
                  disabled={isDisabled && true}
                  onChange={onChange}
                  value={value}
                  error={errors.transporte}
                >
                  <MenuItem value="FCL">FCL</MenuItem>
                  <MenuItem value="LCL">LCL</MenuItem>
                  {/* <MenuItem value="aereo">aéreo</MenuItem>
                    <MenuItem value="terrestre">terrestre</MenuItem> */}
                </Select>
              </FormControl>
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="id"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="ID"
                variant="outlined"
                value={value}
                onChange={onChange}
                disabled={isDisabled && true}
                type="number"
                error={errors.id}
                className={classes.formControl}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="referencia"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="Referencia"
                variant="outlined"
                value={value}
                error={errors.referencia}
                className={classes.formControl}
                onChange={onChange}
                disabled={isDisabled && true}
              />
            )}
            rules={{ required: true }}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="estado"
            defaultValue
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="estado">Estado</InputLabel>
                <Select
                  labelId="estado"
                  label="Estado"
                  value={value}
                  onChange={onChange}
                  disabled={isDisabled && true}
                  defaultValue
                >
                  <MenuItem value="origen">En Origen</MenuItem>
                  <MenuItem value="abordo">Abordo</MenuItem>
                  <MenuItem value="llegada">Llegada</MenuItem>
                  <MenuItem value="finalizado">Finalizado</MenuItem>
                </Select>{" "}
              </FormControl>
            )}
          />
        </Grid>

        <Grid item xs={2}>
          <Controller
            control={control}
            name="incoterm"
            defaultValue
            render={({ field: { onChange, value } }) => (
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Incoterm">Incoterm</InputLabel>
                <Select
                  labelId="Incoterm"
                  label="Incoterm"
                  value={value}
                  onChange={onChange}
                  disabled={isDisabled && true}
                  defaultValue
                >
                  <MenuItem value="EXW">EXW</MenuItem>
                  <MenuItem value="FCA">FCA</MenuItem>
                  <MenuItem value="FAS">FAS</MenuItem>
                  <MenuItem value="FOB">FOB</MenuItem>
                  <MenuItem value="CPT">CPT</MenuItem>
                  <MenuItem value="CIP">CIP</MenuItem>
                  <MenuItem value="CFR">CFR</MenuItem>
                  <MenuItem value="CIF">CIF</MenuItem>
                  <MenuItem value="DAP">DAP</MenuItem>
                  <MenuItem value="DPU">DPU</MenuItem>
                  <MenuItem value="DDP">DDP</MenuItem>
                </Select>{" "}
              </FormControl>
            )}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GeneralSection;
