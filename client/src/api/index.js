import axios from "axios";

const URL = "http://localhost:5000";

//Login
export const login = (payload) => axios.post(`${URL}/Login`, payload);
<<<<<<< HEAD

//Posts
export const fetchPosts = () => axios.get(`${URL}/posts`);
export const findPosts = (payload) => axios.post(`${URL}/posts`, payload);
export const createPosts = (payload) => axios.post(`${URL}/posts`, payload);

=======
// export const createUser = (payload) =>
//   axios.post(`${URL}/Users`, payload);

// export const updateUser = (payload) =>
//   axios.patch(`${URL}/Users/${payload._id}`, payload);

export const fetchInfo = () => axios.get(`${URL}/Info`);
export const createInfo = (payload) => axios.post(`${URL}/Info`, payload);
export const updateInfo = (payload) => axios.patch(`${URL}/Info/${payload._id}`, payload);
//#endregion
>>>>>>> origin/Hon
