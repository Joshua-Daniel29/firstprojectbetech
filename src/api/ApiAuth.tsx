import axios from "axios";
import qs from "qs";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const ApiAuth = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
  transformRequest: [(data) => qs.stringify(data)],
});

export default ApiAuth;
