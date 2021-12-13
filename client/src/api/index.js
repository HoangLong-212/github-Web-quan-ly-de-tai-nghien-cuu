import axios from "axios";

const URL = "http://localhost:5000";

//Login
export const login = (payload) => axios.post(`${URL}/Login`, payload);

//Posts
export const fetchPosts = () => axios.get(`${URL}/posts`);
export const findPosts = (payload) => axios.post(`${URL}/posts`, payload);
export const createPosts = (payload) => axios.post(`${URL}/posts`, payload);

