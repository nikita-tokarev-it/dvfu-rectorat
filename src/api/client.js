import axios from 'axios';

// Для Vercel используем относительный путь /api
// Для локальной разработки используем localhost:5001
const baseURL = process.env.NODE_ENV === 'production'
  ? '/api'
  : 'http://localhost:5001/api';

const client = axios.create({
  baseURL,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      if (window.location.pathname.startsWith('/admin')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default client;
