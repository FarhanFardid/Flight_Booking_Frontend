import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";

const AdminFlightManagement = () => {
  return (
    <div
      className="custom-bg bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="Flight Management Dashboard"
          sub="Streamline and Effortlessly Manage Flights"
        ></Title>
      </div>
    </div>
  );
};

export default AdminFlightManagement;
