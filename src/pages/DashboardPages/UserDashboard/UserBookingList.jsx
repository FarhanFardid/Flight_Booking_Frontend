import { MdCancel } from "react-icons/md";

const UserBookingList = ({ booking, index }) => {
  const { _id, flightId, numberOfSeats, totalPrice, bookingStatus, createdAt } =
    booking;
  return (
    <tr className="font-semibold">
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div className="font-semibold">{_id}</div>
      </td>
      <td>{flightId}</td>
      <td>{numberOfSeats}</td>
      <td>{totalPrice}</td>
      <td>{createdAt}</td>
      <td>{bookingStatus}</td>
      <td>
        <button
          onClick={() => {
            alert(
              "This Button is not functional yet. Development Ongoing. Please be patience."
            );
          }}
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
