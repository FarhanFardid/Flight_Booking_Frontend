import axiosInstance from "./axiosInstance";

// ---------------- Fetch all flights data --------------------------
export const getAllFlights = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};

//-------------------- Fetch  specific flight data -----------------
export const getFlightById = async (id) => {
  const response = await axiosInstance.get(`/${id}`);
  return response.data;
};

// ------------------- Flights searching data on criteria -------------------
export const searchFlights = async (query) => {
  try {
    const response = await axiosInstance.get("/search", {
      params: query, 
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// --------------------------- Send new flights data ------------------------
export const addFlight = async (flightData) => {
  const response = await axiosInstance.post("/", flightData);
  return response.data;
};

// ------------------------- Update flight data -------------------
export const updateFlight = async (id, flightData) => {
  const response = await axiosInstance.put(`/${id}`, flightData);
  return response.data;
};

// ----------------------- Delete a flight data ---------------------------
export const deleteFlight = async (id) => {
  const response = await axiosInstance.delete(`/${id}`);
  return response.data;
};
