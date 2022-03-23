import axios from "axios";

export const api = axios.create({
  baseURL: "https://labeninjas.herokuapp.com",
  headers: { Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e" },
});
