import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ItemList from "./ListItem";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <List className={classes.root}>
        <ItemList
          nombre="Proveedor1"
          pais="Chile"
          direccion="Avenida 333, santiago"
          rut="1932363-2"
          email="asd@asd.cl"
          nombre_contacto="josemiguelito"
          cargo="esclavo"
          telefono="+562334344"
          email_contacto="josemiguelitobonito@latinchat.cl"
          banco="Banco Santander"
          cuenta="33434"
          tipo_cuenta="Cuenta Corriente"
          nombre_cuenta="Empresa SPA"
          email_cuenta="empresa@empresaspa.cl"
        />
        <Divider variant="inset" component="li" />
        <ItemList
          nombre="AProveedor2"
          pais="Perú"
          direccion="Avenida 333, Lima"
          rut="1932363-2"
          email="asd@asd.cl"
          nombre_contacto="josemiguelito"
          cargo="esclavo"
          telefono="+562334344"
          email_contacto="josemiguelitobonito@latinchat.com.pe"
          banco="Banco Santander"
          cuenta="33434"
          tipo_cuenta="Cuenta Corriente"
          nombre_cuenta="Empresa SPA"
          email_cuenta="empresa@empresaspa.com.pe"
        />
        <Divider variant="inset" component="li" />
      </List>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        //count={tableData.length}
        count="2"
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelDisplayedRows={({ from, to, count }) => {
          return "" + from + "-" + to + " de " + count;
        }}
        labelRowsPerPage={"Filas por página"}
      />
    </React.Fragment>
  );
}
