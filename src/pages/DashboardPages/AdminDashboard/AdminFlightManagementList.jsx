import { FaArrowCircleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const AdminFlightManagementList = ({ flight, index }) => {
  const {
    _id,
    flightNumber,
    airline,
    origin,
    destination,
    availableSeats,
    price,
    time,
    date,
  } = flight;
  return (
    <tr className="font-semibold text-black">
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{_id}</div>
      </td>
      <td>{airline}</td>
      <td>{flightNumber}</td>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{availableSeats}</td>
      <td>{price}</td>
      <td>
        <Link to={`/dashboard/adminFlightUpdate/${_id}`}>
          <button
            onClick={() => console.log(_id)}
            className="btn-xs btn-circle bg-blue-600 text-white hover:bg-blue-900"
          >
            {" "}
            <FaArrowCircleUp className="w-4 h-4 mx-auto font-bold" />
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => console.log(_id)}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900"
        >
          {" "}
          <MdDelete className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default AdminFlightManagementList;
