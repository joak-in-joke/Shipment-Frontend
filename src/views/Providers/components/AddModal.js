import React from "react";
import DialogCustom from "components/Dialog/Dialog.js";
import InputModal from "./InputModal";

export default function AddModal({
  open,
  handleClose,
  createProvider,
  data,
  handleChange,
}) {
  return (
    <DialogCustom
      open={open}
      handleClose={handleClose}
      title="Añadir nuevo proveedor"
      maxWidth={false}
      onSubmit={createProvider}
      content={<InputModal data={data} handleChange={handleChange} />}
    />
  );
}
