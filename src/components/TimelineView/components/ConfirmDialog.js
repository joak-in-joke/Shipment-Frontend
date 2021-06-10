import React from "react";
import Dialog from "components/Dialog/Dialog";

const ConfirmDialog = ({ open, handleClose, onSubmit }) => {
  return (
    <Dialog
      title="Confirmar finalizar embarque"
      handleClose={handleClose}
      open={open}
      maxWidth={false}
      content="¿Estas muy seguro de querer cerrar este embarque?"
      buttonSubmit="confirmar"
      onSubmit={onSubmit}
    />
  );
};

export default ConfirmDialog;
