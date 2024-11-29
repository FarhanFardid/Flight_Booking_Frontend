import { Navbar } from "flowbite-react";
import logo from "../assets/images/logo/logo1.jpeg";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthProvider/AuthProvider";
// import { toast } from "react-toastify";
// import { Tooltip } from "@mui/material";
import { Link } from "react-router";
const Navigation = () => {
  const user = false;
  //   const { user, logOut } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const [userDetails, setUserDetails] = useState([]);
  //   useEffect(() => {
  //     const fetchUserData = async () => {
  //       const response = await fetch(
  //         `http://localhost:3000/users/${user?.email}`
  //       );
  //       const data = await response.json();
  //       setUserDetails(data);
  //     };
  //     fetchUserData();
  //   }, [user, userDetails]);
  //   const handleLogout = () => {
  //     localStorage.removeItem("initialLoginTime");
  //     logOut()
  //       .then(() => {
  //         toast.success("Successfully Logout");
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         toast.error("Logout Failed");
  //       });
  //   };
  return (
    <Navbar fluid className="bg-slate-900 px-4 py-2">
      <Navbar.Brand>
        <img
          src={logo}
          className="m-1 md:m-5 md:mr-3 h-12  w-auto md:h-32 rounded-full bg-white hover:scale-110"
          alt="Logo"
        />
        <div>
          <p className="self-center whitespace-nowrap text-lg md:text-5xl font-bold text-blue-700 ">
            Quick<span className="text-yellow-500">Fly</span>
          </p>
          <span className="text-xs md:text-lg font-light text-white ">
            Booking Made Simple, Journeys Made Memorable
          </span>
        </div>
      </Navbar.Brand>
      {user ? (
        <div className="flex items-center">
          {/* <Tooltip title={userDetails?.name}>
            <img
              src={userDetails?.photo}
              alt="User profile"
              className="md:w-12 md:h-12 w-8 h-8 rounded-full mr-5"
            />
          </Tooltip> */}
          <button
            // onClick={handleLogout}
            className="bg-black text-white btn-md rounded-lg font-bold  hover:text-slate-200 hover:bg-slate-800 h-8 w-14 py-1 px-3 md:h-12 md:w-24 md:py-3 md:px-6 text-xs md:text-base mr-5 hover:scale-105 text-center"
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="bg-black text-white btn-md rounded-lg font-bold  hover:text-slate-200 hover:bg-slate-800 h-8 w-14 py-1 px-3 md:h-12 md:w-24 md:py-3 md:px-6 text-xs md:text-base mr-5 hover:scale-105 text-center">
          <Link to="/login">Login</Link>
        </button>
      )}
    </Navbar>
  );
};

export default Navigation;
