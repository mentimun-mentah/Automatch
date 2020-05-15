import axios from "axios";

const instance = axios.create({
  baseURL: process.env.apiURL,
});

export default instance;

