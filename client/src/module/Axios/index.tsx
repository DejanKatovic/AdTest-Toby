import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:8000";

export const Axios = axios.create({
  baseURL: BASE_URL,
});
