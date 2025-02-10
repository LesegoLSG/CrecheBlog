import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Reusables/Loader";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const { loading, error } = useSelector((state) => state.user);

  // Handle input change
  const handleInputChange = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value.trim() });
  };

  // Handle form submission / sign In
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sign in cred:", signIn);
    // Send a request to sign in api
    try {
      dispatch(signInStart());
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signIn),
      });

      const data = await response.json();
      console.log("Sign in data", data);

      if (!response.ok) {
        dispatch(signInFailure(data.message));
      } else if (response.ok) {
        dispatch(signInSuccess(data));
        setSignIn({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      setServerError(error.message);
      dispatch(signInFailure());
    }
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/8422207/pexels-photo-8422207.jpeg?auto=compress&cs=tinysrgb&w=600')",
        opacity: "50",
      }}
    >
      {/* Outter white div */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="w-full mb-2">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>
          <p className="">Sign In to Your Account and Stay Connected</p>
        </div>

        {/* Server errors */}
        {error && <p className="text-red-500">{error}</p>}
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signIn.email}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signIn.password}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
          <div className="w-full ">
            <p className="text-gray-600 cursor-pointer">Forgot password?</p>
          </div>
        </form>
        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-3 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        {/* Google sign up button */}
        <button
          type="button"
          className="w-full flex justify-center items-center gap-2 bg-gray-200 text-gray-700 py-3 rounded-md hover:bg-gray-300 transition"
        >
          <FcGoogle size={25} /> Sign Up with Google
        </button>
        {/* Sign In navigation */}
        <p className="mt-4 text-gray-500">
          Don't have an account?{" "}
          <span
            className="font-semibold underline cursor-pointer text-black"
            onClick={() => navigate("/signup")}
          >
            Sign Up for free
          </span>
        </p>
      </div>
      {loading && <Loader />}
    </section>
  );
};

export default SignIn;
