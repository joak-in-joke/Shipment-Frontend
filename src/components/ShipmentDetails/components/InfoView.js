import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../styles";
import { stateOptions, transportOptions } from "../variables/options";
import Paper from "./Papers/index";

export const InfoView = ({ shipmentData, handleShipmentData }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper.Select
            title="estado"
            item="estado"
            content={shipmentData.estado}
            handleShipmentData={handleShipmentData}
            isSelect={true}
            selectOptions={stateOptions}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Text
            title="referencia"
            item="referencia"
            content={shipmentData.referencia}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Select
            title="medio de transporte"
            item="medio_transporte"
            content={shipmentData.medio_transporte}
            handleShipmentData={handleShipmentData}
            isSelect={true}
            selectOptions={transportOptions}
          />
        </Grid>
        <Grid item xs={2}>
          <Paper.Date
            title="ETD"
            item="etd"
            content={shipmentData.etd}
            handleShipmentData={handleShipmentData}
            isDate={true}
          />
        </Grid>
        <Grid item xs={2}>
          <Paper.Date
            title="ETA"
            item="eta"
            content={shipmentData.eta}
            handleShipmentData={handleShipmentData}
            isDate={true}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.GridRow}>
        <Grid item xs={3}>
          <Paper.Text
            title="operacion"
            item="tipo_operacion"
            content={shipmentData.tipo_operacion}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Text
            title="importador"
            item="importador"
            content={shipmentData.importador}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Text
            title="exportador"
            item="exportador"
            content={shipmentData.exportador}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Text
            title="embarcador"
            item="embarcador"
            content={shipmentData.embarcador}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper.Text
            title="intercom"
            item="intercom"
            content={shipmentData.intercom}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={4}>
          <Paper.Text
            title="agencia aduana"
            item="agencia_aduana"
            content={shipmentData.agencia_aduana}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={4}>
          <Paper.Text
            title="reserva"
            item="reserva"
            content={shipmentData.reserva}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper.Text
            title="documento"
            item="tipo_documento"
            content={shipmentData.tipo_documento}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Text
            title="motonave"
            item="motonave"
            content={shipmentData.motonave}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Text
            title="naviera"
            item="naviera"
            content={shipmentData.naviera}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper.Text
            title="viaje"
            item="viaje"
            content={shipmentData.viaje}
            handleShipmentData={handleShipmentData}
          />
        </Grid>
      </Grid>

      {/* {shipmentData.transbordo && (
        <Grid className={classes.sectionBox}>
          <p>Transbordo</p>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Paper.Text
                title="Puerto Transbordo"
                item="puerto_transb"
                content={shipmentData.puerto_transb}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={5}>
              <Paper.Text
                title="nave transbordo"
                item="naver_transb"
                content={shipmentData.naver_transb}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper.Date
                title="fecha transbordo"
                item="fecha_transb"
                content={shipmentData.fecha_transb}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
          </Grid>
        </Grid>
      )} */}

      <Grid className={classes.sectionBox}>
        <p>{shipmentData.medio_transporte}</p>
        {shipmentData.medio_transporte === "LCL" ? (
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper.Text
                title="contenedor"
                item="contenedor"
                nested="data_transporte"
                content={shipmentData.data_transporte.contenedor}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={3}>
              <Paper.Text
                title="destino"
                item="lugar_destino"
                nested="data_transporte"
                content={shipmentData.data_transporte.lugar_destino}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper.Text
                title="cantidad"
                item="cant_bultos"
                nested="data_transporte"
                content={shipmentData.data_transporte.cant_bultos}
                handleShipmentData={handleShipmentData}
                number={true}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper.Text
                title="peso un.(Kg)"
                item="peso"
                nested="data_transporte"
                content={shipmentData.data_transporte.peso}
                handleShipmentData={handleShipmentData}
                number={true}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper.Text
                title="volumen tot.(m³)"
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
              <Paper.Text
                title="puerto destino"
                item="puertodestino"
                nested="data_transporte"
                content={shipmentData.data_transporte.puertodestino}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={3}>
              <Paper.Text
                title="destino"
                item="lugardestino"
                nested="data_transporte"
                content={shipmentData.data_transporte.lugardestino}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper.Text
                title="deposito"
                item="deposito_contenedores"
                nested="data_transporte"
                content={shipmentData.data_transporte.deposito_contenedores}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper.Text
                title="tipo cont."
                item="cont_tipo"
                nested="data_transporte"
                content={shipmentData.data_transporte.cont_tipo}
                handleShipmentData={handleShipmentData}
              />
            </Grid>
            <Grid item xs={2}>
              <Paper.Text
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
            <Paper.Text
              title="nombre"
              item="nombre_mercancia"
              nested="valorData"
              content={shipmentData.valorData.nombre_mercancia}
              handleShipmentData={handleShipmentData}
            />
          </Grid>
          <Grid item xs={2}>
            <Paper.Text
              title="valor (usd)"
              item="valor_usd"
              nested="valorData"
              content={shipmentData.valorData.valor_usd}
              handleShipmentData={handleShipmentData}
              number={true}
            />
          </Grid>
          <Grid item xs={2}>
            <Paper.Text
              title="flete (usd)"
              item="flete_usd"
              nested="valorData"
              content={shipmentData.valorData.flete_usd}
              handleShipmentData={handleShipmentData}
              number={true}
            />
          </Grid>
          <Grid item xs={2}>
            <Paper.Text
              title="seguro (usd)"
              item="seguro_usd"
              nested="valorData"
              content={shipmentData.valorData.seguro_usd}
              handleShipmentData={handleShipmentData}
              number={true}
            />
          </Grid>
          <Grid item xs={3}>
            <Paper.Text
              title="valor (cif)"
              item="valor_cif"
              nested="valorData"
              content={
                parseInt(shipmentData.valorData.valor_usd) +
                parseInt(shipmentData.valorData.flete_usd) +
                parseInt(shipmentData.valorData.seguro_usd)
              }
              handleShipmentData={handleShipmentData}
              readOnly={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
