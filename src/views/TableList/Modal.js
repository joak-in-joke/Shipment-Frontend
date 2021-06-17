import React from "react";
// core components
import DialogCustom from "components/Dialog/Dialog";
import Index from "./components/ModalSections/Index.js";

export default function Modal({ open, handleClose }) {
  return (
    <>
      <DialogCustom
        open={open}
        handleClose={handleClose}
        title="Añadir nuevo embarque"
        maxWidth="xl"
        content={<Index />}
      />
    </>
  );
}
