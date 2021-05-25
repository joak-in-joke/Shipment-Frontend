import axios from "axios";
export const address = "3.87.152.110";
export const port = "4000";

export const serverUrl = `${address}:${port}`;

export default axios.create({
  baseURL: `http://${serverUrl}/`,
});
