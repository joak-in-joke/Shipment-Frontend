import API from "variables/api.js";

export const getAllShipments = () => {
  API.get(`embarques`).then((res) => {
    return res.data;
  });
};
