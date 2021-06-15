import React from "react";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import { Add } from "@material-ui/icons";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Button from "components/CustomButtons/Button.js";
import GoodsSection from "components/newShipment/GoodsSection";
import GeneralSection from "components/newShipment/GeneralSection";
import ShippingSection from "components/newShipment/ShippingSection";
import DateSection from "components/newShipment/DateSection";
import TransbordSection from "components/newShipment/TransbordSection";

import useStyles from "assets/jss/material-dashboard-react/views/newShipment";

const Index = () => {
  const classes = useStyles();
  const { control, handleSubmit, watch } = useForm();
  const transportWatch = watch("transporte");
  const tipeWatch = watch("tipo");
  const transbordWatch = watch("transbordo", false);
  const goodsWatch = watch("mercancias");

  const calculateCif = () => {
    if (goodsWatch) {
      let total = 0;
      goodsWatch.map((field) => {
        if (!field.value || !field.secure || !field.flete) return 0;
        total =
          parseInt(total) +
          parseInt(field.value) +
          parseInt(field.secure) +
          parseInt(field.flete);
        return total;
      });
      if (total === isNaN) return 0;
      return total;
    } else {
      return 0;
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Card>
      <CardHeader color="bussiness2" className={classes.cardHeader}>
        <h4 className={classes.cardTitleWhite}>Añadir nuevo embarque</h4>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <GeneralSection control={control} />
          <ShippingSection
            control={control}
            transportWatch={transportWatch}
            tipeWatch={tipeWatch}
          />

          <Grid container spacing={0}>
            <Grid item xs={7} className={classes.containerGoods}>
              <TransbordSection
                control={control}
                transbordWatch={transbordWatch}
              />
            </Grid>
            <Grid item xs={5} className={classes.containerGoods}>
              <DateSection control={control} transbordWatch={transbordWatch} />
            </Grid>
          </Grid>
          <Grid className={classes.containerGoods}>
            <GoodsSection control={control} calculateCif={calculateCif} />
          </Grid>

          <Grid className={classes.buttonContainer}>
            <Button
              className={classes.addButton}
              startIcon={<Add />}
              color="bussiness"
              type="submit"
            >
              Crear
            </Button>
          </Grid>
        </form>
      </CardBody>
    </Card>
  );
};

export default Index;
