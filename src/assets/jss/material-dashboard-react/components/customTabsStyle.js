import { hexToRgb, whiteColor } from "assets/jss/material-dashboard-react.js";

const customTabsStyle = {
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px",
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important",
  },
  displayNone: {
    display: "none !important",
  },
  tabsRoot: {
    minHeight: "unset !important",
    overflowX: "visible",
    "& $tabRootButton": {
      fontSize: "0.875rem",
    },
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: whiteColor + " !important",
    marginLeft: "4px",
    "&:last-child": {
      marginLeft: "0px",
    },
  },
  tabSelected: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.2)",
    transition: "0.2s background-color 0.1s",
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    fontWeight: "500",
    fontSize: "12px",
    marginTop: "1px",
    "& > svg,& > .material-icons": {
      verticalAlign: "middle",
      margin: "-1px 5px 0 0 !important",
    },
  },
  addButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "30px",
    backgroundColor: "#26FFB5",
    color: "#000000",
    position: "absolute",
    right: "10px",
    top: "45%",
    transform: "translateY(-50%)",
    marginLeft: "20px",
  },
  widthDialog: {
    width: "320px",
    height: "120px",
  },
  selectInput: {
    width: "200px",
  },
  inputForm: {
    marginTop: "20px",
    width: "300px",
    height: "42px",
    backgroundColor: "#FFFFFF",
    "&$cssFocused $notchedOutline": {
      borderColor: `#2361E8 !important`,
    },
  },
  cssFocused: {},
  notchedOutline: {},
};

export default customTabsStyle;
