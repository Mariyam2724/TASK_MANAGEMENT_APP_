import axios from "axios";

const API = axios.create({
  baseURL: "https://task-management-app-csd3.onrender.com/api",
});

export default API;