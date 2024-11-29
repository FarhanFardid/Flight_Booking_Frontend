import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Title from "../../components/Title";

const FlightSearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const origin = data.origin;
    const destination = data.destination;
    const date = data.date;
    const flightInfo = { origin, destination, date };
    console.log("Search Data:", flightInfo);
  };
  return (
    <>
      <div className="pt-8 md:py-10">
        <Title
          main="Find Your Perfect Flight"
          sub="Explore destinations and book flights effortlessly"
        ></Title>
      </div>
      <div className="max-w-full mx-auto p-5 md:p-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-lg shadow-lg mt-10">
        {/* Form Section */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-0 md:flex justify-center items-center md:gap-4 my-3 p-4 text-white font-semibold w-full sm:max-w-md"
          >
            {/* Origin */}
            <div className="flex-1">
              <label>
                <p className="mb-2  md:text-base text-sm">Origin:</p>
                <div className="h-[2rem]">
                  <input
                    className="w-full md:w-[28rem] mb-2 text-black rounded-lg"
                    type="text"
                    name="origin"
                    placeholder="Enter your Origin"
                    {...register("origin", { required: true })}
                  />
                  {errors.origin && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Origin field is required
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* Destination */}
            <div className="flex-1">
              <label>
                <p className="mb-2  md:text-base text-sm">Destination:</p>
                <div className="h-[2rem]">
                  <input
                    className="w-full md:w-[28rem] mb-2 text-black rounded-lg"
                    type="text"
                    name="destination"
                    placeholder="Enter your Destination"
                    {...register("destination", { required: true })}
                  />
                  {errors.destination && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Destination field is required
                    </span>
                  )}
                </div>
              </label>
            </div>

            {/* Date */}
            <div className="flex-1">
              <label>
                <p className="mb-2 md:text-base text-sm">Date:</p>
                <div className="h-[2rem]">
                  <input
                    className="w-full md:w-[28rem] mb-2 text-black rounded-lg"
                    type="date"
                    name="date"
                    placeholder="Enter your Travel Date"
                    {...register("date", {
                      required: true,
                      validate: (value) =>
                        new Date(value) >= new Date() ||
                        "Date cannot be in the past",
                    })}
                  />
                  {errors.date && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Date field is required
                    </span>
                  )}
                </div>
              </label>
            </div>
          </form>
        </div>

        {/* Button Section */}
        <div className="mt-6 flex items-center justify-center">
          <Button
            type="submit"
            variant="contained"
            className="py-2 text-xs md:text-lg w-[50%] bg-black text-white hover:bg-gray-800"
          >
            Search Flights
          </Button>
        </div>
      </div>
    </>
  );
};

export default FlightSearchBar;
