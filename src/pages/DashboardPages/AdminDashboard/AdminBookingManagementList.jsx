import { FaThumbsUp } from "react-icons/fa";
import { MdCancel, MdDelete } from "react-icons/md";
import {
  deleteBooking,
  updateBooking,
} from "../../../AxiosSecure/bookingServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleBookingConfirm = async (id) => {
    const confirmApprove = window.confirm(
      "Are you sure you want to Confirm this Booking?"
    );
    if (confirmApprove) {
      const updatedBookingInfo = { bookingStatus: "Confirmed" };
      try {
        const response = await updateBooking(id, updatedBookingInfo);
        toast.success("Booking is Confirmed");
        console.log("Response:", response);
        triggerRefetch();
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Booking Confirmation Failed");
      }
    } else {
      console.log("Confirmation canceled.");
    }
  };
  const handleBookingCancel = async (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to Cancel this Booking?"
    );
    if (confirmCancel) {
      const updatedBookingInfo = { bookingStatus: "Cancelled" };
      try {
        const response = await updateBooking(id, updatedBookingInfo);
        toast.success("Booking is Cancelled");
        console.log("Response:", response);
        triggerRefetch();
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Booking Cancellation Failed");
      }
    } else {
      console.log("Cancellation avoided.");
    }
  };
  const handleBookingDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (confirmDelete) {
      try {
        const response = await deleteBooking(id);
        toast.success("Booking Deleted Successfully");
        console.log("Response:", response);
        triggerRefetch();
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Booking Deletion Failed");
      }
    } else {
      console.log("Deletion canceled.");
    }
  };
  return (
    <tr className="font-semibold text-center text-black">
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div>{_id}</div>
      </td>
      <td>{flightId}</td>
      <td>{userId}</td>
      <td>{numberOfSeats}</td>
      <td>{totalPrice} $</td>
      <td>{createdAt}</td>
      <td>{bookingStatus}</td>
      <td>
        <button
          onClick={() => {
            handleBookingConfirm(_id);
          }}
          className="btn-xs md:btn-sm btn-circle bg-blue-600 text-white hover:bg-blue-900"
        >
          {" "}
          <FaThumbsUp className="w-4 h-4  md:h-5 md:w-5 mx-auto font-bold" />
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            handleBookingCancel(_id);
          }}
          className="btn-xs md:btn-sm btn-circle bg-red-500 text-white hover:bg-orange-900"
        >
          {" "}
          <MdCancel className="w-4 h-4  md:h-5 md:w-5 mx-auto font-bold" />
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            handleBookingDelete(_id);
          }}
          className="btn-xs md:btn-sm btn-circle bg-red-700 text-white hover:bg-red-900"
        >
          {" "}
          <MdDelete className="w-4 h-4  md:h-5 md:w-5 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default AdminBookingManagementList;
