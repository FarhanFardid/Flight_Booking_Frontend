import Title from "../../../components/Title";
import AvailableFlightList from "./AvailableFlightList";

const AvailableFlights = () => {
  const flightDetails = [
    {
      flight_id: 1,
      flight_number: "AI-203",
      airline: "Air India",
      origin: "New Delhi, India",
      destination: "London, UK",
      date: "2024-12-15",
    },
    {
      flight_id: 2,
      flight_number: "UA-987",
      airline: "United Airlines",
      origin: "New York, USA",
      destination: "Tokyo, Japan",
      date: "2024-12-18",
    },
    {
      flight_id: 3,
      flight_number: "BA-456",
      airline: "British Airways",
      origin: "London, UK",
      destination: "Paris, France",
      date: "2024-12-20",
    },
    {
      flight_id: 4,
      flight_number: "SQ-321",
      airline: "Singapore Airlines",
      origin: "Singapore",
      destination: "Sydney, Australia",
      date: "2024-12-25",
    },
    {
      flight_id: 5,
      flight_number: "EK-411",
      airline: "Emirates",
      origin: "Dubai, UAE",
      destination: "New York, USA",
      date: "2024-12-30",
    },
  ];
  return (
    <>
      <div className="pt-8 md:pt-16">
        <Title
          main="Find Your Perfect Flight"
          sub="Compare and choose the flight that suits your schedule and budget."
        ></Title>
      </div>
      <div className="w-full  mx-auto p-3 md:p-4 my-5 md:my-8  bg-black bg-opacity-20 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-blue-600 font-semibold text-lg md:text-4xl py-3 md:py-5">
            Flights List
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black md:text-base">
                <th>Sl No.</th>
                <th>Flight Id.</th>
                <th>Airline Company</th>
                <th>Flight No.</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Date</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {flightDetails.map((flight, index) => (
                <AvailableFlightList
                  key={flight.flight_id}
                  flight={flight}
                  index={index}
                ></AvailableFlightList>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AvailableFlights;