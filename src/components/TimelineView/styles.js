import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  optionsArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "initial",
  },
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
    height: "40px",
  },
  finishButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "#000000",
    height: "40px",
  },
  finishArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "24px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  titleArea: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  icon: {
    fontSize: "16px",
    marginTop: "8px",
    marginLeft: "8px",
    cursor: "pointer",
  },
}));

export default useStyles;
