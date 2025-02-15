import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";

const OAuthButton = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   Open pop up allowing user to signin using their google account
  const handleGoogleSubmit = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    dispatch(signInStart());
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate(-1);
      }

      console.log("res", res);
      if (!res.ok) {
        dispatch(signInFailure());
        throw new Error("Failed to authenticate");
      }
    } catch (error) {
      dispatch(signInFailure());
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      className="w-full flex justify-center items-center gap-2 bg-gray-200 text-gray-700 py-3 rounded-md hover:bg-gray-300 transition"
      onClick={handleGoogleSubmit}
    >
      <FcGoogle size={25} /> Continue with Google
    </button>
  );
};

export default OAuthButton;
