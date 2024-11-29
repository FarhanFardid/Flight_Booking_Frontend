import { useForm } from "react-hook-form";
import Title from "../../../components/Title";
import backgroundImage from "../../../assets/images/planeImg/bookingImg.jpg";

const FlightBooking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const userDetails = {
    userId: 101,
    userEmail: "user1@gmail.com",
  };
  const flightDetails = {
    flight_id: 1,
    flight_number: "AI-203",
    airline: "Air India",
    origin: "New Delhi, India",
    destination: "London, UK",
    date: "2024-12-15",
    flight_time: "10:30 AM",
    duration: "9h 30m",
    price: 750,
    available_seats: 45,
  };
  const onSubmit = (data) => {
    const userId = data.userId;
    const email = data.userEmail;
    const flightId = data.flightId;
    const flightNo = data.flightNo;
    const seats = data.seats;

    // console.log(data);
    const bookingInfo = {
      userId,
      email,
      flightId,
      flightNo,
      seats,
    };
    const bookingDetails = {
      userId,
      userEmail,
      flightId,
      flightNo,
      seats,
      price: "",
      status: "Confirmed",
    };
    // console.log(bookingDetails);
  };
  return (
    <>
      {" "}
      <div className="py-8 md:py-14 bg-gradient-to-r from-orange-400 to-slate-500">
        <Title
          main="Flight Booking"
          sub="Secure your seat and enjoy a smooth journey"
        ></Title>
      </div>
      <div
        className="mb-0 w-full bg-cover bg-no-repeat bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="md:w-[50%] w-full md:my-14 mx-auto flex justify-center">
          <div className="bg-black bg-opacity-70 border-solid rounded-2xl w-[22rem] md:w-[34rem] p-6 mx-auto my-8 md:p-8 md:m-8 ">
            <h1 className="text-center font-semibold text-white text-xl md:text-3xl">
              Complete Your Booking Details
            </h1>
            <div className="flex items-center justify-center mt-8  text-white">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-sm md:text-lg font-medium"
              >
                <label>
                  <p className="mb-2">User Id:</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="text"
                      name="userId"
                      placeholder="Enter user Id"
                      readOnly
                      value={userDetails.userId}
                    />
                  </div>
                </label>
                <br />
                <label>
                  <p className="mb-2">User Email:</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="email"
                      name="userEmail"
                      placeholder="Enter your email"
                      readOnly
                      value={userDetails.userEmail}
                    />
                  </div>
                </label>
                <br />
                <label>
                  <p className="mb-2">Flight Id:</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="text"
                      name="flightId"
                      placeholder="Enter flight Id"
                      readOnly
                      value={flightDetails.flight_id}
                    />
                  </div>
                </label>
                <br />
                <label>
                  <p className="mb-2">Flight No. :</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="text"
                      name="flightNo"
                      placeholder="Enter flight No."
                      readOnly
                      value={flightDetails.flight_number}
                    />
                  </div>
                </label>
                <br />
                <label>
                  <p className="mb-2">Number of Seats :</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="number"
                      name="seats"
                      placeholder="Enter No. of seats."
                      {...register("seats", { required: true })}
                    />
                    {errors.seats && (
                      <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                        Warning: No. of seats field is required
                      </span>
                    )}
                  </div>
                </label>
                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="bg-black text-white btn-md rounded-lg font-bold  hover:text-blue hover:bg-slate-700 w-20 px-3 py-2 md:w-48 md:py-3 md:px-6 text-xs md:text-base mt-5 hover:scale-110"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightBooking;
