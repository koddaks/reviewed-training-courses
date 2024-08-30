import axios, { AxiosInstance } from 'axios';


const BASE_URL = process.env.API_URL;
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
    const api = axios.create({
      baseURL: BASE_URL,
      timeout: REQUEST_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    api.interceptors.request.use((config) => {
      // console.log('Starting Request', config);
      return config;
    });
  
    api.interceptors.response.use((response) => {
      // console.log('Response:', response);
      return response;
    }, (error) => {
      console.error('Error Response:', error);
      return Promise.reject(error);
    });
  
    return api;
  };

export const api = createAPI();
