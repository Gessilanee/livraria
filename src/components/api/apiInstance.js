const axios = require('axios');

const newLocal = 'http://localhost:3000/livros';
const axiosInstance = axios.create({
    baseURL: newLocal,
});

export default axiosInstance;