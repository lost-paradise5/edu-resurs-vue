import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_IP_SERVER || 'http://localhost:3000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;