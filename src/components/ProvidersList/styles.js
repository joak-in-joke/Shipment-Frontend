import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  inline: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: "14px",
    color: "#4F4F4F",
    lineHeight: "24px",
  },
  textProvider: {
    fontSize: "18px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontWeight: "380",
  },
  textTitle: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontWeight: "bold",
  },
  accordionHeaderTop: {
    backgroundColor: "#2361E8",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
  },
  accordionHeaderBottom: {
    backgroundColor: "#33B8FF",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  accordionHeaderText: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "16px",
    color: "#FFFFFF",
    fontWeight: "300",
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px",
  },
  edit: {
    backgroundColor: "transparent",
    color: "#9c27b0",
    boxShadow: "none",
  },
  close: {
    backgroundColor: "transparent",
    color: "#f44336",
    boxShadow: "none",
  },
}));

export default useStyles;
