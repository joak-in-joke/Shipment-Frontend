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

export default function AlignItemsList({
  providers,
  deleteProvider,
  getProviders,
}) {
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

  if (providers)
    return (
      <React.Fragment>
        <List className={classes.root}>
          {providers.map(
            ({
              id,
              nombre,
              pais,
              direccion,
              rut,
              email,
              cuenta_contacto,
              contacto_proveedor,
            }) => {
              const data = {
                nombre: nombre,
                pais: pais,
                rut: rut,
                direccion: direccion,
                email: email,
                telefono: contacto_proveedor[0].telefono,
                nombre_contacto: contacto_proveedor[0].nombre,
                cargo_contacto: contacto_proveedor[0].cargo,
                telefono_contacto: contacto_proveedor[0].telefono,
                email_contacto: contacto_proveedor[0].email,
                banco_cuenta: cuenta_contacto[0].banco,
                numero_cuenta: cuenta_contacto[0].n_cuenta,
                tipo_cuenta: cuenta_contacto[0].tipo_cuenta,
                nombre_cuenta: cuenta_contacto[0].nombre_empresa,
                email_cuenta: cuenta_contacto[0].email,
                rut_cuenta: cuenta_contacto[0].n_cuenta,
              };
              return (
                <>
                  <ItemList
                    id={id}
                    info={data}
                    deleteProvider={deleteProvider}
                    getProviders={getProviders}
                  />
                  <Divider variant="inset" component="li" />
                </>
              );
            }
          )}
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
  else return null;
}
