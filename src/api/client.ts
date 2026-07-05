import axios from 'axios';

// 공통 설정 옵션
const AXIOS_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// 일반 게스트 전용
export const publicClient = axios.create(AXIOS_CONFIG);

publicClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error: ', error.response?.data || error.message);
    return Promise.reject(error);
  },
);

// 로그인 유저 전용
export const privateClient = axios.create(AXIOS_CONFIG);

privateClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 인증 에러 로깅
privateClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Private API Error: ', error.response?.data || error.message);
    return Promise.reject(error);
  },
);
