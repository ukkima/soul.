import axios from "axios";
import { TOKEN_KEY } from "../consts/localStorage.js";

const token = localStorage.getItem(TOKEN_KEY);
export const $api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    authorization: token || "",
  },
});
