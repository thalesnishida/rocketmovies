import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-movies-production-ede1.up.railway.app",
});
