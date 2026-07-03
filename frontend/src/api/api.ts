// src/api/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Interceptor de requisição: injeta o token automaticamente
api.interceptors.request.use((config) => {
  // Use a chave que você definiu: '@InovaConnect:token'
  const token = localStorage.getItem('@InovaConnect:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor de resposta: se o backend disser 401, expulsa o usuário
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('@InovaConnect:token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);