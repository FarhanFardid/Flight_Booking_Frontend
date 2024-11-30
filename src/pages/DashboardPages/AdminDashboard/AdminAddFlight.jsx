import { useForm } from "react-hook-form";
import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";
import { addFlight } from "../../../AxiosSecure/flightServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
const AdminAddFlight = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
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

    const flightData = {
      flightNumber,
      airline,
      origin,
      destination,
      date: new Date(date).toISOString(),
      time,
      price,
      availableSeats,
    };
    console.log(flightData);

    try {
      const response = await addFlight(flightData);
      toast.success("Flight Added Successfully");
      console.log("Response:", response);
      reset();
      navigate("/dashboard/adminFlightManagement");
    } catch (err) {
      console.error("Error details:", err.response?.data || err.message);
      toast.error("Flight Add Failed");
    }
  };
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="Add New Flight"
          sub="Expand Your Offerings: Add New Flight Details to Your System"
        ></Title>
      </div>
      <div className="w-full md:my-14 mx-auto flex justify-center">
        <div className="bg-black bg-opacity-70 border-solid rounded-2xl w-full p-6 mx-auto my-8 md:p-8 md:m-8 ">
          <h1 className="text-center font-semibold text-white text-xl md:text-3xl mb-6">
            Flight Addition
          </h1>
          <div className="flex items-center justify-center mt-8  text-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-sm md:text-lg font-medium grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Airline Company:</p>
                  <select
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="airline"
                    {...register("airline", { required: true })}
                  >
                    <option value="">Enter Airline Company</option>
                    <option value="Emirates">Emirates</option>
                    <option value="Bangladesh">Bangladesh_Biman</option>
                    <option value="Qatar Airways">Qatar_Airways</option>
                    <option value="Kuwait Airways">Kuwait_Airways</option>
                    <option value="India Airways">India_Airways</option>
                    <option value="United Airlines">United_Airlines</option>
                  </select>
                  {errors.airline && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Airline field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Flight Number:</p>
                  <select
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="flightNum"
                    {...register("flightNum", { required: true })}
                  >
                    <option value="">Enter Flight Number</option>
                    <option value="EK-707">EK-707</option>
                    <option value="BB-777">BB-777</option>
                    <option value="QA-709">QA-709</option>
                    <option value="KA-711">KA-711</option>
                    <option value="IA-077">IA-077</option>
                    <option value="UA-007">UA-007</option>
                  </select>
                  {errors.flightNum && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: FlightNum field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                {" "}
                <label>
                  <p className="mb-2">Flight Departure City:</p>
                  <select
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="origin"
                    {...register("origin", { required: true })}
                  >
                    <option value="">Enter Departure City </option>
                    <option value="Dubai">Dubai</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Doha">Doha</option>
                    <option value="Kuwait_City">Kuwait City</option>
                    <option value="New_Delhi">New Delhi</option>
                    <option value="New_York">New York</option>
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
                  Add Flight
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddFlight;
