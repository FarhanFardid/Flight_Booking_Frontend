import { FaThumbsUp } from "react-icons/fa";
import { MdCancel, MdDelete } from "react-icons/md";

const AdminBookingManagementList = ({ booking, index, triggerRefetch }) => {
  const {
    _id,
    flightId,
    userId,
    numberOfSeats,
    totalPrice,
    bookingStatus,
    createdAt,
  } = booking;
  return (
    <tr className="font-semibold">
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{_id}</div>
      </td>
      <td>{flightId}</td>
      <td>{userId}</td>
      <td>{numberOfSeats}</td>
      <td>{totalPrice}</td>
      <td>{createdAt}</td>
      <td>{bookingStatus}</td>
      <td>
        <button
          onClick={() => console.log(_id)}
          className="btn-xs btn-circle bg-blue-600 text-white hover:bg-blue-900"
        >
          {" "}
          <FaThumbsUp className="w-4 h-4 mx-auto font-bold" />
        </button>
      </td>
      <td>
        <button
          onClick={() => console.log(_id)}
          className="btn-xs btn-circle bg-red-500 text-white hover:bg-orange-900"
        >
          {" "}
          <MdCancel className="w-4 h-4 mx-auto font-bold" />
        </button>
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
