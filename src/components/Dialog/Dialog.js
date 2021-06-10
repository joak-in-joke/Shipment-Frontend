import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "components/CustomButtons/Button.js";

const styles = {
  addButton: {
    backgroundColor: "#26FFB5",
    color: "#000000",
  },
};

const useStyles = makeStyles(styles);

const DialogCustom = ({
  title,
  content,
  handleClose,
  open,
  maxWidth = false,
  buttonSubmit = "Agregar",
  onSubmit,
  style,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth={maxWidth}
      style={style}
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          className={classes.addButton}
          color="bussiness"
        >
          Cancelar
        </Button>
        <Button
          onClick={onSubmit}
          className={classes.addButton}
          color="bussiness"
        >
          {buttonSubmit}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCustom;
