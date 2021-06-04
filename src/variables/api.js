import axios from "axios";
export const address = process.env.REACT_APP_ADDRESS_IP;
export const port = process.env.REACT_APP_ADDRESS_PORT;

export const serverUrl = `${address}:${port}`;

export default axios.create({
  baseURL: `http://${serverUrl}/`,
});
