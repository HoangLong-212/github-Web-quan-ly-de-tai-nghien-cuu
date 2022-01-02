import axios from "axios";

const URL = "http://localhost:5000";

//Login
export const login = (payload) => axios.post(`${URL}/Login`, payload);

//User

export const fetchUser = () => axios.get(`${URL}/Users`);
export const createUser = (payload) => axios.post(`${URL}/Users`, payload);
export const updateUser = (payload) => axios.patch(`${URL}/Users/${payload._id}`, payload);

//Posts
export const fetchPosts = () => axios.get(`${URL}/posts`);
export const findPosts = (payload) => axios.post(`${URL}/posts`, payload);
export const createPosts = (payload) => axios.post(`${URL}/posts`, payload);

//Faculty

export const fetchFaculty = () => axios.get(`${URL}/Faculty`);
export const createFaculty = (payload) => axios.post(`${URL}/Faculty`, payload);
export const updateFaculty = (payload) => axios.patch(`${URL}/Faculty/${payload._id}`, payload);


export const fetchInfo = () => axios.get(`${URL}/Info`);
export const createInfo = (payload) => axios.post(`${URL}/Info`, payload);
export const updateInfo = (payload) => axios.patch(`${URL}/Info/${payload._id}`, payload);
//#endregion
