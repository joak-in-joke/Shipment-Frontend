import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Checkbox } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Edit, Delete } from "@material-ui/icons";
import { format } from "date-fns";
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
  const { getValues, reset } = formMethod;

  useEffect(() => {
    if (shipmentData) {
      const mercanciasParse = shipmentData.DataEmbarque.ValorData.map(
        (mercancia) => {
          const parse = {
            name: mercancia.nombre_mercancia,
            value: mercancia.valor_usd,
            flete: mercancia.flete_usd,
            secure: mercancia.seguro_usd,
          };
          return parse;
        }
      );
      const transbordosParse = shipmentData.DataEmbarque.TransbordoData.map(
        (transbordo) => {
          const parse = {
            puertoName: transbordo.naver_transb,
            naveId: transbordo.id,
            date: format(new Date(transbordo.fecha_transb), "yyyy-MM-dd"),
          };
          return parse;
        }
      );

      reset({
        id: shipmentData.n_operacion,
        tipo: shipmentData.DataEmbarque.tipo_operacion,
        transporte: shipmentData.media_transporte,
        eta: format(new Date(shipmentData.eta), "yyyy-MM-dd"),
        etd: format(new Date(shipmentData.etd), "yyyy-MM-dd"),
        estado: shipmentData.estado,
        referencia: shipmentData.referencia,
        incoterm: shipmentData.DataEmbarque.incoterm,
        puertoETD: shipmentData.DataEmbarque.Puerto && shipmentData.DataEmbarque.Puerto.nombre, //
        ...(shipmentData.media_transporte === "LCL" 
        ? {puertoETA: shipmentData.DataEmbarque.DataLCL && shipmentData.DataEmbarque.DataLCL.Puerto.nombre} //
        : {puertoETA: shipmentData.DataEmbarque.DataFCL && shipmentData.DataEmbarque.DataFCL.Puerto.nombre}),
        exportadorId: shipmentData.DataEmbarque.id_exportador,
        importadorId: shipmentData.DataEmbarque.id_importador,
        operador: shipmentData.DataEmbarque.OperadorLogistico && shipmentData.DataEmbarque.OperadorLogistico.nombre,
        agencia: shipmentData.DataEmbarque.AgenciaAduana && shipmentData.DataEmbarque.AgenciaAduana.nombre,
        tipoDocumento: shipmentData.DataEmbarque.tipo_documento,
        documento: shipmentData.DataEmbarque.documento,
        motonave: shipmentData.DataEmbarque.motonave,
        viaje: shipmentData.DataEmbarque.viaje,
        naviera: shipmentData.DataEmbarque.naviera,
        reserva: shipmentData.DataEmbarque.reserva,
        contTipo: shipmentData.DataEmbarque.tipo_documento, //
        depositoContenedores:
        shipmentData.DataEmbarque.DataFCL && shipmentData.DataEmbarque.DataFCL.deposito_contenedores, //
        sello: shipmentData.DataEmbarque.DataFCL && shipmentData.DataEmbarque.DataFCL.sello, //
        ...(shipmentData.DataEmbarque.DataLCL === "LCL" && {
          contenedor: shipmentData.DataEmbarque.DataLCL.contenedor, // LCL
          bultos: parseInt(shipmentData.DataEmbarque.DataLCL.cant_bultos), // LCL
          peso: parseInt(shipmentData.DataEmbarque.DataLCL.peso), // LCL
          volumen: parseInt(shipmentData.DataEmbarque.DataLCL.volumen), // LCL
          almacen: shipmentData.DataEmbarque.DataLCL.lugar_destino, //
        }),
        ...(shipmentData.media_transporte === "LCL" 
        ? {destino: shipmentData.DataEmbarque.DataLCL && shipmentData.DataEmbarque.DataLCL.lugar_destino} //
        : {destino: shipmentData.DataEmbarque.DataFCL && shipmentData.DataEmbarque.DataFCL.lugar_destino}),
        mercancias: mercanciasParse,
        transbordos: transbordosParse,
        transbordo:
          shipmentData.DataEmbarque.TransbordoData.length > 0 ? true : null,
      });
    }
  }, [shipmentData, reset]);

  useEffect(() => {
    API.get(`shipment/${id}`, {})
      .then(({ data: { resultado, data } }) => {
        if (resultado) {
          console.log(data.Shipment);
          setShipmentData(data.Shipment);
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
      estado: data.estado,
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

        <InfoView isEditting={isEditting} reset={reset} getValues={getValues} />
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
