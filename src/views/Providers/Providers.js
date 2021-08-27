import React, { useState, useEffect } from "react";
// @material-ui/core components
import Add from "@material-ui/icons/Add";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AddModal from "./components/AddModal";
import List from "./components/List";
import API from "variables/api.js";
import useStyles from "./styles";

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [providers, setProviders] = useState(null);
  const [data, setData] = useState({
    nombre: "",
    pais: "",
    rut: "",
    direccion: "",
    email: "",
    telefono: "",
    nombre_contacto: "",
    cargo: "",
    banco: "",
    n_cuenta: "",
    tipo_de_cuenta: "",
    nombre_empresa: "",
    email_cuentabanco: "",
    rut_cuentabanco: "",
  });

  const createProvider = () => {
    API.post(`provider/add`, {
      nombre: data.nombre,
      pais: data.pais,
      rut: data.rut,
      direccion: data.direccion,

      email: data.email,
      telefono: data.telefono,

      nombre_contacto: data.nombre_contacto,
      cargo: data.cargo,

      n_cuenta: data.n_cuenta,
      email_cuentabanco: data.email_cuentabanco,
      rut_cuentabanco: data.rut_cuentabanco,
      nombre_empresa: data.nombre_empresa,
      banco: data.banco,
      tipo_de_cuenta: data.tipo_de_cuenta,
    })
      .then(() => {
        getProviders();
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    getProviders();
  }, []);

  const getProviders = () => {
    API.get(`provider`, {}).then(({ data: { allProviders, resultado } }) => {
      if (allProviders) {
        setProviders(allProviders);
        console.log(allProviders);
      }
    });
  };

  const deleteProvider = (id) => {
    API.post(`provider/delete`, {
      id: id,
    })
      .then(({ data: { resultado } }) => {
        if (resultado) {
          getProviders();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="bussiness2" className={classes.cardHeader}>
            <div className={classes.textHeader}>
              <h4 className={classes.cardTitleWhite}>Lista de proveedores</h4>
              <p className={classes.cardCategoryWhite}>
                Tiene 4 proveedores registrados
              </p>
            </div>
            <div className={classes.buttonHeader}>
              <Button
                variant="contained"
                className={classes.addButton}
                startIcon={<Add />}
                color="bussiness"
                onClick={() => handleModal()}
              >
                Añadir
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <List
              providers={providers}
              deleteProvider={deleteProvider}
              createProvider={createProvider}
              getProviders={getProviders}
            />
          </CardBody>
        </Card>
      </GridItem>

      <AddModal
        open={open}
        handleClose={handleModal}
        createProvider={createProvider}
        data={data}
        setData={setData}
        handleChange={handleChange}
      />
    </GridContainer>
  );
}
