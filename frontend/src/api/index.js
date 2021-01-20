import axios from 'axios';

axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const getAll = (route) => api.get(route);
export const getAllLike = (route, object) => api.post(`${route}`, object);
export const getById = (route, id) => api.get(`${route}/${id}`);
export const getBy = (route, email, payload) => api.post(`${route}/${email}`, payload);
export const insertNew = (route, payload) => api.post(route, payload);
export const updateById = (route, id, payload) => api.put(`${route}/${id}`, payload);
export const deleteById = (route, id) => api.delete(`${route}/${id}`);
export const getUsersSessions = (route) => api.get(`${route}`);
export const destroySessions = (route) => api.get(`${route}`);


const apis = {
    getAll,
    getById,
    insertNew,
    updateById,
    deleteById,
    getBy,
    getUsersSessions
}

export default apis;