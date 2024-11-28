import { Outlet } from "react-router";

const Main = () => {
    return (
        <div>
            Main page
            <Outlet></Outlet>
        </div>
    );
};

export default Main;