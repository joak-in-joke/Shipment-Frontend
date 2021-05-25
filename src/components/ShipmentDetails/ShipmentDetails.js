import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid, makeStyles, Box } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DetailsPaper from "./DetailsPaper";
import API from "variables/api.js";

const useStyles = makeStyles((styles) => ({
  shipmentTitle: {
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "26px",
    paddingLeft: 5,
    paddingRight: 5,
  },
  inline: {
    display: "flex",
    flexDirection: "column",
  },
  GridRow: {
    paddingBottom: "3px",
  },
  tableActionButton: {
    width: "35px",
    height: "35px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "25px",
    height: "25px",
  },
  edit: {
    backgroundColor: "transparent",
    color: "#9c27b0",
    boxShadow: "none",
  },
}));

export default function ShipmentDetails() {
  const classes = useStyles();
  const params = new URLSearchParams(useLocation().search);
  const id = params.get("id");
  const medioTransporte = "Avión";
  const transbordo = false;
  const tipoOperacion = "Exportación";
  const [open, setOpen] = useState(false);
  const [shipmentData, setShipmentData] = useState({});

  useEffect(() => {
    API.get(`embarques/${id}`).then((res) => {
      //console.log(res.data);
      setShipmentData(res.data);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {shipmentData && (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.shipmentTitle}>
                {shipmentData.id}{" "}
                <Tooltip
                  id="tooltip-top"
                  title="Editar"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                  onClick={handleClickOpen}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                  >
                    <Edit
                      className={
                        classes.tableActionButtonIcon + " " + classes.edit
                      }
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.GridRow}>
            <Grid item xs={12}>
              <DetailsPaper
                name="Observación General"
                content={shipmentData.observacion}
                status="observación"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.GridRow}>
            <Grid item xs>
              <DetailsPaper
                name="Estado"
                content={shipmentData.estado}
                status="estado"
              />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Tipo de Operación" content="Importación" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Referencia" content="IMP_LCL_CN_CL" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Medio de Transporte" content="LCL" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Incoterm" content="EXW" />
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.GridRow}>
            <Grid item xs>
              <DetailsPaper name="Exportador" content="Hush Puppies" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Importador" content="Yop" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Embarcador" content="La Sirenita" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Agencia de Aduana" content="Hela Duanazo" />
            </Grid>
          </Grid>

          {(medioTransporte === "LCL" || medioTransporte === "FCL") && (
            <Grid container spacing={3} className={classes.GridRow}>
              {tipoOperacion === "Exportación" && (
                <Grid item xs>
                  <DetailsPaper
                    name="Número de Reserva"
                    content="2234254345534"
                  />
                </Grid>
              )}

              {medioTransporte === "LCL" && (
                <React.Fragment>
                  <Grid item xs>
                    <DetailsPaper
                      name="Tipo de Documento"
                      content="Un papelillo"
                    />
                  </Grid>
                  <Grid item xs>
                    <DetailsPaper
                      name="Número de Documento"
                      content="223474324"
                    />
                  </Grid>
                </React.Fragment>
              )}

              {medioTransporte === "FCL" && (
                <React.Fragment>
                  <Grid item xs>
                    <DetailsPaper
                      name="Depósito de Contenedores"
                      content="Sip"
                    />
                  </Grid>
                  <Grid item xs>
                    <DetailsPaper name="Tipo" content="Noc" />
                  </Grid>
                  <Grid item xs>
                    <DetailsPaper name="Sello" content="Feria del Disco" />
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
          )}

          <Grid container spacing={3} className={classes.GridRow}>
            <Grid item xs>
              <DetailsPaper name="Motonave" content="Sip" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Viaje" content="Nop" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Naviera" content="Kisawea" />
            </Grid>
            {medioTransporte === "LCL" && (
              <Grid item xs={3}>
                {/*Debería mostrarse solo para LCL*/}
                <DetailsPaper name="Almacén Extraportuario" content="Ayua" />
              </Grid>
            )}
          </Grid>

          {medioTransporte === "LCL" && (
            <Grid container spacing={3} className={classes.GridRow}>
              {/*Debería mostrarse solo para LCL*/}
              <Grid item xs={3}>
                <DetailsPaper name="Número de Contenedor" content="123" />
              </Grid>
              <Grid item xs={3}>
                <DetailsPaper name="Cantidad de Bultos" content="2" />
              </Grid>
              <Grid item xs={3}>
                <DetailsPaper name="Peso (Kg)" content="800" />
              </Grid>
              <Grid item xs={3}>
                <DetailsPaper
                  name={
                    <React.Fragment>
                      Volumen (m<sup>3</sup>)
                    </React.Fragment>
                  }
                  content="4"
                />
              </Grid>
            </Grid>
          )}

          <Grid container spacing={3} className={classes.GridRow}>
            <Grid item xs={3}>
              <DetailsPaper
                name="Fecha de Zarpe (ETD)"
                content="22/03/1997"
                status="fecha"
              />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Puerto de Embarque" content="China" />
            </Grid>
          </Grid>

          {transbordo && (
            <Grid container spacing={3} className={classes.GridRow}>
              {" "}
              {/*Este hay que desactivarlo si no hay transbordo*/}
              <Grid item xs={3}>
                <DetailsPaper
                  name="Fecha de Transbordo"
                  content="23/03/1997"
                  status="fecha"
                />
              </Grid>
              <Grid item xs>
                <DetailsPaper name="Nave de Transbordo" content="Bote" />
              </Grid>
              <Grid item xs>
                <DetailsPaper name="Puerto de Transbordo" content="Japón" />
              </Grid>
            </Grid>
          )}

          <Grid container spacing={3} className={classes.GridRow}>
            <Grid item xs={3}>
              <DetailsPaper
                name="Fecha de Arribo (ETA)"
                content="22/03/2026"
                status="fecha"
              />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Puerto de Destino" content="Valparaiso" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Lugar de Destino" content="Chile" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <DetailsPaper name="Nombre de Mercancía" content="Zapatitos" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Valor USD" content="33" />
            </Grid>
            <Grid item xs>
              <DetailsPaper name="Valor Flete USD" content="32" />
            </Grid>
            <Grid item xs={4}>
              <DetailsPaper name="Valor CIF" content="65" status="CIF" />
            </Grid>
          </Grid>

          {/*<EditModal open={open} handleClose={handleClickOpen} />*/}
        </>
      )}
    </>
  );
}
