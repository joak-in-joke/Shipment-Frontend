import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
// core components
import DialogCustom from "components/Dialog/Dialog";

import API from "variables/api.js";

const styles = {
  line: {},
  formControl: {
    width: "100%",
  },
  checkboxArea: {
    display: "flex",
    alignItems: "center",
    justfiyContent: "center",
  },
  sumSeccion: {
    display: "flex",
    justfiyContent: "center",
    alignItems: "center",
    padding: "2px",
    marginTop: "25px",
    borderRadius: "4px",
    border: "1px solid #000000",
  },
};

const useStyles = makeStyles(styles);

export default function Modal({ open, handleClose, id, nombre }) {
  // const [users, setUsers] = useState([]);
  const classes = useStyles();

  const [state, setState] = useState({
    contenido: "",
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const editUser = () => {
    console.log(id);
    API.post(`mision/put`, {
      id: id,
      contenido: state.contenido,
    })
      .then(({ state: { resultado } }) => {
        if (resultado) {
          console.log(state);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <DialogCustom
        open={open}
        handleClose={handleClose}
        title="Editar Mision"
        maxWidth={true}
        buttonSubmit="Editar"
        onSubmit={editUser}
        content={
          <>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  label="Mision"
                  variant="outlined"
                  name="contenido"
                  defaultValue={state.contenido}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
            </Grid>
          </>
        }
      />
    </>
  );
}
