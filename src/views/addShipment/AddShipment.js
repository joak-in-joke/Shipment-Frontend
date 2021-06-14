import React from "react";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";

const Index = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="bussiness2" className={classes.cardHeader}>
        <h4 className={classes.cardTitleWhite}>Añadir nuevo embarque</h4>
      </CardHeader>
      <CardBody>
        <Index />
      </CardBody>
    </Card>
  );
};

export default Index;
