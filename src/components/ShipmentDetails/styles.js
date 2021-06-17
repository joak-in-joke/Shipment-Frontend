import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((styles) => ({
  shipmentTitle: {
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "26px",
    paddingLeft: 5,
    paddingRight: 5,
  },
  headerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  icon: {
    marginLeft: "5px",
  },
  tableActionButton: {
    width: "35px",
    height: "35px",
    padding: "0",
  },
  tableActionButtonIcon: {
    width: "25px",
    height: "25px",
  },
  edit: {
    backgroundColor: "transparent",
    color: "#9c27b0",
    boxShadow: "none",
  },
  sectionBox: {
    border: "3px solid #004DE6",
    borderRadius: "14px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
    marginTop: "15px",
  },

  // Paper component styles
  Paper: {
    padding: styles.spacing(2),
    height: "45px",
  },
  Title: {
    fontWeight: "400",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: "12px",
    color: "#969696",
  },
  errorText: {
    fontSize: "10px",
    color: "red",
  },
}));

export const formatDate = (date) => {
  return date.split(" ")[0].split("-").reverse().join("-");
};

export default useStyles;
