import React from "react";
import DialogCustom from "components/Dialog/Dialog.js";
import InputModal from "./InputModal";

export default function EditModal({
  open,
  handleClose,
  handleChange,
  data,
  editProvider,
}) {
  return (
    <DialogCustom
      open={open}
      handleClose={handleClose}
      title="Editar proveedor"
      maxWidth={false}
      buttonSubmit="Editar"
      onSubmit={editProvider}
      content={
        <InputModal data={data} handleChange={handleChange} isEditting={true} />
      }
    />
  );
}
