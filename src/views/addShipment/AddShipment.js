import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
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
import Dialog from "components/newShipment/Dialog";

import API from "variables/api.js";
import useStyles from "assets/jss/material-dashboard-react/views/newShipment";

const Index = () => {
  const classes = useStyles();
  const history = useHistory();
  const formMethod = useForm({
    defaultValues: {
      cif: 0,
    },
  });
  const { handleSubmit, watch, getValues } = formMethod;
  const transportWatch = watch("transporte");
  const tipeWatch = watch("tipo");
  const [modal, setModal] = useState(false);

  const createShipment = (data) => {
    API.post(`shipment/create`, data)
      .then(({ data: { respuesta } }) => {
        if (respuesta) {
          setModal(true);
        } else console.log("Ocurrio un error :(");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    const transbordos = data.transbordos.map((item) => {
      const parse = {
        puerto_transb: item.puertoName,
        nave_transb: item.naveId,
        fecha: item.date,
      };
      return parse;
    });
    const mercancias = data.mercancias.map((item) => {
      const parse = {
        nombre_mercancia: item.name,
        valor_usd: item.value,
        flete_usd: item.flete,
        seguro_usd: item.secure,
      };
      return parse;
    });
    const payload = {
      n_operacion: data.id,
      tipo_operacion: data.tipo,
      medio_transporte: data.transporte,
      eta: data.eta,
      etd: data.etd,
      referencia: data.referencia,
      incoterm: data.incoterm,
      puertoembarque: data.puertoETA,
      puertodestino: data.puertoETD,
      lugardestino: data.destino,
      exportador: data.exportador,
      importador: data.importador,
      embarcador: data.operador,
      agencia_aduana: data.agencia,
      tipo_documento: data.tipoDocumento,
      documento: data.documento,
      motonave: data.motonave,
      viaje: data.viaje,
      naviera: data.naviera,
      reserva: data.reserva,
      valor_cif: getValues("cif"),

      ...(data.transporte === "LCL"
        ? {
            deposito_contenedores: data.depositoContenedores,
            cont_tipo: data.conTipo,
            sello: data.sello,
          }
        : {
            contenedor: data.contenedor,
            cant_bultos: data.bultos,
            peso: data.peso,
            volumen: data.volumen,
            lugar_destino: data.destino,
          }),

      mercancias: mercancias,
      trasbordos: transbordos,
    };
    createShipment(payload);
  };

  const AceptModal = () => {
    history.push(`/admin/table`);
  };

  return (
    <Card>
      <CardHeader color="bussiness2" className={classes.cardHeader}>
        <h4 className={classes.cardTitleWhite}>Añadir nuevo embarque</h4>
      </CardHeader>
      <CardBody>
        <FormProvider {...formMethod}>
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <GeneralSection />
            <ShippingSection />

            <Grid container spacing={0}>
              <Grid item xs={7} className={classes.containerGoods}>
                <TransbordSection />
              </Grid>
              <Grid item xs={5} className={classes.containerGoods}>
                <DateSection />
              </Grid>
            </Grid>
            <Grid className={classes.containerGoods}>
              <GoodsSection />
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
        </FormProvider>
      </CardBody>

      <Dialog
        open={modal}
        submit={() => AceptModal()}
        title="Creado"
        content={`Se ha creado un nuevo ${transportWatch} ${tipeWatch} embarque correctamente`}
      />
    </Card>
  );
};

export default Index;
