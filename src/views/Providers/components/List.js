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
              telefono,
              CuentaBanco,
              Contacto,
            }) => {
              const data = {
                nombre: nombre,
                pais: pais,
                rut: rut,
                direccion: direccion,
                email: email,
                telefono: telefono,
                nombre_contacto: Contacto.nombre,
                cargo: Contacto.cargo,
                // telefono_contacto: contacto_proveedor[0].telefono,
                // email_contacto: contacto_proveedor[0].email,
                banco: CuentaBanco.banco,
                n_cuenta: CuentaBanco.n_cuenta,
                tipo_de_cuenta: CuentaBanco.tipo_de_cuenta,
                nombre_empresa: CuentaBanco.nombre_empresa,
                email_cuentabanco: CuentaBanco.email,
                rut_cuentabanco: CuentaBanco.rut,
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
