import axios from "axios";

// Base URL
const axiosInstance = axios.create({
  // Localhost url
  // baseURL: "http://localhost:3000/api",

  // vercel hosting url
  baseURL: "https://flight-booking-backend-red.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Jwt Token from localstorage
    const token = localStorage.getItem("token");
    if (token) {
      // Attach token to Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
