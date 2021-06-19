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
import { useForm, Controller } from "react-hook-form";

import API from "variables/api.js";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
  const { userData, setUserData } = useContext(AuthContext);
  const { control, handleSubmit } = useForm();
  const {
    control: controlPass,
    handleSubmit: handleSubmitPass,
    watch,
  } = useForm();

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const [values, setValues] = useState({
    nombre: userData.nombre,
    apellido: userData.apellido,
    rut: userData.rut,
    dv: userData.dv,
    mail: userData.mail,
    telefono: userData.telefono,
    cargo: userData.cargo,
    asesor: userData.asesor,
    password: "",
    newPassword: "",
  });

  // const [id, setId] = useState(null);
  const [editar, setEditar] = useState(false);
  const [cambiar, setCambiar] = useState(false);
  const handleClickEditar = (e = null) => {
    setEditar(!editar);
    //setId(e);
  };

  const handleClickCambiar = (e = null) => {
    setCambiar(!cambiar);
    //  setId(e);
  };

  const updateProfile = () => {
    const payload = {
      id: userData.id,
      nombre: values.nombre,
      apellido: values.apellido,
      rut: values.rut,
      dv: values.dv,
      mail: values.email,
      cargo: values.cargo,
      asesor: values.asesor,
      telefono: values.telefono,
    };
    API.post(`users/update`, payload).then(() => {
      setUserData(payload);
      setEditar(!editar);
      console.log(values);
    });
  };

  const updatePassword = () => {
    API.post(`users/updatepassword`, {
      id: userData.id,
      password: values.password,
      newPassword: values.newPassword,
    }).then(() => {
      setCambiar(!cambiar);
      console.log("bien esho");
    });
  };

  const onSubmit = (data) => {
    setValues(data);
    setEditar(!editar);
  };

  const onSubmitPassword = (data) => {
    setCambiar(!cambiar);
    setValues({
      ...values,
      password: data.password,
      newPassword: data.newPassword,
    });
  };
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
          <form key={1} onSubmit={handleSubmit(onSubmit)}>
            <Grid container className={classes.formText} spacing={2}>
              <Grid item xs>
                <Controller
                  name="nombre"
                  control={control}
                  defaultValue={userData.nombre}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Nombre"
                      variant="outlined"
                      defaultValue={userData.nombre}
                      value={value}
                      onChange={onChange}
                      type="text"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Nombre requerido" }}
                />
              </Grid>
              <Grid item xs>
                <Controller
                  name="apellido"
                  defaultValue={userData.apellido}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Apellido"
                      variant="outlined"
                      defaultValue={userData.apellido}
                      value={value}
                      onChange={onChange}
                      type="text"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Apellido requerido" }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.formText} spacing={2}>
              <Grid item xs={10}>
                <Controller
                  name="rut"
                  defaultValue={userData.rut}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Rut"
                      variant="outlined"
                      defaultValue={userData.rut}
                      value={value}
                      onChange={onChange}
                      type="text"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Rut requerido" }}
                />
              </Grid>
              <Grid item xs={2} spacing={2}>
                <Controller
                  name="dv"
                  defaultValue={userData.dv}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="DV"
                      variant="outlined"
                      defaultValue={userData.dv}
                      value={value}
                      onChange={onChange}
                      type="text"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "DV requerido" }}
                />
              </Grid>
            </Grid>

            <Grid container className={classes.formText} spacing={2}>
              <Grid item xs>
                <Controller
                  name="mail"
                  defaultValue={userData.mail}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Email"
                      variant="outlined"
                      defaultValue={userData.mail}
                      value={value}
                      onChange={onChange}
                      type="text"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Email requerido" }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.formText} spacing={2}>
              <Grid item xs>
                <Controller
                  name="telefono"
                  defaultValue={userData.telefono}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Teléfono"
                      variant="outlined"
                      defaultValue={userData.telefono}
                      value={value}
                      onChange={onChange}
                      type="phone"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Teléfono requerido" }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.formText} spacing={2}>
              <Grid item xs>
                <Controller
                  name="cargo"
                  defaultValue={userData.cargo}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Cargo"
                      variant="outlined"
                      defaultValue={userData.cargo}
                      value={value}
                      onChange={onChange}
                      type="text"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Cargo requerido" }}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.formText} spacing={2}>
              <Grid item xs>
                <Controller
                  name="asesor"
                  defaultValue={userData.asesor}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Asesor"
                      variant="outlined"
                      defaultValue={userData.asesor}
                      value={value}
                      onChange={onChange}
                      type="text"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Asesor requerido" }}
                />
              </Grid>
            </Grid>
            <Button className={classes.Button} color="bussiness" type="submit">
              Editar perfil
            </Button>
            <DialogCustom
              open={editar}
              handleClose={handleClickEditar}
              title="Editar Usuario"
              buttonSubmit="Editar"
              maxWidth="sm"
              isSubmitting={true}
              onSubmit={() => updateProfile()}
              //onSubmit={updateProfile}
              content={
                <Typography>
                  ¿Estás seguro de que quieres editar tus datos de usuario?
                </Typography>
              }
            />
          </form>
          <form key={2} onSubmit={handleSubmitPass(onSubmitPassword)}>
            <Grid container spacing={2}>
              <Grid item xs>
                <Controller
                  name="password"
                  defaultValue=""
                  control={controlPass}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Contraseña actual"
                      variant="outlined"
                      value={value}
                      className={classes.textField}
                      onChange={onChange}
                      type="password"
                      margin="normal"
                      autoComplete="current-password"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Contraseña antigua requerida" }}
                />
              </Grid>
              <Grid item xs>
                <Controller
                  name="newPassword"
                  defaultValue=""
                  control={controlPass}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Nueva contraseña"
                      variant="outlined"
                      value={value}
                      className={classes.textField}
                      onChange={onChange}
                      type="password"
                      margin="normal"
                      autoComplete="new-password"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{ required: "Contraseña nueva requerida" }}
                />
              </Grid>
              <Grid item xs>
                <Controller
                  name="reintroduceNewPassword"
                  defaultValue=""
                  control={controlPass}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      label="Reintroducir nueva contraseña"
                      variant="outlined"
                      className={classes.textField}
                      onChange={onChange}
                      type="password"
                      margin="normal"
                      value={value}
                      autoComplete="new-password"
                      error={!!error}
                      helperText={error ? error.message : null}
                      fullWidth="true"
                    />
                  )}
                  rules={{
                    required: "Contraseña nueva requerida",
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "Las contraseñas deben coincidir",
                  }}
                />
              </Grid>
            </Grid>
            <Button className={classes.Button} color="bussiness" type="submit">
              Cambiar contraseña
            </Button>
            <DialogCustom
              open={cambiar}
              handleClose={handleClickCambiar}
              title="Cambiar tu Contraseña"
              buttonSubmit="Cambiar"
              maxWidth="sm"
              isSubmitting={true}
              onSubmit={() => updatePassword()}
              content={
                <Typography>
                  ¿Estás seguro de que quieres cambiar tu contraseña?
                </Typography>
              }
            />
          </form>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
