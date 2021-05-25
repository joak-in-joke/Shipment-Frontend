import React from "react";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((styles) => ({
  Title: {
    fontWeight: "400",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: "12px",
    color: "#969696",
  },
  Paper: {
    padding: styles.spacing(2),
    //backgroundColor: "#26FFB5",
  },
  PaperStatus: {
    padding: styles.spacing(2),
    textAlign: "center",
    backgroundColor: "#2361E8",
  },
  TitleWhite: {
    fontWeight: "400",
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: "12px",
    color: "#FFFFFF",
  },
  status: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  PaperDate: {
    padding: styles.spacing(2),
    textAlign: "center",
    backgroundColor: "#33B8FF",
  },
  PaperCIF: {
    padding: styles.spacing(2),
    textAlign: "center",
    backgroundColor: "#00cb85",
  },
}));

export default function DetailsPaper({ name, content, status = "none" }) {
  const classes = useStyles();
  return (
    <>
      {status === "none" && (
        <Paper className={classes.Paper}>
          <Typography className={classes.Title}>{name}:</Typography>
          <Typography component="span" align="center">
            {content}
          </Typography>
        </Paper>
      )}

      {status === "observación" && (
        <Paper className={classes.Paper}>
          <Typography className={classes.Title}>{name}:</Typography>
          <Typography component="span">{content}</Typography>
        </Paper>
      )}

      {status === "estado" && (
        <Paper className={classes.PaperStatus}>
          <Typography className={classes.TitleWhite}>{name}:</Typography>
          <Typography component="span" className={classes.status}>
            {content}
          </Typography>
        </Paper>
      )}

      {status === "fecha" && (
        <Paper className={classes.PaperDate}>
          <Typography className={classes.TitleWhite}>{name}:</Typography>
          <Typography component="span">{content}</Typography>
        </Paper>
      )}

      {status === "CIF" && (
        <Paper className={classes.PaperCIF}>
          <Typography className={classes.TitleWhite}>{name}:</Typography>
          <Typography component="span">{content}</Typography>
        </Paper>
      )}
    </>
  );
}
