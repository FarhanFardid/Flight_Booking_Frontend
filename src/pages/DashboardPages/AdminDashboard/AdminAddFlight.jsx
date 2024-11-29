import { useForm } from "react-hook-form";
import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";

const AdminAddFlight = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const airline = data.airline;
    const flightNum = data.flightNum;
    const origin = data.origin;
    const destination = data.destination;
    const date = data.date;
    const time = data.time;
    const seats = data.seats;
    const price = data.price;

    // console.log(data);
    const flightInfo = {
      airline,
      flightNum,
      origin,
      destination,
      date,
      time,
      seats,
      price,
    };
    // console.log(flightInfo);
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
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="airline"
                    placeholder="Enter Airline Company"
                    {...register("airline", { required: true })}
                  />
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
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="flightNum"
                    placeholder="Enter Flight Number"
                    {...register("flightNum", { required: true })}
                  />
                  {errors.flightNum && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Flight No. field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                {" "}
                <label>
                  <p className="mb-2">Flight Origin:</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="origin"
                    placeholder="Enter Flight Origin"
                    {...register("origin", { required: true })}
                  />
                  {errors.origin && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Origin field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Flight Destination:</p>
                  <input
                    className="w-full text-black rounded-lg p-2"
                    type="text"
                    name="destination"
                    placeholder="Enter Flight Destination"
                    {...register("destination", { required: true })}
                  />
                  {errors.destination && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Destination field is required
                    </span>
                  )}
                </label>
              </div>
              <div className="col-span-1">
                <label>
                  <p className="mb-2">Travel Date:</p>
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
                    min={1}
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
