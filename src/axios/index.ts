import axios from "axios";

// Create a custom axios instance

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request before sending
    // Example: Add Authorization token to headers
    //   const token = localStorage.getItem('auth_token');
    //   if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    //   }
    return config; // Important: return the config
  },
  (error) => {
    // Handle any request errors before sending
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response before returning it to the caller
    return response;
  },
  (error) => {
    // Handle any response errors globally
    if (error.response && error.response.status === 401) {
      // Handle unauthorized (401) errors, e.g., log out user, redirect to login page
      console.error("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error); // Always return the error
  }
);

export default axiosInstance;
