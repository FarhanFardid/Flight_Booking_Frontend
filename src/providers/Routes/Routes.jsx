import { createBrowserRouter } from "react-router";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/About/AboutUs";
import ContactUs from "../../pages/Contact/ContactUs";
import Register from "../../pages/Authentication/Register";
import Login from "../../pages/Authentication/Login";
import FlightResults from "../../pages/Flights/FlightResults/FlightResults";
import FlightDetails from "../../pages/Flights/FlightDetails/FlightDetails";
import AvailableFlights from "../../pages/Flights/FlightResults/AvailableFlights";
import FlightBooking from "../../pages/Flights/FlightBooking/FlightBooking";

const router = createBrowserRouter([
  // Basic Routes without Authentication
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "flightResults",
        element: <FlightResults></FlightResults>,
      },
      {
        path: "availableFlights",
        element: <AvailableFlights></AvailableFlights>,
      },
      {
        path: "flightDetails",
        element: <FlightDetails></FlightDetails>,
      },
      {
        path: "flightBooking",
        element: <FlightBooking></FlightBooking>,
      },
    ],
  },
]);
export default router;
