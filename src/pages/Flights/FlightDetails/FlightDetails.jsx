import { Link } from "react-router";
import Title from "../../../components/Title";
import { MdAirplaneTicket } from "react-icons/md";

const FlightDetails = () => {
  const flightDetails = {
    flight_id: 1,
    flight_number: "AI-203",
    airline: "Air India",
    origin: "New Delhi, India",
    destination: "London, UK",
    date: "2024-12-15",
    flight_time: "10:30 AM", // Departure time
    duration: "9h 30m", // Total duration
    price: 750, // Price in USD
    available_seats: 45, // Number of available seats
  };
  return (
    <>
      <div className="pt-8 md:pt-16">
        <Title
          main="Flight Information Overview"
          sub="All the information you need for the selected flight."
        ></Title>
      </div>
      {/* Table Representation  */}
      <div className="w-full  mx-auto p-3 md:p-4 my-5 md:my-8  bg-black bg-opacity-20 rounded-lg shadow-lg">
        {/* Table starts */}
        <div className="overflow-x-auto">
          <h1 className="text-center text-blue-600 font-semibold text-lg md:text-4xl py-3 md:py-5">
            Flight Details
          </h1>
          <table className="table">
            <thead>
              <tr className="text-center font-bold text-black md:text-base">
                <th>Flight Id.</th>
                <th>Airline Company</th>
                <th>Flight No.</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Departure Time</th>
                <th>Travel Duration</th>
                <th>Ticket Price</th>
                <th>Available Seats</th>
                <th>Book Now</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              <tr>
                <td>
                  <div className="font-semibold">{flightDetails.flight_id}</div>
                </td>
                <td>{flightDetails.airline}</td>
                <td>{flightDetails.flight_number}</td>
                <td>{flightDetails.origin}</td>
                <td>{flightDetails.destination}</td>
                <td>{flightDetails.date}</td>
                <td>{flightDetails.flight_time}</td>
                <td>{flightDetails.duration}</td>
                <td>{flightDetails.price}</td>
                <td>{flightDetails.available_seats}</td>
                <td>
                  <Link to="/flightDetails">
                    <button
                      onClick={() => console.log(id)}
                      className="btn-md btn-circle bg-blue-600 text-white hover:bg-blue-900 hover:scale-110"
                    >
                      {" "}
                      <MdAirplaneTicket className="w-8 h-8 mx-auto font-bold" />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FlightDetails;
