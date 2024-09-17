import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-vortice-tell-me-the-model.onrender.com/",
  withCredentials: true,
})