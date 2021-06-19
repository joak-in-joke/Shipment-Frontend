import React from "react";
import InfoView from "components/ShipmentDetails/components/InfoView";
import { useFormContext } from "react-hook-form";

export const ConnectForm = ({ children }) => {
  const methods = useFormContext();

  return <InfoView {...methods} />;
};

export default ConnectForm;
