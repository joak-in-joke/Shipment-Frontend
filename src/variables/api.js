import axios from "axios";
export const address = "104.210.210.2";
export const port = "4000";

export const serverUrl = `${address}:${port}`;

export default axios.create({
  baseURL: `http://${serverUrl}/`,
});
