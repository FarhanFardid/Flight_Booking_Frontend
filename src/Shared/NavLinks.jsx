import { Navbar } from "flowbite-react";
import { Link } from "react-router";
// import { Link } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider/AuthProvider";
// import useAdmin from "../Hooks/useAdmin";

const NavLinks = () => {
  //   const { user } = useContext(AuthContext);
  //   const { isAdmin } = useAdmin();
  //   console.log(isAdmin);
  const user = true;
  const isAdmin = false;
  return (
    <Navbar fluid className="bg-black">
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          className="font-bold text-blue-500 text-xs md:text-base"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
          className="font-bold text-blue-500 text-xs md:text-base"
        >
          About Us
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/"
          className="font-bold text-blue-500 text-xs md:text-base"
        >
          Contact Us
        </Navbar.Link>
        {user ? (
          isAdmin ? (
            <Navbar.Link
              as={Link}
              to="/"
              className="font-bold text-blue-500 text-xs md:text-base"
            >
              Admin Dashboard
            </Navbar.Link>
          ) : (
            <Navbar.Link
              as={Link}
              to="/"
              className="font-bold text-blue-500 text-xs md:text-base"
            >
              User Dashboard
            </Navbar.Link>
          )
        ) : null}
      </Navbar.Collapse>
      <Navbar.Brand>
        <div className="flex ">
          <div className="relative  md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 19l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-green-500 rounded-lg bg-white focus:ring-green-800 focus:border-blue-500 "
              placeholder="Search Flight..."
            />
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
};

export default NavLinks;
