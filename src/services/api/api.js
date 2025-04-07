import axios from "axios";
import { VITE_BACKEND_URL } from "react-native-dotenv"; // Importando a variável de ambiente

const api = axios.create({
  baseURL: VITE_BACKEND_URL,  // Usando a variável de ambiente
  withCredentials: true, // Define se a requisição deve enviar cookies, caso necessário
});

api.interceptors.request.use(
    (req) => req, 
    (error) => Promise.reject(error)
  );
export default api;
