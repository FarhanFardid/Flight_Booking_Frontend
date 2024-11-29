import { useForm } from "react-hook-form";
import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";

const AdminFlightUpdate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const flightDetails = {
    flight_id: 1,
    flight_number: "AI-203",
    airline: "Air India",
    origin: "New Delhi, India",
    destination: "London, UK",
    date: "2024-12-15",
    flight_time: "10:30 AM", // Departure time
    duration: "9h 30m", // Total duration
    price: 750, // Price in USD
    available_seats: 45, // Number of available seats
  };

  const onSubmit = (data) => {
    const airline = data.airline;
    const flightNum = data.flightNum;
    const seats = data.seats;
    const price = data.price;

    // console.log(data);
    const updatedInfo = {
      airline,
      flightNum,
      seats,
      price,
    };
    // console.log(updateInfo);
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
                    defaultValue={flightDetails.airline}
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
                    name="flightNum"
                    placeholder="Enter Flight Number"
                    readOnly
                    defaultValue={flightDetails.flight_number}
                  />
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
                    defaultValue={flightDetails.available_seats}
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
                    defaultValue={flightDetails.price}
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
