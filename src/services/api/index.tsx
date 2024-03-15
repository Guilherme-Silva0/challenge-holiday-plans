import { getUrl } from "@/lib/getUrl";
import axios from "axios";

const api = axios.create({
  baseURL: getUrl(),
  withCredentials: true,
});

export { api };
