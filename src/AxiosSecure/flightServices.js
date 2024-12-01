import axiosInstance from "./axiosInstance";

// ---------------- Fetch all flights data --------------------------
export const getAllFlights = async () => {
  const response = await axiosInstance.get("/flights/");
  return response.data;
};

//-------------------- Fetch  specific flight data -----------------
export const getFlightById = async (id) => {
  const response = await axiosInstance.get(`/flights/${id}`);
  return response.data;
};

// ------------------- Flights searching data on criteria -------------------
export const searchFlights = async (query) => {
  try {
    const response = await axiosInstance.get("/flights/search", {
      params: query,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// --------------------------- Send new flights data ------------------------
export const addFlight = async (flightData) => {
  const response = await axiosInstance.post("/flights/", flightData);
  return response.data;
};

// ------------------------- Update flight data -------------------
export const updateFlight = async (id, flightData) => {
  const response = await axiosInstance.put(`/flights/${id}`, flightData);
  return response.data;
};

// ----------------------- Delete a flight data ---------------------------
export const deleteFlight = async (id) => {
  const response = await axiosInstance.delete(`/flights/${id}`);
  return response.data;
};
