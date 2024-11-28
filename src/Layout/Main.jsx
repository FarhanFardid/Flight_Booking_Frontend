import { Outlet } from "react-router";
import Navigation from "../Shared/Navigation";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
