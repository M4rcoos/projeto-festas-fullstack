import axios from "axios";

export const apiParty = axios.create({
  baseURL: "https://api-festa-26127d2de7a6.herokuapp.com/api/parties/",
  timeout: 1000,
})
