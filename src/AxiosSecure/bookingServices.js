import axiosInstance from "./axiosInstance";

// ---------------- Fetch all bookings data --------------------------
export const getAllBookings = async () => {
  const response = await axiosInstance.get("/bookings/");
  return response.data;
};

// ---------------- Fetch  specific user bookings ------------------------
export const getUserBookings = async (userId) => {
  const response = await axiosInstance.get(`/bookings/user/${userId}`);
  return response.data;
};

// ---------------- Create a new booking data------------------------
export const createBooking = async (bookingData) => {
  const response = await axiosInstance.post("/bookings/", bookingData);
  return response.data;
};

// ---------------- Update  booking data ------------------------
export const updateBooking = async (id, bookingData) => {
  const response = await axiosInstance.put(`/bookings/${id}`, bookingData);
  return response.data;
};

// ---------------- Delete a booking (Admin only) ------------------------
export const deleteBooking = async (id) => {
  const response = await axiosInstance.delete(`/bookings/${id}`);
  return response.data;
};
