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
export const deletePosts = (id) => axios.delete(`${URL}/posts/${id}`);
export const updatePosts = (payload) =>  axios.patch(`${URL}/posts/${payload._id}`, payload);

//Project
export const fetchProjects = () => axios.get(`${URL}/Projects`);
export const createProjects = (payload) => axios.post(`${URL}/Projects`, payload);
export const updateProjects = (payload) => axios.patch(`${URL}/Projects/${payload._id}`, payload);
//Teams
export const fetchTeams = () => axios.get(`${URL}/Teams`);
export const createTeams = (payload) => axios.post(`${URL}/Teams`, payload);
// export const createUser = (payload) =>
//   axios.post(`${URL}/Users`, payload);
//Faculty

export const fetchFaculty = () => axios.get(`${URL}/Faculty`);
export const createFaculty = (payload) => axios.post(`${URL}/Faculty`, payload);
export const updateFaculty = (payload) => axios.patch(`${URL}/Faculty/${payload._id}`, payload);


export const fetchInfo = () => axios.get(`${URL}/Info`);
export const createInfo = (payload) => axios.post(`${URL}/Info`, payload);
export const updateInfo = (payload) => axios.patch(`${URL}/Info/${payload._id}`, payload);

//Extend
export const fetchExtends= () => axios.get(`${URL}/Extends`);
export const createExtends = (payload) => axios.post(`${URL}/Extends`, payload);
export const updateExtends = (payload) => axios.patch(`${URL}/Extends/${payload._id}`, payload);

//Cancel
export const fetchCancels= () => axios.get(`${URL}/Cancels`);
export const createCancels = (payload) => axios.post(`${URL}/Cancels`, payload);
export const updateCancels = (payload) => axios.patch(`${URL}/Cancels/${payload._id}`, payload);
//#endregion

