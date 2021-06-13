import React from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch,
} from "@material-ui/core";

export default function SwitchesGroup({ state, handleChange }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Permisos de usuario</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.finanzas}
              onChange={handleChange}
              name="finanzas"
            />
          }
          label="Ver finanzas"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.misiones}
              onChange={handleChange}
              name="misiones"
            />
          }
          label="Ver misiones"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.superuser}
              onChange={handleChange}
              name="superuser"
            />
          }
          label="Super-user"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.admin}
              onChange={handleChange}
              name="admin"
            />
          }
          label="Admin"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.embarques}
              onChange={handleChange}
              name="embarques"
            />
          }
          label="Ver embarques"
        />
      </FormGroup>
      <FormHelperText>Asignar con cuidado</FormHelperText>
    </FormControl>
  );
}
