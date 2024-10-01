import axios from "axios";

// const REACT_BACKEND_URL = "http://localhost:8080/api"; //local
const REACT_BACKEND_URL = ""; //production

const restClient = axios.create({
  baseURL: REACT_BACKEND_URL,
});

export default restClient;
