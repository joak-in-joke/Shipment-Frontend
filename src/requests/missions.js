import API from "variables/api.js";

export const getAllMissions = () => {
  API.get(`misiones`).then((res) => {
    console.log(res.data.allMissiones);
    return res.data.allMissiones;
  });
};
