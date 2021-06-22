import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import {
  TripOrigin as Origin,
  FlightTakeoff as OnBoard,
  FlightLand as Coming,
  FiberManualRecord as Finished,
  DateRangeTwoTone,
} from "@material-ui/icons";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import IndexUsers from "./components/Users/IndexUsers";
import IndexMissions from "./components/Misions/IndexMissions";
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
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.get(`shipment/state`, {}).then(({ data: { resultado, data } }) => {
      if (resultado) {
        console.log(data);
        setData({
          active: data.Activos,
          onBoard: data.Abordos,
          finished: data.Finalizados,
          coming: data.Llegadas,
          Anual: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            series: [data.anualGraph],
          },
        });
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return null;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardHeader color="bussiness" stats icon>
              <CardIcon color="bussiness">
                <Origin />
              </CardIcon>
              <p className={classes.cardCategory}>Embarques</p>
              <h3 className={classes.cardTitle}>
                {data.active} <small>en origen</small>
              </h3>
            </CardHeader>
            <CardFooter stats />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardHeader color="bussiness" stats icon>
              <CardIcon color="bussiness">
                <OnBoard />
              </CardIcon>
              <p className={classes.cardCategory}>Embarques</p>
              <h3 className={classes.cardTitle}>
                {data.onBoard} <small>abordo</small>
              </h3>
            </CardHeader>
            <CardFooter stats />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardHeader color="bussiness" stats icon>
              <CardIcon color="bussiness">
                <Coming />
              </CardIcon>
              <p className={classes.cardCategory}>Embarques</p>
              <h3 className={classes.cardTitle}>
                {data.coming} <small>en llegada</small>
              </h3>
            </CardHeader>
            <CardFooter stats />
          </Card>
        </GridItem>
        <GridItem xs={12} sm={3} md={3}>
          <Card>
            <CardHeader color="bussiness" stats icon>
              <CardIcon color="bussiness">
                <Finished />
              </CardIcon>
              <p className={classes.cardCategory}>Embarques</p>
              <h3 className={classes.cardTitle}>
                {data.finished} <small>finalizado</small>
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
                data={data.Anual}
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
          <IndexUsers />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <IndexMissions />
        </GridItem>
      </GridContainer>
    </div>
  );
}
