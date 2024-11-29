import { useForm } from "react-hook-form";
import backgroundImage from "../../../assets/images/planeImg/plane1.jpg";
import Title from "../../../components/Title";

const UserProfileManagement = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const userDetails = {
    userId: 101,
    userName: "User1",
    userEmail: "user1@gmail.com",
  };
  const onSubmit = (data) => {
    const userId = data.userId;
    const email = data.userEmail;
    const userName = data.userName;

    // console.log(data);
    const profileInfo = {
      userId,
      email,
      userName,
    };
    // console.log(profileInfo);
  };
  return (
    <div
      className="custom-bg bg-no-repeat bg-center bg-cover p-2 md:p-8 max-h-full md:h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-6 md:mt-12 bg-black bg-opacity-30 p-2 md:p-8 rounded-md">
        <Title
          main="Profile Management"
          sub="Manage Your Personal Information"
        ></Title>
      </div>
      <div className="md:w-[50%] w-full md:my-14 mx-auto flex justify-center">
        <div className="bg-black bg-opacity-70 border-solid rounded-2xl w-[22rem] md:w-[34rem] p-6 mx-auto my-8 md:p-8 md:m-8 ">
          <h1 className="text-center font-semibold text-white text-xl md:text-3xl">
            My User Profile
          </h1>
          <div className="flex items-center justify-center mt-8  text-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-sm md:text-lg font-medium"
            >
              <label>
                <p className="mb-2">User Name:</p>
                <div className="h-[2.5rem]">
                  <input
                    className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                    type="text"
                    name="userName"
                    placeholder="Enter your name"
                    defaultValue={userDetails.userName}
                    required
                    {...register("userName", { required: true })}
                  />
                  {errors.userName && (
                    <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                      Warning: Name field is required
                    </span>
                  )}
                </div>
              </label>
              <br />
              <label>
                <p className="mb-2">User Id (Not Changeable)</p>
                <div className="h-[2.5rem]">
                  <input
                    className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                    type="text"
                    name="userId"
                    placeholder="Enter user Id"
                    readOnly
                    value={userDetails.userId}
                  />
                </div>
              </label>
              <br />
              <label>
                <p className="mb-2">User Email (Not Changeable)</p>
                <div className="h-[2.5rem]">
                  <input
                    className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                    type="email"
                    name="userEmail"
                    placeholder="Enter your email"
                    readOnly
                    value={userDetails.userEmail}
                  />
                </div>
              </label>
              <br />

              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="bg-black text-white btn-md rounded-lg font-bold  hover:text-blue hover:bg-slate-700 w-20 px-3 py-2 md:w-48 md:py-3 md:px-6 text-xs md:text-base mt-5 hover:scale-110"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileManagement;
