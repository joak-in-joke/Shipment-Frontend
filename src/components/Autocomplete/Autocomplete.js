/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog({
  options,
  label,
  startValue,
  onChange,
  className,
  creatable = true,
  disabled = false
}) {
  const [value, setValue] = React.useState(startValue);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      nombre: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    nombre: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      nombre: dialogValue.nombre,
    });
    onChange({
      nombre: dialogValue.nombre,
    });

    handleClose();
  };

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                nombre: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              nombre: newValue.inputValue,
            });
          } else {
            setValue(newValue);
            onChange(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          if(creatable)  
            if (params.inputValue !== "") {
                filtered.push({
                inputValue: params.inputValue,
                nombre: `Añadir "${params.inputValue}"`,
                });
            }
          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={options}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.nombre;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.nombre}
        freeSolo
        disabled={disabled}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            variant="outlined"
            className={className}
            disabled={disabled}
          />
        )}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Añadir nuevo {label}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Si no encuentas el/la {label} puede añadirlo acontinuacion
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={dialogValue.nombre}
            onChange={(event) =>
              setDialogValue({ ...dialogValue, nombre: event.target.value })
            }
            label="nombre"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={() => handleSubmit()} color="primary">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
