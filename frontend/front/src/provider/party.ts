import axios from "axios";

export const apiParty = axios.create({
  baseURL: "http://localhost:3000/api/parties",
  timeout: 1000,
})
