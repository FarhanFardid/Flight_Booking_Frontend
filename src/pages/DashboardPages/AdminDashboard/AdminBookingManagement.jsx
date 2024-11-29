import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";
import AdminBookingManagementList from "./AdminBookingManagementList";

const AdminBookingManagement = () => {
  const bookingInfo = [
    {
      bookingId: 101,
      flightId: 1,
      flightNo: "AI-203",
      seats: 2,
      price: 1500,
      status: "Confirmed",
      userId: 1001,
      userEmail: "user1@example.com",
    },
    {
      bookingId: 102,
      flightId: 2,
      flightNo: "BA-456",
      seats: 1,
      price: 900,
      status: "Confirmed",
      userId: 1002,
      userEmail: "user2@example.com",
    },
    {
      bookingId: 103,
      flightId: 3,
      flightNo: "EK-789",
      seats: 4,
      price: 3200,
      status: "Pending",
      userId: 1003,
      userEmail: "user3@example.com",
    },
    {
      bookingId: 104,
      flightId: 4,
      flightNo: "UA-112",
      seats: 3,
      price: 2100,
      status: "Cancelled",
      userId: 1004,
      userEmail: "user4@example.com",
    },
    {
      bookingId: 105,
      flightId: 5,
      flightNo: "LH-330",
      seats: 2,
      price: 1800,
      status: "Confirmed",
      userId: 1005,
      userEmail: "user5@example.com",
    },
  ];

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
                <th>Flight No.</th>
                <th>User Id.</th>
                <th>User Email.</th>
                <th>Number of. Seats</th>
                <th>Total Price (USD)</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {bookingInfo.map((b, index) => (
                <AdminBookingManagementList
                  key={b.bookingId}
                  booking={b}
                  index={index}
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
