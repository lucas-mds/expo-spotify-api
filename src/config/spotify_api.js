import axios from 'axios';
import { getItem } from '../utils/storage';


const api = axios.create({
  baseURL: 'https://api.spotify.com/',
});

api.interceptors.request.use(async (config) => {
  const token = await getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;