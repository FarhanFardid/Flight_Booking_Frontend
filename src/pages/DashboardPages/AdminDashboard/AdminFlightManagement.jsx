import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";
import AdminFlightManagementList from "./AdminFlightManagementList";

const AdminFlightManagement = () => {
  const flightsInfo = [
    {
      flightId: 1,
      airline: "Air India",
      flightNum: "AI-203",
      origin: "New Delhi",
      destination: "Mumbai",
      date: "2024-12-15",
      time: "10:30",
      seats: 150,
      price: 120,
    },
    {
      flightId: 2,
      airline: "British Airways",
      flightNum: "BA-456",
      origin: "London Heathrow",
      destination: "New York JFK",
      date: "2024-12-20",
      time: "14:45",
      seats: 200,
      price: 750,
    },
    {
      flightId: 3,
      airline: "Emirates",
      flightNum: "EK-789",
      origin: "Dubai",
      destination: "Singapore",
      date: "2024-12-18",
      time: "06:15",
      seats: 180,
      price: 950,
    },
    {
      flightId: 4,
      airline: "United Airlines",
      flightNum: "UA-112",
      origin: "San Francisco",
      destination: "Los Angeles",
      date: "2024-12-22",
      time: "09:00",
      seats: 130,
      price: 220,
    },
    {
      flightId: 5,
      airline: "Lufthansa",
      flightNum: "LH-330",
      origin: "Frankfurt",
      destination: "Tokyo Narita",
      date: "2024-12-25",
      time: "20:30",
      seats: 250,
      price: 1100,
    },
  ];

  return (
    <div
      className="custom-bg bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="Flights Management Dashboard"
          sub="Streamline and Effortlessly Manage Flights"
        ></Title>
      </div>
      <div className="w-full mx-auto p-3 md:p-4 my-5 md:my-8 bg-white bg-opacity-50 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-blue-600 font-semibold text-lg md:text-4xl py-3 md:py-5">
            All Flight List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black">
                <th>Sl No.</th>
                <th>Flight Id</th>
                <th>Airline Company</th>
                <th>Flight No.</th>
                <th>Flight Origin</th>
                <th>Flight Destination</th>
                <th>Date</th>
                <th>Time</th>
                <th>Available Seats</th>
                <th>Ticket Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {flightsInfo.map((f, index) => (
                <AdminFlightManagementList
                  key={f.flightId}
                  flight={f}
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

export default AdminFlightManagement;
