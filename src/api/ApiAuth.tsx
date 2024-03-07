import axios from "axios";
import { isConstructorDeclaration } from "typescript";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

console.log("url", baseURL);

const ApiAuth = axios.create({
  baseURL,
  headers: {
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Accept: "application/x-www-form-urlencoded",
  },
});

export default ApiAuth;
