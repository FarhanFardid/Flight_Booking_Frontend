import { useForm } from "react-hook-form";
import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";
import { useLoaderData, useNavigate } from "react-router";
import { updateFlight } from "../../../AxiosSecure/flightServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminFlightUpdate = () => {
  const navigate = useNavigate();
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const airline = data.airline;
    const flightNumber = data.flightNum;
    const origin = data.origin;
    const destination = data.destination;
    const date = data.date;
    const time = data.time;
    const availableSeats = data.seats;
    const price = data.price;
    const updatedFlightData = {
      flightNumber,
      airline,
      origin,
      destination,
      date: new Date(date).toISOString(),
      time,
      price,
      availableSeats,
    };
    console.log(updatedFlightData);
    try {
      const response = await updateFlight(_id, updatedFlightData);
      toast.success("Flight Data Updated Successfully");
      console.log("Response:", response);
      navigate("/dashboard/adminFlightManagement");
    } catch (err) {
      console.error("Error details:", err.response?.data || err.message);
      toast.error("Flight Data Update Failed");
    }
  };
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="Update Flight Details"
          sub="Efficiently Manage and Modify Flight Information"
        ></Title>
      </div>
      <div className="w-full md:my-14 mx-auto flex justify-center">
        <div className="bg-black bg-opacity-70 border-solid rounded-2xl w-full p-6 mx-auto my-8 md:p-8 md:m-8 ">
          <h1 className="text-center font-semibold text-white text-xl md:text-3xl mb-6">
            Flight Information Update
          </h1>
          <div className="flex items-center justify-center mt-8  text-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-sm md:text-lg font-medium grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Airline Company (Not Changeable)</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="airline"
                    readOnly
                    defaultValue={airline}
                    placeholder="Enter Airline Company"
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Flight Number (Not Changeable)</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="flightNumber"
                    placeholder="Enter Flight Number"
                    readOnly
                    defaultValue={flightNumber}
                  />
                </label>
              </div>

              <div className="col-span-1">
                <label>
                  <p className="mb-2">Flight Departure City:</p>
                  <select
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    defaultValue={origin}
                    name="origin"
                    {...register("origin", { required: true })}
                  >
                    <option value="">Enter Departure City </option>
                    <option value="Dubai">Dubai</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Doha">Doha</option>
                    <option value="Kuwait City">Kuwait City</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="New York">New York</option>
                  </select>
                  {errors.origin && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Departure City field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Flight Destination City:</p>
                  <select
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    defaultValue={destination}
                    name="destination"
                    {...register("destination", { required: true })}
                  >
                    <option value="">Enter Destination City </option>
                    <option value="Jeddah">Jeddah</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="London">London</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Manchester">Manchester</option>
                  </select>
                  {errors.destination && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Destination City field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Flight Date:</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="date"
                    name="date"
                    placeholder="Enter Travel Date"
                    {...register("date", {
                      required: true,
                      validate: (value) =>
                        new Date(value) >= new Date() ||
                        "Date cannot be in the past",
                    })}
                  />
                  {errors.date && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Date field is required & Date can't be in the
                      past
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Departure Time:</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="time"
                    name="time"
                    placeholder="Enter Departure Time"
                    {...register("time", { required: true })}
                  />
                  {errors.time && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Time field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Available Seats :</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="number"
                    name="seats"
                    placeholder="Enter Available Seats"
                    min={0}
                    max={300}
                    defaultValue={availableSeats}
                    {...register("seats", { required: true })}
                  />
                  {errors.seats && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Seats field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Ticket Price (USD):</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="number"
                    name="price"
                    placeholder="Enter Ticket Price"
                    defaultValue={price}
                    min={100}
                    max={5000}
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Price field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-full flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-black text-white rounded-lg font-bold hover:bg-slate-700 w-full md:w-48 px-6 py-3 text-xs md:text-base hover:scale-105 transition-transform"
                >
                  Update Flight
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFlightUpdate;
