import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies93.netlify.app",
});
