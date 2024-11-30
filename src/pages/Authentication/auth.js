import axios from 'axios';

// localhost url
const apiUrl = 'http://localhost:3000/api/auth';

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