import { MdCancel } from "react-icons/md";

const UserBookingList = ({ booking, index }) => {
  const { bookingId, flightId, flightNo, seats, price, status } = booking;
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
      <td>{seats}</td>
      <td>{price}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => console.log(_id)}
          className="btn-xs btn-circle bg-red-700 text-white hover:bg-red-900"
        >
          {" "}
          <MdCancel className="w-4 h-4 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default UserBookingList;
