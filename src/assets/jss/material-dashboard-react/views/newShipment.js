import { makeStyles } from "@material-ui/core/styles";

const styles = {
  containerGoods: {
    display: "flex",
    justifyContent: "center",
  },
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
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
  },
  deleteButton: {
    color: "#000000",
    width: "100%",
  },
  headerSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justfiyContent: "space-between",
  },
  rootSection: {
    margin: "10px",
  },
  rootSectionGoods: {
    margin: "10px",
    padding: "5px",
    border: "1px solid #000000",
    borderRadius: "10px",
    width: "100%",
  },
  rootSectionTransbord: {
    margin: "10px",
    padding: "5px",
    border: "1px solid #000000",
    borderRadius: "10px",
    width: "95%",
  },
  containerItemsGoods: {
    margin: "5px",
  },
  containerItemsTransbord: {
    margin: "5px",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bodySection: {
    display: "flex",
    flexDirection: "column",
    justfiyContent: "center",
  },
  totalSection: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default useStyles;
