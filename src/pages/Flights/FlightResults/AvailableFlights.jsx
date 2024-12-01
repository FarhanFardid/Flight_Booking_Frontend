import { useEffect, useState } from "react";
import Title from "../../../components/Title";
import AvailableFlightList from "./AvailableFlightList";
import { getAllFlights } from "../../../AxiosSecure/flightServices";
import backgroundImage from "../../../assets/images/planeImg/plane4.jpg";

const AvailableFlights = () => {
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
    <>
      <div
        className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="pt-8 md:pt-16 bg-white bg-opacity-40 text-black">
          <Title
            main="Find Your Perfect Flight"
            sub="Compare and choose the flight that suits your schedule and budget."
          ></Title>
        </div>
        <div className="w-full  mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-40 rounded-lg shadow-lg">
          {/* Table starts */}
          <div className="overflow-x-auto">
            <h1 className="text-center text-blue-950 font-semibold text-lg md:text-4xl py-3 md:py-5">
              Available Flights for Booking
            </h1>
            <table className="table">
              <thead>
                <tr className="text-center font-bold text-black md:text-base">
                  <th>Sl No.</th>
                  <th>Airline Company</th>
                  <th>Flight No.</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Details & Booking</th>
                </tr>
              </thead>
              <tbody className="text-center font-medium">
                {flightsInfo.map((flight, index) => (
                  <AvailableFlightList
                    key={flight._id}
                    flight={flight}
                    index={index}
                  ></AvailableFlightList>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableFlights;
