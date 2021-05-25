import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  bussinessColor,
  defaultFont,
} from "assets/jss/material-dashboard-react.js";

import taskStyle from "assets/jss/material-dashboard-react/components/tasksStyle";

const tableStyle = (theme) => ({
  ...taskStyle,
  warningTableHeader: {
    color: warningColor[0],
  },
  primaryTableHeader: {
    color: primaryColor[0],
  },
  dangerTableHeader: {
    color: dangerColor[0],
  },
  successTableHeader: {
    color: successColor[0],
  },
  infoTableHeader: {
    color: infoColor[0],
  },
  roseTableHeader: {
    color: roseColor[0],
  },
  grayTableHeader: {
    color: grayColor[0],
  },
  bussinessTableHeader: {
    color: bussinessColor[2],
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse",
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    "&, &$tableCell": {
      fontSize: "1em",
    },
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "10px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem",
  },
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  tableHeadRow: {
    height: "56px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
  tableBodyRow: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle",
  },
  PaginationActions: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  deleteButtonIcon: {
    height: "27px",
    width: "27px",
  },
  deleteIcon: {
    height: "20px",
    width: "20px",
  },
});

export default tableStyle;
