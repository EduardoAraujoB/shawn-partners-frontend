import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shawn-partners-backend.herokuapp.com/api',
});

export default api;
