import { FaArrowCircleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const AdminBookingManagementList = ({ booking, index }) => {
  const {
    bookingId,
    flightId,
    flightNo,
    seats,
    price,
    status,
    userId,
    userEmail,
  } = booking;
  return (
    <tr className="font-semibold">
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{bookingId}</div>
      </td>
      <td>{flightId}</td>
      <td>{flightNo}</td>
      <td>{userId}</td>
      <td>{userEmail}</td>
      <td>{seats}</td>
      <td>{price}</td>
      <td>{status}</td>
      <td>
        <Link to="/dashboard/adminBookingUpdate">
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

export default AdminBookingManagementList;
