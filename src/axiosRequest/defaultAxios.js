import axios from "axios";

const BASE_URL = "https://galagemotors.herokuapp.com/api/";
const TOKEN = "jwtToken";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${TOKEN}` },
  withCredentials: true,
});
