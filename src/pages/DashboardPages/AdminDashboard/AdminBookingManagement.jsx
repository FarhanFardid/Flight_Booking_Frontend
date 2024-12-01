import { useEffect, useState } from "react";
import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";
import AdminBookingManagementList from "./AdminBookingManagementList";
import { getAllBookings } from "../../../AxiosSecure/bookingServices";
import { toast } from "react-toastify";

const AdminBookingManagement = () => {
  const [bookingsInfo, setBookingsInfo] = useState([]);
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllBookings();
        console.log("Response:", response);
        setBookingsInfo(response);
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Flights Data Load Failed");
      }
    };
    fetchData();
  }, [refetchTrigger]);
  const triggerRefetch = () => {
    setRefetchTrigger(!refetchTrigger);
  };
  console.log(bookingsInfo);

  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="Flight Bookings Management"
          sub="Efficiently Oversee and Organize All Flight Reservations in Your System"
        ></Title>
      </div>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-50 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-blue-600 font-semibold text-lg md:text-4xl py-3 md:py-5">
            All Booking List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Booking Id</th>
                <th>Flight Id</th>
                <th>User Id.</th>
                <th>Number of. Seats</th>
                <th>Total Price (USD)</th>
                <th>Booking Time</th>
                <th>Status</th>
                <th>Confirm</th>
                <th>Cancel</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {bookingsInfo.map((b, index) => (
                <AdminBookingManagementList
                  key={b._id}
                  booking={b}
                  index={index}
                  triggerRefetch={triggerRefetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBookingManagement;
