import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import InputField from "../Reusables/InputField";
import { useDispatch } from "react-redux";
import {
  updateStart,
  updateSuccess,
  updateFailure,
} from "../../redux/user/userSlice";
import Loader from "../Reusables/Loader";

const DashProfile = () => {
  const dispatch = useDispatch();
  const { currentUser, error, loading } = useSelector((state) => state.user);
  // Image States
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadProgress] =
    useState(null);
  const [imageFileUploadingError, setImageFileUploadError] = useState(null);
  const filePickerRef = useRef();

  //   form data state
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    contact: currentUser.contact,
    email: currentUser.email,
  });

  // Error state
  const [updateUserSuccess, setUpdateUserSuccess] = useState("");

  //   upload image when image file exists
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  //   Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  //   Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Update user details
  const handleSubmitNewData = async (e) => {
    e.preventDefault();
    // return if formData length is 0
    if (Object.keys(formData).length === 0) {
      return;
    }

    try {
      dispatch(updateStart());
      console.log("currentuser:", currentUser._id);
      console.log("Full user details:", currentUser);
      const res = await fetch(`/api/user/updateUser/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data.message));
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("Your details are updated successfully.");
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
    }
  };

  return (
    <section className="w-full h-screen p-4">
      <h1 className="text-xl font-semibold text-neutral-900 text-center">
        Profile
      </h1>
      <div className="w-full flex justify-center items-center mt-14">
        {/* Form */}
        <form
          className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-y-2"
          onSubmit={handleSubmitNewData}
        >
          {/* Display error message from server */}
          {error && (
            <div className="w-full border border-red-300 rounded-md bg-red-100 px-2 py-1">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          {/* Success update notification*/}
          {updateUserSuccess && (
            <div className="w-full border border-green-300 rounded-md bg-green-100 px-2 py-1">
              <p className="text-green-600 text-sm">{updateUserSuccess}</p>
            </div>
          )}
          {/* Input Fields */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={filePickerRef}
            className="hidden"
          />
          <div className="relative flex flex-col justify-center items-center">
            {imageFileUploadingProgress && (
              <CircularProgressbar
                value={imageFileUploadingProgress}
                text={`${imageFileUploadingProgress}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  },
                  path: {
                    stroke: `rgba(62,152,199, ${
                      imageFileUploadingProgress / 100
                    })`,
                  },
                }}
              />
            )}
            <img
              src={imageFileUrl || currentUser.profilePicture}
              alt="User"
              className={`w-36 h-36 rounded-full cursor-pointer ${
                imageFileUploadingProgress &&
                imageFileUploadingProgress < 100 &&
                "opacity-50"
              }`}
              onClick={() => filePickerRef.current.click()}
            />
          </div>
          {imageFileUploadingError && (
            <p className="text-red-600 text-sm font-semibold text-center">
              {imageFileUploadingError}
            </p>
          )}

          <div className="w-full">
            <label className="font-semibold">First Name:</label>
            <InputField
              type="text"
              placeholder="John"
              name="firstName"
              value={formData.firstName}
              changeEvent={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold">Last Name:</label>
            <InputField
              type="text"
              placeholder="Smith"
              name="lastName"
              value={formData.lastName}
              changeEvent={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold">Contact:</label>
            <InputField
              type="text"
              placeholder="0123456789"
              name="contact"
              value={formData.contact}
              changeEvent={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label className="font-semibold">Email:</label>
            <InputField
              type="text"
              placeholder="Johnsmith@gmail.com"
              name="email"
              value={formData.email}
              changeEvent={handleInputChange}
            />
          </div>

          {/* buttons */}
          <button
            className="button w-full"
            type="submit"
            onSubmit={handleSubmitNewData}
          >
            <span>Edit</span>
          </button>
          <div className="w-full flex justify-between items-center my-2">
            <p className="text-red-600 underline cursor-pointer">Sign out</p>
            <p className="text-red-600 underline cursor-pointer">
              Delete Account
            </p>
          </div>
          <button className="button w-full">
            <span>Create post</span>
          </button>
        </form>
      </div>
      {loading && <Loader />}
    </section>
  );
};

export default DashProfile;
