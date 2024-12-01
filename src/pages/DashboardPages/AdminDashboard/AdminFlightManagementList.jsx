import { FaArrowCircleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { deleteFlight } from "../../../AxiosSecure/flightServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminFlightManagementList = ({ flight, index, triggerRefetch }) => {
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
  const formatDate = (date) => {
    const modDate = new Date(date);
    return modDate.toISOString().split("T")[0];
  };

  const handleFlightDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this flight?"
    );
    if (confirmDelete) {
      try {
        const response = await deleteFlight(id);
        toast.success("Flight Deleted Successfully");
        console.log("Response:", response);
        triggerRefetch();
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Flight Deletion Failed");
      }
    } else {
      console.log("Deletion canceled.");
    }
  };

  return (
    <tr className="font-semibold text-black text-center">
      <th>
        <label>{index + 1}.</label>
      </th>
      <td>
        <div>{_id}</div>
      </td>
      <td>{airline}</td>
      <td>{flightNumber}</td>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{formatDate(date)}</td>
      <td>{time}</td>
      <td>{availableSeats}</td>
      <td>{price} $</td>
      <td>
        <Link to={`/dashboard/adminFlightUpdate/${_id}`}>
          <button
            onClick={() => console.log(_id)}
            className="btn-xs md:btn-sm btn-circle bg-blue-600 text-white hover:bg-blue-900"
          >
            {" "}
            <FaArrowCircleUp className="h-4 w-4 md:w-5 md:h-5 mx-auto font-bold" />
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => {
            handleFlightDelete(_id);
          }}
          className="btn-xs md:btn-sm btn-circle bg-red-700 text-white hover:bg-red-900"
        >
          {" "}
          <MdDelete className="h-4 w-4 md:w-5 md:h-5 mx-auto font-bold " />
        </button>
      </td>
    </tr>
  );
};

export default AdminFlightManagementList;
