import { Link, useLoaderData } from "react-router";
import Title from "../../../components/Title";
import { MdAirplaneTicket } from "react-icons/md";
import backgroundImage from "../../../assets/images/planeImg/plane2.jpg";

const FlightDetails = () => {
  const flightDetails = useLoaderData();
  console.log(flightDetails);
  const {
    _id,
    flightNumber,
    origin,
    destination,
    time,
    date,
    price,
    availableSeats,
    airline,
  } = flightDetails;
  const formatDate = (date) => {
    const modDate = new Date(date);
    return modDate.toISOString().split("T")[0];
  };
  return (
    <>
      <div
        className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="pt-8 md:pt-16 bg-black bg-opacity-10">
          <Title
            main="Flight Information Overview"
            sub="All the information you need for the selected flight."
          ></Title>
        </div>
        {/* Table Representation  */}
        <div className="w-full  mx-auto p-3 md:p-4 my-5 md:my-8  bg-white bg-opacity-70 rounded-lg shadow-lg">
          {/* Table starts */}
          <div className="overflow-x-auto">
            <h1 className="text-center text-blue-600 font-semibold text-lg md:text-4xl py-3 md:py-5">
              Flight Details
            </h1>
            <table className="table">
              <thead>
                <tr className="text-center font-bold text-black md:text-base text-sm">
                  <th>Airline Company</th>
                  <th>Flight No.</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>Departure Time (24h)</th>
                  <th>Ticket Price (USD)</th>
                  <th>Available Seats</th>
                  <th>Book Now</th>
                </tr>
              </thead>
              <tbody className="text-center font-medium">
                <tr className="font-semibold text-black">
                  <td>{airline}</td>
                  <td>{flightNumber}</td>
                  <td>{origin}</td>
                  <td>{destination}</td>
                  <td>{formatDate(date)}</td>
                  <td>{time}</td>
                  <td>{price} $</td>
                  <td>{availableSeats}</td>
                  <td>
                    <Link to={`/flightBooking/${_id} `}>
                      <button
                        onClick={() => console.log(id)}
                        className="btn-sm md:btn-md btn-circle bg-blue-600 text-white hover:bg-blue-900 hover:scale-110"
                      >
                        {" "}
                        <MdAirplaneTicket className="h-5 w-5 md:w-8 md:h-8 mx-auto font-bold" />
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightDetails;
