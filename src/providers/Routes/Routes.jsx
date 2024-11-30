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
import AdminFlightManagement from "../../pages/DashboardPages/AdminDashboard/AdminFlightManagement";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import { getFlightById } from "../../AxiosSecure/flightServices";

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
        path: "flightDetails/:id",
        element: <FlightDetails></FlightDetails>,
        loader: async ({ params }) => {
          const response = await getFlightById(params.id);
          if (!response) {
            throw new Error("Failed to load product data");
          }
          return response;
        },
      },
      {
        path: "flightBooking",
        element: (
          <ProtectedRoute>
            <FlightBooking></FlightBooking>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
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
        element: (
          <AdminRoute>
            <AdminBookingManagement></AdminBookingManagement>
          </AdminRoute>
        ),
      },
      {
        path: "adminAddFlight",
        element: (
          <AdminRoute>
            <AdminAddFlight></AdminAddFlight>
          </AdminRoute>
        ),
      },
      {
        path: "adminFlightManagement",
        element: (
          <AdminRoute>
            <AdminFlightManagement></AdminFlightManagement>
          </AdminRoute>
        ),
      },
      {
        path: "adminFlightUpdate",
        element: (
          <AdminRoute>
            <AdminFlightUpdate></AdminFlightUpdate>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
