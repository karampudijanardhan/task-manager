import axios from "axios";

const api = axios.create({
  baseURL: "https://task-manager-9dod.onrender.com/api"
});

export default api;