import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const apiInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
})

export const login = (data) => apiInstance.post('/auth/login', data)
export const signup = (data) => apiInstance.post('/auth/signup', data)
export const logout = (data) => apiInstance.get('/auth/logout')
export const refreshToken = () => apiInstance.get('/auth/refresh-token');