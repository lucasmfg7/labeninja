import axios from "axios";

export const api = axios.create({
  baseURL: "https://labeninjas.herokuapp.com",
  headers: { Authorization: "a0020a8e-2d39-4e5e-a80d-a73aa6237d61" },
});
