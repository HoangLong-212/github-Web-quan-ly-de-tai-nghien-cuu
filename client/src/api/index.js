import axios from "axios";

const URL = "http://localhost:5000";

//Login
export const login = (payload) => axios.post(`${URL}/Login`, payload);


//Posts
export const fetchPosts = () => axios.get(`${URL}/posts`);
export const findPosts = (payload) => axios.post(`${URL}/posts`, payload);
export const createPosts = (payload) => axios.post(`${URL}/posts`, payload);
export const deletePosts = (id) => axios.delete(`${URL}/posts/${id}`);
export const updatePosts = (payload) =>  axios.patch(`${URL}/posts/${payload._id}`, payload);

//Project
export const fetchProjects = () => axios.get(`${URL}/Projects`);

// export const createUser = (payload) =>
//   axios.post(`${URL}/Users`, payload);

// export const updateUser = (payload) =>
//   axios.patch(`${URL}/Users/${payload._id}`, payload);

export const fetchInfo = () => axios.get(`${URL}/Info`);
export const createInfo = (payload) => axios.post(`${URL}/Info`, payload);
export const updateInfo = (payload) => axios.patch(`${URL}/Info/${payload._id}`, payload);
//#endregion

