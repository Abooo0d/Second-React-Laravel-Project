import axios from "axios";
import router from "../router";
const axiosClient = axios.create({
  baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
});
axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
  return config
});
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  }
  ,(error) => {
    const { response } = error;
    if (response.status === 401) {
      // localStorage.removeItem("ACCESS_TOKEN");
      console.log("LogOut Form Axios ");
    }
    throw error;
  });
export default axiosClient;



