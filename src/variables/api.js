import axios from "axios";
export const address = "localhost";
export const port = "4000";

export const serverUrl = `${address}:${port}`;

export default axios.create({
  baseURL: `http://${serverUrl}/`,
});
