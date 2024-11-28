import { Outlet } from "react-router";
import Navigation from "../Shared/Navigation";

const Main = () => {
  return (
    <div className="max-w-full mx-auto">
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
