import backgroundImage from "../../../assets/images/planeImg/plane3.jpg";
import Title from "../../../components/Title";

const AdminFlightUpdate = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="Update Flight Details"
          sub="Efficiently Manage and Modify Flight Information"
        ></Title>
      </div>
    </div>
  );
};

export default AdminFlightUpdate;
