import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Button from "components/CustomButtons/Button.js";
import Paper from "@material-ui/core/Paper";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
    height: "40px",
  },
  input: {
    display: "none",
  },
  inputPaper: {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chipSelected: {
    backgroundColor: "#26FFB5",
  },
}));

export default function DetailedAccordion(props) {
  const { name, files } = props;
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <Grid item xs={6}>
          <Typography className={classes.heading}>{name}</Typography>
        </Grid>
        <Grid item xs={6} className={classes.column}>
          <Typography className={classes.secondaryHeading}>
            Tiene {files.length} archivos subidos
          </Typography>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Grid item xs={8} className={classes.column}>
          {files.map((file) =>
            file.isSelected === true ? (
              <Chip
                label={file.name}
                icon={<PriorityHighIcon />}
                key={file.id}
                color="primary"
                onDelete={() => {}}
              />
            ) : (
              <Chip label={file.name} key={file.id} onDelete={() => {}} />
            )
          )}
        </Grid>
        <Grid item={4} className={classes.helper}>
          <Paper variant="outlined" className={classes.inputPaper}>
            <input id="upload-archive" multiple type="file" />
          </Paper>
        </Grid>
      </AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button color="bussiness" className={classes.addButton}>
          Subir archivo
        </Button>
      </AccordionActions>
    </Accordion>
  );
}
