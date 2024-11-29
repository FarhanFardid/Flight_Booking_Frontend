import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router";

const AvailableFlightList = ({ flight, index }) => {
  const { flight_id, flight_number, airline, origin, destination, date } =
    flight;
  return (
    <tr>
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{flight_id}</div>
      </td>
      <td>{airline}</td>
      <td>{flight_number}</td>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{date}</td>
      <td>
        <Link to="/">
          <button
            onClick={() => console.log(id)}
            className="btn-xs btn-circle bg-blue-600 text-white hover:bg-blue-900"
          >
            {" "}
            <FaArrowCircleRight className="w-4 h-4 mx-auto font-bold" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AvailableFlightList;
