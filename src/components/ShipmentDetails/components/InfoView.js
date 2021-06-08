import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../styles";
import { formatDate } from "variables/functions";
import Paper from "./Paper";

export const InfoView = ({ shipmentData, handleShipmentData }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper
            title="estado"
            item="estado"
            content={shipmentData.estado}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="referencia"
            item="referencia"
            content={shipmentData.referencia}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="medio de transporte"
            item="medio_transporte"
            content={shipmentData.medio_transporte}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={2}>
          <Paper
            title="ETD"
            item="etd"
            content={formatDate(shipmentData.etd)}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={2}>
          <Paper
            title="ETA"
            item="eta"
            content={formatDate(shipmentData.eta)}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.GridRow}>
        <Grid item xs={3}>
          <Paper
            title="operacion"
            item="tipo_operacion"
            content={shipmentData.tipo_operacion}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="importador"
            item="importador"
            content={shipmentData.importador}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="exportador"
            item="exportador"
            content={shipmentData.exportador}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="embarcador"
            item="embarcador"
            content={shipmentData.embarcador}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper
            title="intercom"
            item="intercom"
            content={shipmentData.intercom}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={4}>
          <Paper
            title="agencia aduana"
            item="agencia_aduana"
            content={shipmentData.agencia_aduana}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={4}>
          <Paper
            title="reserva"
            item="reserva"
            content={shipmentData.reserva}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper
            title="documento"
            item="tipo_documento"
            content={shipmentData.tipo_documento}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="motonave"
            item="motonave"
            content={shipmentData.motonave}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="naviera"
            item="naviera"
            content={shipmentData.naviera}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper
            title="viaje"
            item="viaje"
            content={shipmentData.viaje}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
      </Grid>

      {shipmentData.transbordo && (
        <Grid className={classes.sectionBox}>
          <p>Transbordo</p>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Paper
                title="Puerto Transbordo"
                item="puerto_transb"
                content={shipmentData.puerto_transb}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={5}>
              <Paper
                title="nave transbordo"
                item="naver_transb"
                content={shipmentData.naver_transb}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper
                title="fecha transbordo"
                item="fecha_transb"
                content={formatDate(shipmentData.fecha_transb)}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
          </Grid>
        </Grid>
      )}

      <Grid className={classes.sectionBox}>
        <p>{shipmentData.medio_transporte}</p>
        {shipmentData.medio_transporte === "LCL" ? (
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper
                title="contenedor"
                item="contenedor"
                nested="data_transporte"
                content={shipmentData.data_transporte.contenedor}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={3}>
              <Paper
                title="destino"
                item="lugar_destino"
                nested="data_transporte"
                content={shipmentData.data_transporte.lugar_destino}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper
                title="cantidad"
                item="cant_bultos"
                nested="data_transporte"
                content={shipmentData.data_transporte.cant_bultos}
                handleShipmentData={handleShipmentData}
                number={true}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper
                title="peso un."
                item="peso"
                nested="data_transporte"
                content={shipmentData.data_transporte.peso}
                handleShipmentData={handleShipmentData}
                number={true}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper
                title="volumen tot."
                item="volumen"
                nested="data_transporte"
                content={shipmentData.data_transporte.volumen}
                handleShipmentData={handleShipmentData}
                number={true}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper
                title="puerto destino"
                item="puerto_destino"
                nested="data_transporte"
                content={shipmentData.data_transporte.puerto_destino}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={3}>
              <Paper
                title="destino"
                item="lugar_destino"
                nested="data_transporte"
                content={shipmentData.data_transporte.lugar_destino}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper
                title="deposito"
                item="deposito_contenedores"
                nested="data_transporte"
                content={shipmentData.data_transporte.deposito_contenedores}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper
                title="tipo cont."
                item="cont_tipo"
                nested="data_transporte"
                content={shipmentData.data_transporte.cont_tipo}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper
                title="sello"
                item="sello"
                nested="data_transporte"
                content={shipmentData.data_transporte.sello}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
          </Grid>
        )}
      </Grid>

      <Grid className={classes.sectionBox}>
        <p>Información mercancía</p>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper
              title="nombre"
              item="nombre_mercancia"
              nested="valorData"
              content={shipmentData.valorData.nombre_mercancia}
              handleShipmentData={handleShipmentData}
            />
          </Grid>
          <Grid item xs={2}>
            <Paper
              title="valor (usd)"
              item="valor_usd"
              nested="valorData"
              content={shipmentData.valorData.valor_usd}
              handleShipmentData={handleShipmentData}
              number={true}
            />
          </Grid>
          <Grid item xs={2}>
            <Paper
              title="flete (usd)"
              item="flete_usd"
              nested="valorData"
              content={shipmentData.valorData.flete_usd}
              handleShipmentData={handleShipmentData}
              number={true}
            />
          </Grid>
          <Grid item xs={2}>
            <Paper
              title="seguro (usd)"
              item="seguro_usd"
              nested="valorData"
              content={shipmentData.valorData.seguro_usd}
              handleShipmentData={handleShipmentData}
              number={true}
            />
          </Grid>
          <Grid item xs={3}>
            <Paper
              title="valor (cif)"
              item="valor_cif"
              nested="valorData"
              content={shipmentData.valorData.valor_cif}
              handleShipmentData={handleShipmentData}
              number={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
