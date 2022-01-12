import axios from 'axios';

 
const baseUrl = 'http://localhost:3001'; 

const apiInstance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
})


// Auth APi
export const login = (data) => apiInstance.post('/auth/login', data)
export const signup = (data) => apiInstance.post('/auth/signup', data)
export const logout = () => apiInstance.get('/auth/logout')
export const refreshToken = (data) => apiInstance.get('/auth/refresh-token');

// Chat Api
export const getPreviousConvo = (data) =>  apiInstance.get('/chat/prev', {
    headers: {
        authorization: `Bearer ${data}`
    }
})