import axios from 'axios';

const API = axios.create({
  baseURL: 'http://77.110.104.90:8000/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;