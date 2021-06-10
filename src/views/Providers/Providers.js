import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Add from "@material-ui/icons/Add";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import List from "components/ProvidersList/List";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import AddModal from "components/ProvidersList/AddModal";
import API from "variables/api.js";
import styles from "./styles";

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getProviders();
  }, []);

  const getProviders = () => {
    API.get(`provider`, {}).then(({ data: { proveedores, resultado } }) => {
      if (proveedores) {
        setProviders(proveedores);
        console.log(proveedores);
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

  const createProvider = (id) => {
    API.post(`provider/add`, {
      nombre: "nombre",
      pais: "pais",
      rut: 22222,
      direccion: "dirr",

      email: "email",
      telefono: 3232323,

      nombre_proveedor: "nombre proveeodr",
      cargo: "cargo",
      correo: "correo",
      fono: 23234234,

      n_cuenta: 2323,
      buzon: "buzon",
      rutt: 232323,
      banco: "banco",
      tipo_cuenta: "tipo",
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
            />
          </CardBody>
        </Card>
      </GridItem>

      <AddModal
        open={open}
        handleClose={handleModal}
        createProvider={createProvider}
      />
    </GridContainer>
  );
}
