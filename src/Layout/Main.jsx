import { Outlet } from "react-router";
import Navigation from "../Shared/Navigation";
import NavLinks from "../Shared/NavLinks";

const Main = () => {
  return (
    <div className="max-w-full mx-auto">
      <Navigation></Navigation>
      <NavLinks></NavLinks>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
