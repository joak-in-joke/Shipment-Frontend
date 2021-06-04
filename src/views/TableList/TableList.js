import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Add from "@material-ui/icons/Add";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/TableCustom.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { dataHeader } from "./dataExample";
import Modal from "./Modal";
import API from "variables/api.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [shipmentList, setShipmentList] = useState({});

  useEffect(() => {
    API.get(`shipment`, {}).then((res) => {
      setShipmentList(res.data.allEmbarques);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="bussiness2" className={classes.cardHeader}>
            <div className={classes.textHeader}>
              <h4 className={classes.cardTitleWhite}>Embarques externos</h4>
              <p className={classes.cardCategoryWhite}>
                Tiene 65 embarques registrados
              </p>
            </div>
            <div className={classes.buttonHeader}>
              <Button
                className={classes.addButton}
                startIcon={<Add />}
                color="bussiness"
                onClick={handleClickOpen}
              >
                Añadir
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            {shipmentList.length > 1 && (
              <Table
                tableHeaderColor="bussiness"
                dataHeader={dataHeader}
                tableData={shipmentList}
              />
            )}
          </CardBody>
        </Card>
      </GridItem>

      <Modal open={open} handleClose={handleClose} />
    </GridContainer>
  );
}
