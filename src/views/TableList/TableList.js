import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import Dialog from "./Dialog.js";

import { dataHeader } from "./dataExample";
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
  const history = useHistory();
  const [shipmentList, setShipmentList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selecteds, setSelecteds] = useState([]);

  const fetch = () => {
    API.get(`shipments`, {}).then(({ data: res }) => {
      setShipmentList(res.data);
      setIsLoading(false);
    });
  };

  const confirmDeleteShipments = () => {
    console.log(selecteds);
    API.post(`shipment/deleteMasive`, { id: selecteds }).then(() => {
      fetch();
      setOpenModal(false);
    });
  };

  const deleteShipments = (selected) => {
    setSelecteds(selected);
    setOpenModal(true);
  };

  useEffect(() => {
    fetch();
  }, []);

  const filterTable = (filtro, busqueda) => {
    if (busqueda)
      API.post(`shipments/filter`, {
        filtro: filtro,
        busqueda: busqueda,
      }).then((res) => {
        console.log(res.data)
        setShipmentList(res.data);
      });
  };

  const handleClickAddShipment = () => {
    history.push(`/admin/table/newshipment`);
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
                onClick={handleClickAddShipment}
              >
                Añadir
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            {!isLoading && (
              <Table
                tableHeaderColor="bussiness"
                dataHeader={dataHeader}
                tableData={shipmentList}
                filterTable={filterTable}
                fetch={fetch}
                deleteShipments={deleteShipments}
              />
            )}
          </CardBody>
        </Card>
      </GridItem>

      <Dialog
        open={openModal}
        submit={() => confirmDeleteShipments()}
        close={() => setOpenModal(false)}
        title="Confirmar eliminacion"
        content={`¿Estas seguro de eliminar estos embarques?`}
      />
    </GridContainer>
  );
}
