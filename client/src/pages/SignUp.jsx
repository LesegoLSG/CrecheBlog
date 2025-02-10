import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Reusables/Loader";

const SignUp = () => {
  const navigate = useNavigate();
  // Sign up credential state
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Password error state
  const [confirmPasswordError, setConfirmPassowrdError] = useState(false);
  const [serverError, setServerError] = useState(null);
  // Loader state
  const [LoaderEffect, setLoaderEffect] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value.trim() });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmPassowrdError(false);
    console.log("Sign Up Data:", signup);

    if (signup.password !== signup.confirmPassword) {
      setConfirmPassowrdError(true);
      return;
    }

    const { confirmPassword, ...signUpData } = signup;

    setLoaderEffect(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log("Sign up data", data);
      setLoaderEffect(false);
      navigate(-1);
    } catch (error) {
      setServerError(error.message);
      setLoaderEffect(false);
    }
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=600')",
        opacity: "50",
      }}
    >
      {/* Outter white div */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        {/* Display errors */}
        {confirmPasswordError && (
          <p className="text-red-500">Passwords do not match</p>
        )}
        {/* Server errors */}
        {serverError && <p className="text-red-500">{serverError}</p>}
        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:gap-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="Full Name"
              value={signup.firstName}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={signup.lastName}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:gap-x-2">
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={signup.contact}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signup.email}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 md:gap-x-2">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signup.password}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signup.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
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
          Already have an account?{" "}
          <span
            className="font-semibold underline cursor-pointer text-black"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
      {LoaderEffect && <Loader />}
    </section>
  );
};

export default SignUp;
