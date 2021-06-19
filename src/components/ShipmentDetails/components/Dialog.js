import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export default function AlertDialog({
  open,
  close = null,
  submit = null,
  title,
  content,
}) {
  return (
    <Dialog
      open={open}
      onClose={close ? close : open}
      aria-labelledby="dialog-informative"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {close && (
          <Button onClick={close} color="primary">
            Cancelar
          </Button>
        )}
        {submit && (
          <Button onClick={submit} color="primary" autoFocus>
            Aceptar
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
