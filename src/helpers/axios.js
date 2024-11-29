import axios from "axios";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); 
      history.push("/"); 
    }
    return Promise.reject(error);
  }
);

export const logout = () => {
  localStorage.removeItem("token");
  history.push("/");
};

export default axiosClient;