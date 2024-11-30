import { FaClipboardList, FaHome, FaUser, FaUserEdit } from "react-icons/fa";
import Navigation from "../Shared/Navigation";
import logo from "../assets/images/logo/logo1.jpeg";
import {
  MdCall,
  MdFlight,
  MdInfo,
  MdOutlineAirplaneTicket,
} from "react-icons/md";
import { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import Footer from "../Shared/Footer";
import { FaAddressBook } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider/AuthContext";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navigation></Navigation>
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-blue-800 hover:bg-blue-900 font-bold text-white drawer-button md:hidden w-full"
          >
            Dashboard Menu
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-fit">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-950 text-blue-500 ps-5 min-h-full ">
            <div className="flex  items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="mt-3 md:w-16 md:h-16 md:p-1 w-12 h-12 rounded-full md:mr-3 bg-white  me-4 md:me-2"
              />
              <h2 className="text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">
                QuickFly
              </h2>
            </div>
            {user?.role === "Admin" ? (
              <>
                <h3 className="text-lg md:text-xl font-medium text-center pt-3 md:pt-7 text-white">
                  Admin DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/adminAddFlight"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdFlight className="w-6 h-6 text-blue-600 me-5"></MdFlight>
                    Add New Flight
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/adminFlightManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaClipboardList className="w-6 h-6 text-blue-600 me-5"></FaClipboardList>
                    Flights Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/adminBookingManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaAddressBook className="w-6 h-6 text-blue-600 me-5" />
                    Flight Bookings Management
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <h3 className="text-lg md:text-2xl font-medium text-center pt-3 md:pt-8 text-white">
                  User DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/userProfile"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUser className="w-6 h-6 text-blue-600 me-5"></FaUser>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/userProfileManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUserEdit className="w-6 h-6 text-blue-600 me-5"></FaUserEdit>
                    Profile Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/userBooking"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdOutlineAirplaneTicket className="w-6 h-6 text-blue-600 me-5" />
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}
            <hr className="my-5" />
            <li>
              <NavLink
                to="/"
                className="font-medium flex justify-start items-center mt-5"
              >
                <FaHome className="w-6 h-6 text-blue-600 me-5"></FaHome>Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="font-medium flex justify-start items-center mt-5"
              >
                <MdInfo className="w-6 h-6 text-blue-600 me-5" />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-medium flex justify-start items-center mt-5"
              >
                <MdCall className="w-6 h-6 text-blue-600 me-5" />
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
