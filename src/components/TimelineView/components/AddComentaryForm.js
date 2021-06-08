import React from "react";
import { Grid } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import options from "../options.js";
import useStyles from "../styles";

export const AddComentaryForm = ({
  addComentary,
  newComentaryValues,
  setNewComentaryValues,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setNewComentaryValues({
      ...newComentaryValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (newComentaryValues.title === "" || newComentaryValues.content === "")
      return null;
    addComentary();
  };

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <CustomInput
            labelText="Nombre comentario"
            id="title"
            name="title"
            onChange={(e) => handleChange(e)}
            value={newComentaryValues.title}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <CustomSelect
            labelText="Icono"
            id="icon"
            name="icon"
            options={options}
            onChange={(e) => handleChange(e)}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </Grid>
      </Grid>
      <CustomInput
        labelText="Elige fecha"
        id="date"
        name="date"
        type="date"
        value={newComentaryValues.date}
        onChange={(e) => handleChange(e)}
        inputProps={{
          type: "date",
          defaultValue: "2017-05-24",
        }}
        formControlProps={{
          fullWidth: true,
        }}
      />
      <CustomInput
        labelText="Texto comentario"
        id="content"
        name="content"
        value={newComentaryValues.content}
        onChange={(e) => handleChange(e)}
        inputProps={{
          multiline: true,
          rowsMax: "4",
        }}
        formControlProps={{
          fullWidth: true,
        }}
      />
      <Button
        className={classes.addButton}
        startIcon={<Add />}
        color="bussiness"
        onClick={onSubmit}
      >
        Añadir nuevo comentario
      </Button>
    </>
  );
};

export default AddComentaryForm;
