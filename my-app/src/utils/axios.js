import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://akryptbackend.onrender.com/api", // Base URL for your backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for request or response
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle errors globally
//     return Promise.reject(error);
//   }
// );

export default api;
