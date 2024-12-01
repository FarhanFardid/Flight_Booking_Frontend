import { useContext, useEffect, useState } from "react";
import backgroundImage from "../../../assets/images/planeImg/plane1.jpg";
import Title from "../../../components/Title";
import UserBookingList from "./UserBookingList";
import { getUserBookings } from "../../../AxiosSecure/bookingServices";
import { AuthContext } from "../../../providers/AuthProvider/AuthContext";

const UserBooking = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const userId = user?.id;
  console.log(userId);
  const [bookingsInfo, setBookingsInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserBookings(userId);
        setBookingsInfo(response);
      } catch (err) {
        console.error(
          "Error fetching bookings:",
          err.response?.data || err.message
        );
      }
    };

    fetchData();
  }, [userId]);
  console.log(bookingsInfo);

  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="My Bookings"
          sub="Effortlessly Track and Manage Your Flight Reservations"
        ></Title>
      </div>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-50 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-blue-600 font-semibold text-lg md:text-4xl py-3 md:py-5">
            My Booking List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Booking Id</th>
                <th>Flight Id</th>
                <th>Number of. Seats</th>
                <th>Total Price (USD)</th>
                <th>Booking Time</th>
                <th>Status</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {bookingsInfo.map((b, index) => (
                <UserBookingList key={b._id} booking={b} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserBooking;
