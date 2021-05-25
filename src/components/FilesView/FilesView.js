import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FilesComponent from "components/FilesComponent/FilesComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const files = [
  { value: 1, name: "asdads_v10", isSelected: true },
  { value: 2, name: "asdads_v4" },
  { value: 3, name: "asdads_v7" },
  { value: 4, name: "asdads_v3445" },
  { value: 5, name: "asdads_v1" },
];

const rows = [
  { value: 1, name: "Packing List" },
  { value: 2, name: "Booking" },
  { value: 3, name: "Matriz" },
  { value: 4, name: "Mbl" },
  { value: 5, name: "Hbl" },
  { value: 6, name: "Bnl" },
  { value: 7, name: "Sidemar" },
  { value: 8, name: "Certificado de seguro" },
  { value: 9, name: "Certificado de origen" },
  { value: 10, name: "Provision de fondos" },
  { value: 11, name: "Factura de agencia" },
  { value: 12, name: "DIN" },
  { value: 13, name: "Factura de almacen" },
];

export default function DetailedAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {rows.map((row) => (
        <FilesComponent name={row.name} key={row.id} files={files} />
      ))}
    </div>
  );
}
