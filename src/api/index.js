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
export const getPreviousConvo = (data) => apiInstance.get('/chat/prev', {
    headers: {
        authorization: `Bearer ${data}`
    }
});

export const createRoom = (data) => {
    axios.post(`${baseUrl}/chat/create-room`, { data:data.id }, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    });
}

//GET User
export const getUser = async (data) => {
    const response = await axios.get(`${baseUrl}/auth/user/${data.name}`, {
        headers: {
            authorization: `Bearer ${data.token}`
        }
    });

    return response;
} 

// Search
export const search = (data) => apiInstance.post(`/auth/search?query=${data}`);