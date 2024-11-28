import { Outlet } from "react-router";
import Navigation from "../Shared/Navigation";
import NavLinks from "../Shared/NavLinks";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="max-w-full mx-auto">
      <Navigation></Navigation>
      <NavLinks></NavLinks>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
