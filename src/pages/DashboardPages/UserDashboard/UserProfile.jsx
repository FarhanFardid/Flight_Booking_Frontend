import { useContext, useEffect, useState } from "react";
import backgroundImage from "../../../assets/images/planeImg/plane1.jpg";
import Title from "../../../components/Title";
import { AuthContext } from "../../../providers/AuthProvider/AuthContext";
import { getUserInfo } from "../../Authentication/auth";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const userId = user?.id;
  console.log(userId);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserInfo(userId);
        console.log("Response:", response);
        setUserDetails(response);
      } catch (err) {
        console.error("Error details:", err.response?.data || err.message);
        toast.error("Profile Data Load Failed");
      }
    };
    fetchData();
  }, []);
  return (
    <div
      className="bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-white bg-opacity-10 p-2 md:p-8 rounded-md">
        <Title
          main="My Profile"
          sub="Key Information and Personal Details"
        ></Title>
      </div>
      <div className="w-[80%] md:w-[40%] mx-auto my-3 md:my-16 p-6 md:p-12 bg-black bg-opacity-70 text-white shadow-lg rounded-2xl text-center">
        <div className="flex justify-center items-center w-full">
          <div className="w-full">
            <div className="details bg-white bg-opacity-50 text-black p-3 md:p-6 rounded-md">
              <h2 className="text-xs md:text-sm font-medium pb-1 md:pb-2 ">
                User Id: {userDetails._id}
              </h2>
              <h2 className="text-base md:text-xl font-bold py-2 md:py-3 ">
                User Name: {userDetails.username}
              </h2>
              <p className="font-medium pb-2 text-xs md:text-sm">
                <strong>Email:</strong>{" "}
                <span id="display-email">{userDetails.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
