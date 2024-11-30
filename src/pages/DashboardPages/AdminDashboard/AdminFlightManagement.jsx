import { useEffect, useState } from "react";
import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";
import AdminFlightManagementList from "./AdminFlightManagementList";
import { getAllFlights } from "../../../AxiosSecure/flightServices";

const AdminFlightManagement = () => {
  const [flightsInfo, setFlightsInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFlights();
        console.log("Response:", response);
        setFlightsInfo(response);
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Flights Data Load Failed");
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
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
                <th>Ticket Price(USD )</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {flightsInfo.map((f, index) => (
                <AdminFlightManagementList
                  key={f._id}
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
