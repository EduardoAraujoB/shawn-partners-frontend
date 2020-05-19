import axios from 'axios';

const api = axios.create({
  baseURL: 'http://shawn-partners-backend.herokuapp.com/api',
});

export default api;
