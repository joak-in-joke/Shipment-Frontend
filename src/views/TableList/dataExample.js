function createData(id, status, ref, etd, eta) {
  return { id, status, ref, etd, eta };
}

export const dataHeader = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  { id: "status", numeric: true, disablePadding: false, label: "Status" },
  { id: "ref", numeric: true, disablePadding: false, label: "Referencia" },
  { id: "etd", numeric: true, disablePadding: false, label: "ETD" },
  { id: "eta", numeric: true, disablePadding: false, label: "ETA" },
];

export const dataExample = [
  createData(
    "EMB.012017",
    "TERMINADO",
    "IMP_LCL_CN_CL",
    "EMB.0102017",
    "EMB.0102017"
  ),
  createData(
    "EMB.012012",
    "TERMINADO",
    "IMP_LCL_CN_CL",
    "EMB.0102017",
    "EMB.0102017"
  ),
  createData(
    "EMB.012013",
    "TERMINADO",
    "IMP_LCL_CN_CL",
    "EMB.0102017",
    "EMB.0102017"
  ),
  createData(
    "EMB.012014",
    "TERMINADO",
    "IMP_LCL_CN_CL",
    "EMB.0102017",
    "EMB.0102017"
  ),
  createData(
    "EMB.012015",
    "TERMINADO",
    "IMP_LCL_CN_CL",
    "EMB.0102017",
    "EMB.0102017"
  ),
  createData(
    "EMB.012016",
    "TERMINADO",
    "IMP_LCL_CN_CL",
    "EMB.0102017",
    "EMB.0102017"
  ),
  createData(
    "EMB.012018",
    "TERMINADO",
    "IMP_LCL_CN_CL",
    "EMB.0102017",
    "EMB.0102017"
  ),
];
