import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Button from "components/CustomButtons/Button.js";
import TimelineCustom from "components/Timeline/Timeline.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  optionsArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "initial",
  },
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
    height: "40px",
  },
  finishButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "#000000",
    height: "40px",
  },
  finishArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "24px",
  },
}));

const opt = [
  { value: 1, label: "barco" },
  { value: 2, label: "tren" },
  { value: 3, label: "avion" },
  { value: 4, label: "camion" },
  { value: 5, label: "evento" },
  { value: 6, label: "comentario" },
];

const comentarios = [
  { id: 1, date: "10/6/21", title: "Prueba 1", text: "Prueba 1" },
  { id: 2, date: "15/6/21", title: "Prueba 2", text: "Prueba 2" },
  { id: 3, date: "29/6/21", title: "Prueba 3", text: "Prueba 3" },
  { id: 4, date: "30/6/21", title: "panchito", text: "probando" },
  { id: 4, date: "30/6/21", title: "xxxxx", text: "asd" },
  { id: 4, date: "30/6/21", title: "aa", text: "efd" },
  { id: 4, date: "30/6/21", title: "eeee", text: "sad" },
  { id: 4, date: "30/6/21", title: "uuu", text: "232" },
  { id: 4, date: "30/6/21", title: "ooo", text: "we" },
  { id: 4, date: "30/6/21", title: "panchaaaito", text: "23" },
];

export default function TimelineView() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={8}>
        <TimelineCustom comentarys={comentarios} />
      </Grid>
      <Grid item xs={4} className={classes.optionsArea}>
        <Grid container>
          <Grid item xs={10}>
            <CustomInput
              labelText="Nombre comentario"
              id="name"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <CustomSelect
              labelText="Icono"
              id="icon"
              options={opt}
              formControlProps={{
                fullWidth: true,
              }}
            />
          </Grid>
        </Grid>
        <CustomInput
          labelText="Elige fecha"
          id="date"
          type="date"
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
          id="text"
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
        >
          Añadir nuevo comentario
        </Button>
        <Paper elevation={3} className={classes.finishArea}>
          <CustomInput
            labelText="Elige fecha finalización"
            id="dateFinish"
            type="date"
            inputProps={{
              type: "date",
              defaultValue: "2017-05-24",
            }}
            formControlProps={{
              fullWidth: true,
            }}
          />
          <Button
            className={classes.finishButton}
            startIcon={<DoneAllIcon />}
            color="secondary"
          >
            Finalizar embarque
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}
