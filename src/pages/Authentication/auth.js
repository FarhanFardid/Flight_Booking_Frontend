import axios from "axios";

// localhost url
const apiUrl = "http://localhost:3000/api/auth";

// Reg new user
export const registerUser = async (userData) => {
  const response = await axios.post(`${apiUrl}/register`, userData);
  return response.data;
};

// User login
export const loginUser = async (userData) => {
  const response = await axios.post(`${apiUrl}/login`, userData);
  return response.data;
};

// Get User Details
export const getUserInfo = async (id) => {
  const response = await axios.get(`${apiUrl}/user/${id}`);
  return response.data;
};
// Update User Details
export const updateUserInfo = async (id, userData) => {
  const response = await axios.put(`${apiUrl}/user/${id}`, userData);
  return response.data;
};
