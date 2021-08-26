import React from "react";
import Dialog from "@material-ui/core/Dialog";

const Modal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      asdadasdas
    </Dialog>
  );
};

export default Modal;
