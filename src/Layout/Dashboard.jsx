import { FaEdit, FaHome, FaUser, FaUserEdit } from "react-icons/fa";
import Navigation from "../Shared/Navigation";
import logo from "../assets/images/logo/logo1.jpeg";
import { MdBook, MdCall, MdInfo } from "react-icons/md";
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import Footer from "../Shared/Footer";
const Dashboard = () => {
  const isAdmin = false;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navigation></Navigation>
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-green-800 hover:bg-green-600 font-bold text-amber-600 drawer-button md:hidden w-full"
          >
            Dashboard Menu
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-fit">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-800 text-blue-700 ps-5 min-h-full ">
            <div className="flex  items-center justify-center md:justify-between ">
              <img
                src={logo}
                alt="logo"
                className="md:w-16 md:h-16 md:p-1 w-12 h-12 rounded-full md:mr-3 bg-white  me-4 md:me-2"
              />
              <h2 className="text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-yellow-500 bg-clip-text text-transparent">
                QuickFly
              </h2>
            </div>
            {isAdmin ? (
              <>
                <h3 className="text-lg md:text-xl font-medium text-center pt-3 md:pt-7 text-black">
                  Admin DashBoard
                </h3>
                <li>
                  <NavLink
                    to="/dashboard/adminProfile"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUser className="w-6 h-6 text-blue-600 me-5"></FaUser>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/adminInventoryManagement"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <MdBook className="w-6 h-6 text-[#D1922B] me-5" />
                    Booking Management
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <h3 className="text-lg md:text-xl font-medium text-center pt-3 md:pt-7 text-black">
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
                    to="/dashboard/userProfileUpdate"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaUserEdit className="w-6 h-6 text-blue-600 me-5"></FaUserEdit>
                    Profile Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/"
                    className="font-medium flex justify-start items-center mt-5"
                  >
                    <FaEdit className="w-6 h-6 text-blue-600 me-5" />
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
                <MdInfo className="w-6 h-6 text-[#D1922B] me-5" />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="font-medium flex justify-start items-center mt-5"
              >
                <MdCall className="w-6 h-6 text-[#D1922B] me-5" />
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
