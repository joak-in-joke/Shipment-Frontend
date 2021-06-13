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
    embarcador: "",
    agencia: "",
    tipoDocumento: "",
    documento: "",
    nombreMercancia: "",
    valor: 0,
    valorFlete: 0,
    valorSeguro: 0,
    valorTotal: 0,
  });

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
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  label="Referencia"
                  variant="outlined"
                  name="referencia"
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
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Importador"
                  variant="outlined"
                  name="importador"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Embarcador"
                  variant="outlined"
                  name="embarcador"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Agencia aduana"
                  variant="outlined"
                  name="agencia"
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
                        name="deposito_contenedores"
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
                          name="cont_tipo"
                          value={state.cont_tipo}
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
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Viaje"
                  variant="outlined"
                  name="viaje"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="Naviera"
                  variant="outlined"
                  name="naviera"
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
                  defaultValue={date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="puertoETDlabel">Puerto embarque</InputLabel>
                  <Select
                    labelId="puertoETDlabel"
                    name="tipoDocumento"
                    value={state.puertoETD}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Selecciona puerto ETD</em>
                    </MenuItem>
                    <MenuItem value="MBL">aaa</MenuItem>
                    <MenuItem value="HBL">bbb</MenuItem>
                    <MenuItem value="NBL">ccc</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs>
                <TextField
                  label="ETA"
                  variant="outlined"
                  name="eta"
                  type="date"
                  defaultValue={date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>

              <Grid item xs>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="puertoETAlabel">Puerto destino</InputLabel>
                  <Select
                    labelId="puertoETAlabel"
                    name="puertoETA"
                    value={state.puertoETA}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>Selecciona puerto ETA</em>
                    </MenuItem>
                    <MenuItem value="MBL">aaa</MenuItem>
                    <MenuItem value="HBL">bbb</MenuItem>
                    <MenuItem value="NBL">ccc</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs>
                <TextField
                  label="Lugar destino"
                  variant="outlined"
                  name="destino"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.line} spacing={2}>
              <Grid item xs={1} className={classes.checkboxArea}>
                Transbordo
                <Switch
                  checked={state.transbordo}
                  onChange={handleChangeCheckbox}
                  color="primary"
                  name="transbordo"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </Grid>

              {state.transbordo === true && (
                <>
                  <Grid item xs>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="puertoTransbordoLabel">
                        Puerto transbordo
                      </InputLabel>
                      <Select
                        labelId="puertoTransbordoLabel"
                        name="puertoTransbordo"
                        value={state.puertoTransbordo}
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>Selecciona puerto Transbordo</em>
                        </MenuItem>
                        <MenuItem value="MBL">aaa</MenuItem>
                        <MenuItem value="HBL">bbb</MenuItem>
                        <MenuItem value="NBL">ccc</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs>
                    <TextField
                      label="Nave transbordo"
                      variant="outlined"
                      name="naveTransbordo"
                      onChange={handleChange}
                      className={classes.formControl}
                    />
                  </Grid>

                  <Grid item xs>
                    <TextField
                      label="Fecha transbordo"
                      type="date"
                      variant="outlined"
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

              <Grid item xs={12}>
                Detalle de producto
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.line}>
              <Grid item xs={4}>
                <TextField
                  label="Nombre mercancia"
                  variant="outlined"
                  name="nombreMercancia"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Valor (USD)"
                  variant="outlined"
                  name="valor"
                  type="number"
                  onChange={onChangeNumericInput}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Valor Flete (USD)"
                  variant="outlined"
                  name="valorFlete"
                  type="number"
                  onChange={onChangeNumericInput}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs>
                <TextField
                  label="Valor seguro (USD)"
                  variant="outlined"
                  name="valorSeguro"
                  type="number"
                  onChange={onChangeNumericInput}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item xs>
                <Paper variant="outlined" className={classes.headerBox}>
                  Total: {state.valorTotal}
                </Paper>
              </Grid>
            </Grid>
          </>
        }
      />
    </>
  );
}
