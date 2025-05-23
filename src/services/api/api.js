import axios from 'axios';
import { VITE_BACKEND_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: VITE_BACKEND_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (req) => req,
  (error) => Promise.reject(error),
);
export default api;
