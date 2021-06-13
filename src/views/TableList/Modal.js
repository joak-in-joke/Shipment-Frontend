import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  Grid,
  TextField,
  InputLabel,
  FormControl,
  Switch,
  Paper,
  Divider,
} from "@material-ui/core";
// core components
import DialogCustom from "components/Dialog/Dialog";
import Button from "components/CustomButtons/Button.js";

const styles = {
  line: {},
  formControl: {
    width: "100%",
  },
  checkboxArea: {
    display: "flex",
    alignItems: "center",
    justfiyContent: "center",
  },
  sumSeccion: {
    display: "flex",
    justfiyContent: "center",
    alignItems: "center",
    padding: "2px",
    marginTop: "25px",
    borderRadius: "4px",
    border: "1px solid #000000",
  },
  headerBox: {
    // width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "15px",
    paddingLeft: "15px",
  },
  divider: {
    marginTop: "100px",
    paddingBottom: "10px",
  },
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
    width: "100%",
  },
  deleteButton: {
    color: "#000000",
    width: "100%",
  },
};

const useStyles = makeStyles(styles);

export default function Modal({ open, handleClose }) {
  const classes = useStyles();
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  const [state, setState] = useState({
    tipo: "",
    transporte: "",
    id: null,
    referencia: "",
    estado: "",
    incoterm: "",
    exportador: "",
    importador: "",
    operador: "",
    agencia: "",
    reserva: "",
    depositoContenedores: "",
    contTipo: "",
    sello: "",
    motonave: "",
    viaje: "",
    naviera: "",
    almacen: "",
    contenedor: "",
    bultos: 0,
    peso: 0,
    volumen: 0,
    eta: date,
    puertoETA: "",
    etd: date, //revisar esto
    puertoETD: "",
    destino: "",
    tipoDocumento: "",
    documento: "",
    puertoTrasbordo: "",
    naveTrasbordo: "",
    fechaTrasbordo: date,
    valorTotal: 0,
  });

  const blankMercancia = {
    nombre: "",
    valor: 0,
    valorFlete: 0,
    valorSeguro: 0,
  };

  const [mercancia, setMercancia] = useState([{ ...blankMercancia }]);

  const addMercancia = () => {
    setMercancia([...mercancia, { ...blankMercancia }]);
  };

  const deleteMercancia = (id) => {
    const listaNueva = mercancia.filter((item) => item.id !== id);

    setMercancia(listaNueva);
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeNumericInput = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    setState({
      ...state,
      valorTotal:
        parseInt(state.valor) +
        parseInt(state.valorFlete) +
        parseInt(state.valorSeguro),
    }); // eslint-disable-next-line
  }, [state.valor, state.valorFlete, state.valorSeguro]);

  return (
    <>
      <DialogCustom
        open={open}
        handleClose={handleClose}
        title="Añadir nuevo embarque"
        maxWidth="xl"
        content={
          <>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={12}>
                Información general
              </Grid>
            </Grid>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="tipoOperacionlabel">
                    Tipo de operacion
                  </InputLabel>
                  <Select
                    labelId="tipoOperacionlabel"
                    name="tipo"
                    value={state.tipo}
                    onChange={handleChange}
                    label="Tipo de operación"
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value="importacion">Importación</MenuItem>
                    <MenuItem value="exportacion">Exportación</MenuItem>
                    <MenuItem value="triangulacion">Triangulación</MenuItem>
                    <MenuItem value="otros">Otros</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={2}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="MedioTransportelabel">
                    Medio de transporte
                  </InputLabel>
                  <Select
                    labelId="MedioTransportelabel"
                    name="transporte"
                    value={state.transporte}
                    onChange={handleChange}
                    label="Medio de transporte"
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value="FCL">FCL</MenuItem>
                    <MenuItem value="LCL">LCL</MenuItem>
                    <MenuItem value="aereo">aéreo</MenuItem>
                    <MenuItem value="terrestre">terrestre</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="ID"
                  variant="outlined"
                  name="id"
                  value={state.id}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="Referencia"
                  variant="outlined"
                  name="referencia"
                  value={state.referencia}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={1}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="estadolabel">Estado</InputLabel>
                  <Select
                    labelId="estadolabel"
                    name="estado"
                    value={state.estado}
                    onChange={handleChange}
                    label="Estado"
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value="Activo">Activo</MenuItem>
                    <MenuItem value="Terminado">Terminado</MenuItem>
                    <MenuItem value="Anulado">Anulado</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={1}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="incotermlabel">Incoterm</InputLabel>
                  <Select
                    labelId="incotermlabel"
                    name="incoterm"
                    value={state.incoterm}
                    onChange={handleChange}
                    label="Incoterm"
                  >
                    <MenuItem value="">
                      <em>Seleccionar</em>
                    </MenuItem>
                    <MenuItem value="EXW">EXW</MenuItem>
                    <MenuItem value="FCA">FCA</MenuItem>
                    <MenuItem value="FAS">FAS</MenuItem>
                    <MenuItem value="FOB">FOB</MenuItem>
                    <MenuItem value="CPT">CPT</MenuItem>
                    <MenuItem value="CIP">CIP</MenuItem>
                    <MenuItem value="CFR">CFR</MenuItem>
                    <MenuItem value="CIF">CIF</MenuItem>
                    <MenuItem value="DAP">DAP</MenuItem>
                    <MenuItem value="DPU">DPU</MenuItem>
                    <MenuItem value="DDP">DDP</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={12}>
                Datos de envío
              </Grid>
            </Grid>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs>
                <TextField
                  label="Exportador"
                  variant="outlined"
                  name="exportador"
                  value={state.exportador}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Importador"
                  variant="outlined"
                  name="importador"
                  value={state.importador}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Operador Logístico"
                  variant="outlined"
                  name="operador"
                  valor={state.operador}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Agencia aduana"
                  variant="outlined"
                  name="agencia"
                  value={state.agencia}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
            </Grid>

            {(state.transporte === "LCL" || state.transporte === "FCL") && (
              <Grid container className={classes.line} spacing={2}>
                {state.tipo === "exportacion" && (
                  <Grid item xs>
                    <TextField
                      label="Número de Reserva"
                      variant="outlined"
                      name="reserva"
                      value={state.reserva}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>
                )}

                {state.transporte === "LCL" && (
                  <>
                    <Grid item xs>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="tipoDocumentolabel">
                          Tipo de documento
                        </InputLabel>
                        <Select
                          labelId="tipoDocumentolabel"
                          name="tipoDocumento"
                          value={state.tipoDocumento}
                          onChange={handleChange}
                          label="Tipo de documento"
                        >
                          <MenuItem value="">
                            <em>Seleccionar</em>
                          </MenuItem>
                          <MenuItem value="MBL">MBL</MenuItem>
                          <MenuItem value="HBL">HBL</MenuItem>
                          <MenuItem value="NBL">NBL</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={8}>
                      <TextField
                        label="Número de Documento"
                        variant="outlined"
                        name="documento"
                        value={state.documento}
                        onChange={handleChange}
                        className={classes.formControl}
                      />
                    </Grid>
                  </>
                )}

                {state.transporte === "FCL" && (
                  <>
                    <Grid item xs>
                      <TextField
                        label="Depósito de Contenedores"
                        variant="outlined"
                        name="depositoContenedores"
                        value={state.depositoContenedores}
                        onChange={handleChange}
                        className={classes.formControl}
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="contTipolabel">Tipo</InputLabel>
                        <Select
                          labelId="contTipolabel"
                          name="contTipo"
                          value={state.contTipo}
                          onChange={handleChange}
                          label="Tipo"
                        >
                          <MenuItem value="">
                            <em>Seleccionar</em>
                          </MenuItem>
                          <MenuItem value="0">Sin container</MenuItem>
                          <MenuItem value="1">20’ Flat Rack</MenuItem>
                          <MenuItem value="2">20’ Open Top</MenuItem>
                          <MenuItem value="3">20’ Standard</MenuItem>
                          <MenuItem value="4">40’ Flat Rack</MenuItem>
                          <MenuItem value="5">40’ High Cube</MenuItem>
                          <MenuItem value="6">40’ NOR</MenuItem>
                          <MenuItem value="7">40’ Open Top</MenuItem>
                          <MenuItem value="8">40’ Reefer</MenuItem>
                          <MenuItem value="9">40’ Standard</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs>
                      <TextField
                        label="Sello"
                        variant="outlined"
                        name="sello"
                        value={state.sello}
                        onChange={handleChange}
                        className={classes.formControl}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            )}

            <Grid container className={classes.line} spacing={2}>
              <Grid item xs>
                <TextField
                  label="Motonave"
                  variant="outlined"
                  name="motonave"
                  value={state.motonave}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Viaje"
                  variant="outlined"
                  name="viaje"
                  value={state.viaje}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Naviera"
                  variant="outlined"
                  name="naviera"
                  value={state.naviera}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              {state.transporte === "LCL" && (
                <>
                  <Grid item xs>
                    <TextField
                      label="Almacen extraportuario"
                      variant="outlined"
                      name="almacen"
                      value={state.almacen}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>
                </>
              )}
            </Grid>

            {state.transporte === "LCL" && (
              <Grid container className={classes.line} spacing={2}>
                <>
                  <Grid item xs={8}>
                    <TextField
                      label="Número de Contenedor"
                      variant="outlined"
                      name="contenedor"
                      value={state.contenedor}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      label="Cantidad de bultos"
                      variant="outlined"
                      name="bultos"
                      type="number"
                      value={state.bultos}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      label="Peso (kg)"
                      variant="outlined"
                      name="peso"
                      type="number"
                      value={state.peso}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      label="Volumen (m³)"
                      variant="outlined"
                      name="volumen"
                      type="number"
                      value={state.volumen}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>
                </>
              </Grid>
            )}

            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={12}>
                Información de fechas
              </Grid>
            </Grid>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs>
                <TextField
                  label="ETD"
                  variant="outlined"
                  name="etd"
                  type="date"
                  value={state.etd}
                  defaultValue={date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Puerto de embarque"
                  variant="outlined"
                  name="puertoETD"
                  value={state.puertoETD}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="ETA"
                  variant="outlined"
                  name="eta"
                  type="date"
                  value={state.eta}
                  defaultValue={date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Puerto de destino"
                  variant="outlined"
                  name="puertoETA"
                  value={state.puertoETA}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Lugar destino"
                  variant="outlined"
                  name="destino"
                  value={state.destino}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={1} className={classes.checkboxArea}>
                Trasbordo
                <Switch
                  checked={state.trasbordo}
                  onChange={handleChangeCheckbox}
                  color="primary"
                  name="trasbordo"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Grid>

              {state.trasbordo === true && (
                <>
                  <Grid item xs>
                    <TextField
                      label="Puerto de trasbordo"
                      variant="outlined"
                      name="puertoTrasbordo"
                      value={state.puertoTrasbordo}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      label="Nave trasbordo"
                      variant="outlined"
                      name="naveTrasbordo"
                      value={state.naveTrasbordo}
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      label="Fecha trasbordo"
                      type="date"
                      variant="outlined"
                      value={state.fechaTrasbordo}
                      defaultValue={date}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.formControl}
                    />
                  </Grid>
                </>
              )}
            </Grid>

            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={12}>
                Detalle de producto
              </Grid>
            </Grid>
            {mercancia.map((val, idx) => {
              const mercanciaId = `nombre-${idx}`;
              const valorId = `valor-${idx}`;
              const valorFleteId = `valorFlete-${idx}`;
              const valorSeguroId = `valorSeguro-${idx}`;
              return (
                <>
                  <Grid
                    container
                    spacing={2}
                    className={classes.line}
                    id={`mercancia-${idx}`}
                  >
                    <Grid item xs={4}>
                      <TextField
                        label="Nombre mercancia"
                        variant="outlined"
                        name={mercanciaId}
                        //value={state.mercancias.nombreMercancia}
                        onChange={handleChange}
                        className={classes.formControl}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        label="Valor (USD)"
                        variant="outlined"
                        name={valorId}
                        type="number"
                        //valor={state.valor}
                        onChange={onChangeNumericInput}
                        className={classes.formControl}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        label="Valor Flete (USD)"
                        variant="outlined"
                        name={valorFleteId}
                        type="number"
                        //value={state.valorFlete}
                        onChange={onChangeNumericInput}
                        className={classes.formControl}
                      />
                    </Grid>
                    <Grid item xs>
                      <TextField
                        label="Valor seguro (USD)"
                        variant="outlined"
                        name={valorSeguroId}
                        type="number"
                        //value={state.valorSeguro}
                        onChange={onChangeNumericInput}
                        className={classes.formControl}
                      />
                    </Grid>
                    <Grid item xs>
                      {!mercancia[idx + 1] && (
                        <Button
                          onClick={() => addMercancia()}
                          className={classes.addButton}
                          color="bussiness"
                        >
                          Agregar Mercancia
                        </Button>
                      )}
                      {mercancia[idx + 1] && (
                        <Button
                          onClick={() => deleteMercancia(idx + 1)}
                          color="bussiness"
                          className={classes.deleteButton}
                        >
                          Eliminar Mercancia
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </>
              );
            })}

            <Grid container spacing={2} direction="column">
              <Grid item xs>
                <Paper variant="outlined" className={classes.headerBox}>
                  Valor CIF: {state.valorTotal}
                </Paper>
              </Grid>
            </Grid>
          </>
        }
      />
    </>
  );
}
