import axios from 'axios';

const URL = "http://localhost:5000";

//#region User
export const login = (payload) => axios.post(`${URL}/Login`, payload);
// export const createUser = (payload) =>
//   axios.post(`${URL}/Users`, payload);

// export const updateUser = (payload) =>
//   axios.patch(`${URL}/Users/${payload._id}`, payload);

export const fetchInfo = () => axios.get(`${URL}/Info`);
export const createInfo = (payload) => axios.post(`${URL}/Info`, payload);
export const updateInfo = (payload) => axios.patch(`${URL}/Info/${payload._id}`, payload);
//#endregion