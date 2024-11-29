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
import Dashboard from "../../Layout/Dashboard";
import UserProfile from "../../pages/DashboardPages/UserDashboard/UserProfile";
import UserProfileManagement from "../../pages/DashboardPages/UserDashboard/UserProfileManagement";
import UserBooking from "../../pages/DashboardPages/UserDashboard/UserBooking";
import AdminBookingManagement from "../../pages/DashboardPages/AdminDashboard/AdminBookingManagement";
import AdminAddFlight from "../../pages/DashboardPages/AdminDashboard/AdminAddFlight";
import AdminFlightUpdate from "../../pages/DashboardPages/AdminDashboard/AdminFlightUpdate";
import AdminBookingUpdate from "../../pages/DashboardPages/AdminDashboard/AdminBookingUpdate";
import AdminFlightManagement from "../../pages/DashboardPages/AdminDashboard/AdminFlightManagement";

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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // User Dashboard Routes
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "userProfileManagement",
        element: <UserProfileManagement></UserProfileManagement>,
      },
      {
        path: "userBooking",
        element: <UserBooking></UserBooking>,
      },
      {
        path: "adminBookingManagement",
        element: <AdminBookingManagement></AdminBookingManagement>,
      },
      {
        path: "adminAddFlight",
        element: <AdminAddFlight></AdminAddFlight>,
      },
      {
        path: "adminBookingUpdate",
        element: <AdminBookingUpdate></AdminBookingUpdate>,
      },
      {
        path: "adminFlightManagement",
        element: <AdminFlightManagement></AdminFlightManagement>,
      },
      {
        path: "adminFlightUpdate",
        element: <AdminFlightUpdate></AdminFlightUpdate>,
      },
    ],
  },
]);
export default router;
