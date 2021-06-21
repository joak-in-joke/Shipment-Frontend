import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Checkbox } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Edit, Delete } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import API from "variables/api.js";

import { InfoView } from "./components/InfoView";
import Dialog from "./components/Dialog";
import useStyles from "./styles";

export default function ShipmentDetails({ id }) {
  const classes = useStyles();
  const history = useHistory();
  const [shipmentData, setShipmentData] = useState(null);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditting, setIsEditting] = useState(false);

  const formMethod = useForm();
  const { setValue, getValues, reset } = formMethod;

  useEffect(() => {
    if (shipmentData) {
      const mercanciasParse = shipmentData.mercancias.map((mercancia) => {
        const parse = {
          name: mercancia.nombre_mercancia,
          value: mercancia.valor_usd,
          flete: mercancia.flete_usd,
          secure: mercancia.seguro_usd,
        };
        return parse;
      });
      const transbordosParse = shipmentData.trasbordos.map((transbordo) => {
        const parse = {
          puertoName: transbordo.puerto_transb,
          naveId: transbordo.nave_transb,
          date: transbordo.fecha,
          secure: transbordo.seguro_usd,
        };
        return parse;
      });

      reset({
        id: shipmentData.n_operacion,
        tipo: shipmentData.tipo_operacion,
        transporte: shipmentData.medio_transporte,
        eta: shipmentData.eta,
        etd: shipmentData.etd,
        estado: shipmentData.estado,
        referencia: shipmentData.referencia,
        incoterm: shipmentData.intercom,
        puertoETA: shipmentData.puertoembarque,
        puertoETD: shipmentData.puertodestino,
        exportador: shipmentData.exportador,
        importador: shipmentData.importador,
        operador: shipmentData.embarcador,
        agencia: shipmentData.agencia_aduana,
        tipoDocumento: shipmentData.tipo_documento,
        documento: shipmentData.tipo_documento,
        motonave: shipmentData.motonave,
        viaje: shipmentData.viaje,
        naviera: shipmentData.viaje,
        reserva: shipmentData.reserva,
        depositoContenedores: shipmentData.deposito_contenedores,
        contTipo: shipmentData.cont_tipo,
        sello: shipmentData.sello,
        contenedor: shipmentData.data_transporte.contenedor,
        bultos: shipmentData.data_transporte.cant_bultos,
        peso: shipmentData.data_transporte.peso,
        volumen: shipmentData.data_transporte.volumen,
        almacen: shipmentData.data_transporte.lugar_destino,
        destino: shipmentData.lugardestino,
        mercancias: mercanciasParse,
        transbordos: transbordosParse,
        transbordo: shipmentData.trasbordos.length > 0 ? true : null,
      });
    }
  }, [shipmentData, getValues, setValue, reset]);

  useEffect(() => {
    API.get(`shipment/${id}`, {})
      .then(({ data: { resultado, data } }) => {
        if (resultado) {
          console.log(data);
          setShipmentData(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const enableEdit = () => {
    setIsEditting(!isEditting);
  };

  const editShipment = (data) => {
    API.post(`shipment/update/${id}`, data)
      .then(({ data: { message } }) => {
        if (message) {
          setModal(true);
        } else console.log("Ocurrio un error :(");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteShipment = () => {
    API.post(`shipment/delete`, {
      id: id,
    })
      .then(({ data: { message } }) => {
        if (message) {
          history.push(`/admin/table`);
        } else console.log("Ocurrio un error :(");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const confirmDelete = () => {
    setDeleteModal(true);
  };

  const onSubmit = (data) => {
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
      intercom: data.incoterm,
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

      deposito_contenedores: data.depositoContenedores,
      cont_tipo: data.contTipo,
      sello: data.sello,

      contenedor: data.contenedor,
      cant_bultos: data.bultos,
      peso: data.peso,
      volumen: data.volumen,
      lugar_destino: data.almacen,

      mercancias: mercancias,
      trasbordos: transbordos,
    };
    editShipment(payload);
  };

  if (shipmentData === null || isLoading === true) return null;
  return (
    <FormProvider {...formMethod}>
      <form onSubmit={formMethod.handleSubmit((data) => onSubmit(data))}>
        <Grid container spacing={3} className={classes.headerBox}>
          <Grid>
            Editar
            <Checkbox
              checked={isEditting}
              onChange={enableEdit}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Grid>

          <Button
            className={classes.Button}
            color="primary"
            type="submit"
            disabled={!isEditting}
            // onClick={() => updateShipment()}
          >
            <Edit className={classes.icon} />
            Confirmar edición
          </Button>
          <Button color="bussiness" onClick={() => confirmDelete()}>
            <Delete className={classes.icon} />
            Eliminar embarque
          </Button>
        </Grid>

        <InfoView isEditting={isEditting} />
      </form>

      <Dialog
        open={modal}
        title="Modificado"
        content={`Se ha modificado correctamente`}
        submit={() => setModal(false)}
      />
      <Dialog
        open={deleteModal}
        submit={() => deleteShipment()}
        close={() => setDeleteModal(false)}
        title="Confirmar eliminacion"
        content={`¿Estas seguro de eliminar el modal?`}
      />
    </FormProvider>
  );
}
