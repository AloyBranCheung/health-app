import axios from "axios";

const withAuthServer = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  data: {
    _id: sessionStorage.getItem("_id"),
  },
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export default withAuthServer;
