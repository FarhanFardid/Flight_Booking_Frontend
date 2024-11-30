import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
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

export default ProtectedRoute;
