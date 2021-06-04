import API from "variables/api.js";

export const getAllMissions = () => {
  API.get(`misiones`).then((res) => {
    console.log(res.data.allMissiones);
    return res.data.allMissiones;
  });
};

export const signIn = (rut,password) => {
  API.post(`auth/signin`, {
    rut: rut,
    password: password
  }).then((res) => {
    return res;
  });
};