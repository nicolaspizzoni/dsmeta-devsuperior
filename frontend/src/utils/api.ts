import axios from 'axios';
//?? = coalescencia definindo o valor "http://localhost:8080" como padrao se não houver import.meta.env.VITE_BACKEND_URL
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

export const api = axios.create({
    baseURL: BASE_URL
})