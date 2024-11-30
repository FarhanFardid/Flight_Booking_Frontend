import { useState } from "react";
import Title from "../../components/Title";
import backgroundImage from "../../assets/images/planeImg/plane2.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { registerUser } from "./auth";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (data) => {
    // console.log(data);
    const username = data.userName;
    const email = data.email;
    const password = data.password;

    const userData = {
      username,
      email,
      password,
      role: "User",
    };
    console.log(userData);
    try {
      const response = await registerUser(userData);
      alert(response.message);
      console.log(response.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="p-7 md:p-10 bg-gradient-to-r from-slate-700 to-slate-200">
        <Title
          main="Join QuickFly Today"
          sub="Create your account to unlock endless possibilities."
        ></Title>
      </div>
      <div
        className="mb-0 w-full bg-cover bg-no-repeat bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="md:w-[50%] w-full md:my-14 mx-auto flex justify-center">
          <div className="bg-black bg-opacity-50 border-solid rounded-2xl w-[22rem] md:w-[34rem] p-6 mx-auto my-8 md:p-8 md:m-8 ">
            <h1 className="text-center font-semibold text-blue-600 text-xl md:text-3xl">
              User Sign Up Form
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
                      placeholder="Enter your full name"
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
                  <p className="mb-2"> Email:</p>
                  <div className="h-[2.5rem]">
                    <input
                      className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-700 text-xs block bg-white ps-2 pt-1">
                        Warning: Email field is required
                      </span>
                    )}
                  </div>
                </label>
                <br />

                <div>
                  <label>
                    <p className="mb-2">Password:</p>
                    <div className="relative h-[2.5rem]">
                      <input
                        className="w-[20rem] md:w-[28rem] mb-2 text-black rounded-lg"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          maxLength: 20,
                          pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/,
                        })}
                      />
                      {errors.password?.type === "required" && (
                        <p
                          className="text-red-700 text-xs block bg-white ps-2 pt-1"
                          role="alert"
                        >
                          Warning: Password field is required
                        </p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p
                          className="text-red-700 text-xs block bg-white ps-2 pt-1"
                          role="alert"
                        >
                          Warning: Password must be at least 6 characters
                        </p>
                      )}
                      {errors.password?.type === "maxLength" && (
                        <p
                          className="text-red-700 text-xs block bg-white ps-2 pt-1"
                          role="alert"
                        >
                          Warning: Password must be less than 20 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p
                          className="text-red-700 text-xs block bg-white ps-2 pt-1"
                          role="alert"
                        >
                          Warning: Password must contain one uppercase, one
                          lowercase, one number and one special characters
                        </p>
                      )}
                      <button
                        type="button"
                        className="absolute inset-y-1 right-[1rem] sm:right-0 px-3 pt-2"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FaEye className="text-black" />
                        ) : (
                          <FaEyeSlash className="text-black" />
                        )}
                      </button>
                    </div>
                  </label>
                  <br />
                </div>
                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="bg-black text-white btn-md rounded-lg font-bold  hover:text-blue hover:bg-slate-700 w-20 px-3 py-2 md:w-28 md:py-3 md:px-6 text-xs md:text-base mt-5 hover:scale-110"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="flex justify-center items-center gap-4 mt-2">
                  <div className="text-xs md:text-lg mt-2">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-blue-600 font-bold text-xs md:text-lg ml-2 hover:underline"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
