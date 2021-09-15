import React from "react";
import { Grid } from "@material-ui/core";

import GoodsSection from "./GoodsSection";
import GeneralSection from "./GeneralSection";
import ShippingSection from "./ShippingSection";
import DateSection from "./DateSection";
import TransbordSection from "./TransbordSection";
import useStyles from "../styles";

export const InfoView = ({ isEditting, reset, getValues }) => {
  const classes = useStyles();

  return (
    <>
      <GeneralSection isDisabled={!isEditting} />
      <ShippingSection isDisabled={!isEditting} reset={reset} getValues={getValues} />

      <Grid container spacing={0}>
        <Grid item xs={7} className={classes.containerGoods}>
          <TransbordSection isDisabled={!isEditting} />
        </Grid>
        <Grid item xs={5} className={classes.containerGoods}>
          <DateSection isDisabled={!isEditting} />
        </Grid>
      </Grid>
      <Grid className={classes.containerGoods}>
        <GoodsSection isDisabled={!isEditting} />
      </Grid>
    </>
  );
};
export default InfoView;
