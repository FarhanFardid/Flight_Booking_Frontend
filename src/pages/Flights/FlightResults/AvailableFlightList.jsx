import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router";

const AvailableFlightList = ({ flight, index }) => {
  const { _id, flightNumber, airline, origin, destination, date } = flight;
  const formatDate = (date) => {
    const modDate = new Date(date);
    return modDate.toISOString().split("T")[0];
  };
  return (
    <tr className="font-semibold text-black text-center">
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>{airline}</td>
      <td>{flightNumber}</td>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{formatDate(date)}</td>
      <td>
        <Link to={`/flightDetails/${_id}`}>
          <button
            onClick={() => console.log(_id)}
            className="btn-xs md:btn-sm btn-circle bg-blue-600 text-white hover:bg-blue-900"
          >
            {" "}
            <FaArrowCircleRight className="h-4 w-4 md:w-5 md:h-5 mx-auto font-bold" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AvailableFlightList;
