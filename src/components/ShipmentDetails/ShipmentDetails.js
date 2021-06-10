import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { parseDate } from "./variables/parse";
import Button from "components/CustomButtons/Button.js";
import API from "variables/api.js";
import useStyles from "./styles";
import { InfoView } from "./components/InfoView";

export default function ShipmentDetails({ id }) {
  const classes = useStyles();
  const [shipmentData, setShipmentData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditting, setIsEditting] = useState(false);

  useEffect(() => {
    API.get(`shipment/${id}`, {})
      .then(({ data: { resultado, data } }) => {
        if (resultado) {
          data.etd = parseDate(data.etd);
          data.eta = parseDate(data.eta);
          data.fecha_transb = parseDate(data.fecha_transb);
          setShipmentData(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    if (!isLoading) setIsEditting(true);
    // eslint-disable-next-line
  }, [shipmentData]);

  const handleShipmentData = (item, value, nested = undefined) => {
    setShipmentData({
      ...shipmentData,
      ...(nested
        ? {
            [nested]: {
              ...shipmentData[nested],
              [item]: value,
            },
          }
        : {
            [item]: value,
          }),
    });
  };

  const deleteShipment = () => {
    console.log("delete shipment: ", id);
  };

  const updateShipment = () => {
    shipmentData.id = id;
    console.log("update shipment", shipmentData);
  };

  if (shipmentData === null || isLoading === true) return null;
  return (
    <>
      <Grid container spacing={3} className={classes.headerBox}>
        <Button
          className={classes.Button}
          color="primary"
          disabled={!isEditting}
          onClick={() => updateShipment()}
        >
          <Edit className={classes.icon} />
          Confirmar edición
        </Button>

        <Button color="bussiness">
          <Delete className={classes.icon} onClick={() => deleteShipment()} />
          Eliminar embarque
        </Button>
      </Grid>

      <InfoView
        handleShipmentData={handleShipmentData}
        shipmentData={shipmentData}
      />
    </>
  );
}
