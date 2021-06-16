import React, { useState, useContext } from "react";
import { AuthContext } from "context/AuthProvider";
import { Grid } from "@material-ui/core";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import DialogCustom from "components/Dialog/Dialog.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { TextField, Typography } from "@material-ui/core";

import avatar from "assets/img/logos/logo.jpeg";

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  Kewea: {
    color: "#000000",
  },
  perfil: {
    width: "50%",
    "@media (max-width: 1200px)": {
      width: "100%",
    },
  },
  line: {
    //display: "grid",
    //width: "100%",
  },
  formText: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  Button: {
    backgroundColor: "#2361E8",
    color: "#FFFFFF",
  },
  avatarImage: {
    position: "absolute",
    right: "5%",
    top: "0%",
    paddingbottom: "10%",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const { userData } = useContext(AuthContext);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = React.useState({
    nombre: "",
    apellido: "",
    rut: null,
    mail: "",
    telefono: "",
    cargo: "",
    asesor: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  //const [id, setId] = useState(null);
  const [editar, setEditar] = useState(false);
  const [cambiar, setCambiar] = useState(false);
  const handleClickEditar = (e = null) => {
    setEditar(!editar);
    //setId(e);
  };

  const handleClickCambiar = (e = null) => {
    setCambiar(!cambiar);
    //setId(e);
  };

  // const updateProfile = () => {
  //   API.post(`users/update`, {
  //     nombre: values.nombre,
  //     apellido: values.apellido,
  //     rut: values.rut,
  //     dv: values.dv,
  //     mail: values.email,
  //     cargo: values.cargo,
  //     asesor: values.asesor,
  //     telefono: values.telefono,
  //   }).then(() => {
  //     getUsers();
  //   });
  // };

  return (
    <div className={classes.container}>
      <Card className={classes.perfil}>
        <CardHeader color="bussiness">
          <CardAvatar profile className={classes.avatarImage}>
            <a
              href="#emprendedoreschilelogo"
              onClick={(e) => e.preventDefault()}
            >
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <h4 className={classes.cardTitleWhite}>
            Nombre: {userData.nombre} {userData.apellido}
          </h4>
          <p className={classes.cardCategoryWhite}>RUT: {userData.rut} </p>
        </CardHeader>
        <CardBody>
          <Grid container className={classes.formText} spacing={2}>
            <Grid item xs>
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombre"
                defaultValue={userData.nombre}
                onChange={handleChange("nombre")}
                fullWidth="true"
              />
            </Grid>
            <Grid item xs>
              <TextField
                label="Apellido"
                variant="outlined"
                name="apellido"
                defaultValue={userData.apellido}
                onChange={handleChange("apellido")}
                fullWidth="true"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.formText} spacing={2}>
            <Grid item xs>
              <TextField
                label="Rut"
                variant="outlined"
                name="rut"
                defaultValue={userData.rut}
                onChange={handleChange("rut")}
                fullWidth="true"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.formText} spacing={2}>
            <Grid item xs>
              <TextField
                label="Email"
                variant="outlined"
                name="mail"
                defaultValue={userData.mail}
                onChange={handleChange("mail")}
                fullWidth="true"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.formText} spacing={2}>
            <Grid item xs>
              <TextField
                label="Teléfono"
                variant="outlined"
                name="telefono"
                defaultValue={userData.telefono}
                onChange={handleChange("telefono")}
                fullWidth="true"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.formText} spacing={2}>
            <Grid item xs>
              <TextField
                label="Cargo"
                variant="outlined"
                name="cargo"
                defaultValue={userData.cargo}
                onChange={handleChange("cargo")}
                fullWidth="true"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.formText} spacing={2}>
            <Grid item xs>
              <TextField
                label="Asesor"
                variant="outlined"
                name="asesor"
                defaultValue={userData.asesor}
                onChange={handleChange("asesor")}
                fullWidth="true"
              />
            </Grid>
          </Grid>
          <Button
            className={classes.Button}
            color="bussiness"
            onClick={() => handleClickEditar()}
            //habria que crear una consulta para obtener el id del usuario que esta en la base de datos
            //se me ocurre que lo mejor es guardarlo en el Signin
          >
            Editar perfil
          </Button>
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                id="outlined-old-password-input"
                label="Contraseña actual"
                className={classes.textField}
                type="password"
                margin="normal"
                name="actual-password"
                variant="outlined"
                fullWidth="true"
                value={values.password}
                onChange={handleChange("password")}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="outlined-new-password-input"
                label="Contraseña nueva"
                className={classes.textField}
                type="password"
                margin="normal"
                name="newPassword"
                variant="outlined"
                fullWidth="true"
                autoComplete="new-password"
                onChange={handleChange("newPassword")}
              />
            </Grid>
            <Grid item xs>
              <TextField
                label="Reintroducir contraseña nueva"
                className={classes.textField}
                type="password"
                margin="normal"
                name="confirmNewPassword"
                variant="outlined"
                fullWidth="true"
                autoComplete="new-password"
                //onChange={handleChange("password")}
              />
            </Grid>
          </Grid>
          <Button
            className={classes.Button}
            color="bussiness"
            onClick={() => handleClickCambiar()}
            //habria que crear una consulta para obtener el id del usuario que esta en la base de datos
            //se me ocurre que lo mejor es guardarlo en el Signin
          >
            Cambiar contraseña
          </Button>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>

      <DialogCustom
        open={editar}
        handleClose={handleClickEditar}
        title="Editar Usuario"
        buttonSubmit="Editar"
        maxWidth="sm"
        onSubmit={console.log("eliminatres")}
        content={
          <Typography>
            ¿Estás seguro de que quieres editar tus datos de usuario?
          </Typography>
        }
      />

      <DialogCustom
        open={cambiar}
        handleClose={handleClickCambiar}
        title="Cambiar tu Contraseña"
        buttonSubmit="Cambiar"
        maxWidth="sm"
        onSubmit={console.log("cambiatres")}
        content={
          <Typography>
            ¿Estás seguro de que quieres cambiar tu contraseña?
          </Typography>
        }
      />
    </div>
  );
}
