import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import DoneAll from "@material-ui/icons/DoneAll";
import Done from "@material-ui/icons/Done";
import DoubleArrow from "@material-ui/icons/DoubleArrow";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "components/newUserDialog/newUserDialog";

// import { bugs, website, server } from "variables/general.js";
// import { bugs, website } from "variables/general.js";
import API from "variables/api.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [missions, setMissions] = useState([]);
  const [users, setUsers] = useState([]);
  // const [website, setWebsite] = useState({})

  useEffect(() => {
    API.get(`mision`, {}).then((res) => {
      console.log(res.data);
      setMissions(res.data);
    });

    API.get("user", {}).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  console.log(users);
  const toArray = (user) => {
    let usuario = [];
    user.map(({ id_usuario, nombre, apellido, telefono }) =>
      usuario.push([id_usuario, nombre, apellido, telefono])
    );
    return usuario;
  };
  const toParse = (misiones) => {
    let updated = [];
    misiones.map(({ id, contenido }) => updated.push([id, contenido]));
    return updated;
  };
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <Card>
            <CardHeader color="bussiness" stats icon>
              <CardIcon color="bussiness">
                <Done />
              </CardIcon>
              <p className={classes.cardCategory}>Embarques</p>
              <h3 className={classes.cardTitle}>
                5 <small>activos</small>
              </h3>
            </CardHeader>
            <CardFooter stats />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <Card>
            <CardHeader color="bussiness" stats icon>
              <CardIcon color="bussiness">
                <DoneAll />
              </CardIcon>
              <p className={classes.cardCategory}>Embarques</p>
              <h3 className={classes.cardTitle}>
                4 <small>finalizados</small>
              </h3>
            </CardHeader>
            <CardFooter stats />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="bussiness" stats icon>
              <CardIcon color="bussiness">
                <DoubleArrow />
              </CardIcon>
              <p className={classes.cardCategory}>Embarques</p>
              <h3 className={classes.cardTitle}>
                6 <small>totales</small>
              </h3>
            </CardHeader>
            <CardFooter stats />
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="bussiness2">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Embarques semanales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                incremento en los embarques.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado hace 5 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="bussiness2">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Embarques anuales</h4>
              <p className={classes.cardCategory}>
                Cantidad de embarques por cada mes.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado primer dia del mes
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="bussiness2">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Valor de precio</h4>
              <p className={classes.cardCategory}>Valor de precio empresa</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado primer dia del mes
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="bussiness2">
              <div className={classes.informationSecc}>
                <h4 className={classes.cardTitleWhite}>Misiones</h4>
                <p className={classes.cardCategoryWhite}>
                  Agenda nuevas misiones o tareas al equipo.
                </p>
              </div>
              <Button
                className={classes.addButton}
                color="bussiness"
                onClick={handleClose}
              >
                {/* Se le entrega a onClick la funcion handleClose para que al presionar me cambie el estado de open */}
                Añadir
              </Button>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="bussiness"
                tableHead={["ID", "Mision"]}
                tableData={toParse(missions)}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
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
                onClick={handleClose}
              >
                {/* Se le entrega a onClick la funcion handleClose para que al presionar me cambie el estado de open */}
                Añadir
              </Button>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="bussiness"
                tableHead={["ID", "Nombre", "Apellido", "telefono"]}
                tableData={toArray(users)}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      <Dialog open={open} handleClose={handleClose} />
    </div>
  );
}
