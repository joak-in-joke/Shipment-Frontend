import React, { useState, useContext } from "react";
import { AuthContext } from "context/AuthProvider";

import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import DialogCustom from "components/Dialog/Dialog.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
  MenuItem,
  TextField,
  InputLabel,
  IconButton,
  InputAdornment,
  Input,
  Typography,
} from "@material-ui/core";

import avatar from "assets/img/logos/logo.jpeg";

const styles = {
  container: {
    left: "20%",
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
    position: "center",
    right: "5%",
    top: "0%",
    paddingbottom: "10%",
  },
};

const currencies = [
  {
    value: "1",
    label: "Admin",
  },
  {
    value: "2",
    label: "SuperUser",
  },
  {
    value: "3",
    label: "User",
  },
];

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const { userData } = useContext(AuthContext);
  console.log(userData);
  //const [currency, setCurrency] = useState("User");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [values, setValues] = React.useState({
    nombre: "",
    apellido: "",
    rut: null,
    email: "",
    telefono: "",
    estado: "",
    cargo: "",
    asesor: "",
    amount: "",
    password: "",
    password2: "",
    showPassword: false,
  });

  const [id, setId] = useState(null);
  const [editar, setEditar] = useState(false);
  const handleClickEditar = (e = null) => {
    setEditar(!editar);
    setId(e);
  };

  return (
    <div>
      <GridContainer className={classes.container}>
        <GridItem xs={10} sm={10} md={10}>
          <Card>
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
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre"
                    id="nombre"
                    name="nombre"
                    defaultValue={userData.nombre}
                    value={values.nombre}
                    onChange={handleChange("nombre")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Apellido"
                    id="apellido"
                    name="apellido"
                    defaultValue={userData.apellido}
                    value={values.apellido}
                    onChange={handleChange("apellido")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Rut"
                    id="rut"
                    name="rut"
                    defaultValue={userData.rut}
                    value={values.rut}
                    onChange={handleChange("rut")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Telefono"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Estado"
                    id="estado"
                    name="estado"
                    value={values.estado}
                    onChange={handleChange("estado")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Cargo"
                    id="cargo"
                    name="cargo"
                    value={values.cargo}
                    onChange={handleChange("cargo")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Asesor"
                    id="asesor"
                    name="asesor"
                    value={values.asesor}
                    onChange={handleChange("asesor")}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem item xs={12} sm={12} md={4}>
                  <TextField
                    id="standard-select-currency"
                    select
                    labelText="tipo Usuario"
                    //value={currency}
                    onChange={handleChange}
                    helperText="Selecciona un tipo"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <div className="div"></div>
                </GridItem>

                <GridItem
                  xs={12}
                  sm={12}
                  md={6}
                  className={clsx(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Contraseña
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    name={"password"}
                    onChange={handleChange("password")}
                  />
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  md={6}
                  className={clsx(classes.margin, classes.textField)}
                >
                  <InputLabel htmlFor="standard-adornment-password">
                    Repite Contraseña
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password2}
                    name={"password2"}
                    onChange={handleChange("password2")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                className={classes.Button}
                color="bussiness"
                onClick={() => handleClickEditar()}
                //habria que crear una consulta para obtener el id del usuario que esta en la base de datos
                //se me ocurre que lo mejor es guardarlo en el Signin
              >
                Editar perfil
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <DialogCustom
        open={editar}
        handleClose={handleClickEditar}
        title="Editar Usuario"
        buttonSubmit="Editar"
        maxWidth={false}
        onSubmit={console.log("eliminatres")}
        content={
          <Typography>
            ¿Estás seguro de que quieres editar tus datos de usuario?
          </Typography>
        }
      />
    </div>
  );
}
