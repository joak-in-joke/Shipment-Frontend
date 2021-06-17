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
    // width: "100%",
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
    width: "95%",
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
};

const useStyles = makeStyles(styles);

export default useStyles;
