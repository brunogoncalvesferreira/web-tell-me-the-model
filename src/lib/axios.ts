import axios from "axios";

export const api = axios.create({
  baseURL: "https://apitm.apis-vortice.online",
  withCredentials: true,
})