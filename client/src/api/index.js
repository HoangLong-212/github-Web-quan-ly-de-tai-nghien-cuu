import axios from 'axios';

const URL = "http://localhost:5000";

//#region User
export const login = (payload) => axios.post(`${URL}/Login`, payload);

// export const createUser = (payload) =>
//   axios.post(`${URL}/Users`, payload);

// export const updateUser = (payload) =>
//   axios.patch(`${URL}/Users/${payload._id}`, payload);
//#endregion