import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { useLocation } from "react-router";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user && user?.role === "Admin") {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }
};

export default AdminRoute;
