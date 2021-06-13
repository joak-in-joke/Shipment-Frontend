import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import API from "variables/api.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "./components/DialogUsers";
import Table from "./components/Table";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const IndexUsers = () => {
  const classes = useStyles();
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    tipo: "",
    nombre: "",
    apellido: "",
    rut: null,
    dv: "",
    email: "",
    estado: "",
    cargo: "",
    asesor: "",
    telefono: "",
    pass: "",
  });

  const [permission, setPermission] = useState({
    finanzas: false,
    misiones: false,
    superuser: false,
    admin: false,
    embarques: false,
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const getUsers = () => {
    API.get("users", {}).then(({ data: { resultado, users } }) => {
      if (resultado) {
        setUsers(users);
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const createUser = () => {
    API.post(`users/add`, {
      tipo: data.tipo,
      nombre: data.nombre,
      apellido: data.apellido,
      rut: data.rut,
      dv: data.dv,
      mail: data.email,
      cargo: data.cargo,
      asesor: data.asesor,
      telefono: data.telefono,
      pass: data.pass,
      permission: permission,
    }).then(() => {
      getUsers();
      setOpen(false);
    });
  };

  const handleModal = () => {
    setOpen(!open);
  };

  const toArray = (user = []) => {
    let usuario = [];
    user.map(({ id_usuario, nombre, apellido, telefono }) =>
      usuario.push([id_usuario, nombre, apellido, telefono])
    );
    return usuario;
  };

  return (
    <>
      <Card>
        <CardHeader color="bussiness2">
          <div className={classes.informationSecc}>
            <h4 className={classes.cardTitleWhite}>Cuentas</h4>
            <p className={classes.cardCategoryWhite}>
              El ultimo empleado creado fue el 16-Septiembre
            </p>
          </div>
          <Button
            className={classes.addButton}
            color="bussiness"
            onClick={handleModal}
          >
            {/* Se le entrega a onClick la funcion handleClose para que al presionar me cambie el estado de open */}
            Añadir
          </Button>
        </CardHeader>
        <CardBody>
          {!isLoading && (
            <Table
              tableHeaderColor="bussiness"
              tableHead={["ID", "Nombre", "Apellido", "telefono"]}
              tableData={toArray(users)}
              getUsers={getUsers}
            />
          )}
        </CardBody>
      </Card>

      <Dialog
        open={open}
        handleClose={handleModal}
        createUser={createUser}
        handleChange={handleChange}
        data={data}
        setData={setData}
        state={permission}
        setState={setPermission}
      />
    </>
  );
};

export default IndexUsers;
