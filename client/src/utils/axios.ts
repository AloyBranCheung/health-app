import axios from "axios";

const bearerToken = `Bearer ${sessionStorage.getItem("token")}`;
const _id = sessionStorage.getItem("_id");

const withAuthServer = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  data: {
    _id,
  },
  headers: {
    Authorization: bearerToken,
  },
});

withAuthServer.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
    config.headers.data = {
      _id: sessionStorage.getItem("_id"),
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default withAuthServer;
