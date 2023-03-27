import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-k03j.onrender.com",
});
