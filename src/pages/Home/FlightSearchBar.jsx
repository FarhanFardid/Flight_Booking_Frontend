import { useForm } from "react-hook-form";
import Title from "../../components/Title";
import { useNavigate } from "react-router";
import { searchFlights } from "../../AxiosSecure/flightServices";

const FlightSearchBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const query = {
      origin: data.origin.trim(),
      destination: data.destination.trim(),
    };
    console.log("Search Data:", query);

    try {
      const flights = await searchFlights(query);
      navigate("/flightResults", { state: { flights } });
    } catch (error) {
      console.error("Error fetching flights:", error.message || error);
      alert(error.message || "Failed to fetch flights. Please try again.");
    }
  };
  return (
    <>
      <div className="pt-8 md:py-10">
        <Title
          main="Find Your Perfect Flight"
          sub="Explore destinations and book flights effortlessly"
        ></Title>
      </div>
      <div className="max-w-full mx-auto p-5 md:p-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-lg shadow-lg mt-10">
        {/* Form Section */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-0 md:flex md:flex-row flex-col justify-center items-center md:gap-4 my-3 p-4 text-white font-semibold w-full sm:max-w-md"
          >
            {/* Origin */}
            <div className="flex-1">
              <label>
                <p className="mb-2 md:text-base text-sm">
                  Flight Departure City:
                </p>
                <div className="h-[2rem]">
                  <select
                    className="w-full md:w-[28rem] mb-2 text-black rounded-lg"
                    type="text"
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
                </div>
              </label>
            </div>

            {/* Destination */}
            <div className="flex-1">
              <label>
                <p className="mb-2 md:text-base text-sm">
                  Flight Destination City:
                </p>
                <div className="h-[2rem]">
                  <select
                    className="w-full md:w-[28rem] mb-2 text-black rounded-lg"
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
                </div>
              </label>
            </div>
            <div className="w-full flex-1 justify-center items-center px-6 py-3 text-center h-[2rem]">
              <button
                type="submit"
                className="bg-black text-white rounded-lg font-bold hover:bg-slate-700 md:w-48 w-32 py-4 text-xs md:text-base hover:scale-105 transition-transform my-auto"
              >
                Search Flights
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FlightSearchBar;
