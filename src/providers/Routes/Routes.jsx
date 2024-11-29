import { createBrowserRouter } from "react-router";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/About/AboutUs";
import ContactUs from "../../pages/Contact/ContactUs";
import Register from "../../pages/Authentication/Register";

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
    ],
  },
]);
export default router;
