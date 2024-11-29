import { createBrowserRouter } from "react-router";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/About/AboutUs";
import ContactUs from "../../pages/Contact/ContactUs";
import Register from "../../pages/Authentication/Register";
import Login from "../../pages/Authentication/Login";
import FlightResults from "../../pages/Flights/FlightResults";
import FlightDetails from "../../pages/Flights/FlightDetails";

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
        path: "availableFlights",
        element: <FlightResults></FlightResults>,
      },
      {
        path: "flightDetails",
        element: <FlightDetails></FlightDetails>,
      },
    ],
  },
]);
export default router;
