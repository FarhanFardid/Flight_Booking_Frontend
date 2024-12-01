import { useForm } from "react-hook-form";
import Title from "../../../components/Title";
import backgroundImage from "../../../assets/images/planeImg/bookingImg.jpg";
import { useLoaderData, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthContext";
import { getUserInfo } from "../../Authentication/auth";
import { toast } from "react-toastify";
import { createBooking } from "../../../AxiosSecure/bookingServices";

const FlightBooking = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const userId = user?.id;
  console.log(userId);
  const flightDetails = useLoaderData();
  console.log(flightDetails);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserInfo(userId);
        console.log("Response:", response);
        setUserDetails(response);
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Flights Data Load Failed");
      }
    };
    fetchData();
  }, []);
  console.log(userDetails);
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
    const userId = userDetails._id;
    const flightId = flightDetails._id;
    const flightNo = flightNumber;
    const numberOfSeats = data.seats;
    const totalPrice = numberOfSeats * price;

    const bookingInfo = {
      userId,
      flightId,
      numberOfSeats,
      totalPrice,
      bookingStatus: "Pending",
    };
    console.log(bookingInfo);
    try {
      const response = await createBooking(bookingInfo);
      toast.success("New Booking Added Successfully");
      console.log("Response:", response);
      reset();
      navigate("/dashboard/userBooking");
    } catch (err) {
      console.error("Error details:", err.response?.data || err.message);
      toast.error("Booking Add Failed");
    }
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
                  <p className="mb-2">User Name:</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="text"
                      name="userName"
                      placeholder="Enter user name"
                      readOnly
                      value={userDetails.username}
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
                      value={userDetails.email}
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
                      value={_id}
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
                      value={flightNumber}
                    />
                  </div>
                </label>
                <br />
                <label>
                  <p className="mb-2">Number of Seats : [1-5]</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="number"
                      name="seats"
                      min={1}
                      max={5}
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
