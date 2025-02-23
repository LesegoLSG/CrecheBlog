import React, { useState } from "react";
import InputField from "../Reusables/InputField";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-xl shadow-lg">
      <form className="flex flex-col gap-2 ">
        <div className="flex items-center gap-2">
          {/* First Name */}
          <div className="w-full">
            <label className="text-gray-800">First Name</label>
            <InputField placeholder="John" />
          </div>
          {/* Last Name */}
          <div className="w-full">
            <label className="text-gray-800">Last Name</label>
            <InputField placeholder="Doe" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Email */}
          <div className="w-full">
            <label className="text-gray-800">Email</label>
            <InputField placeholder="johndoe@gmail.com" />
          </div>
          {/* Subject */}
          <div className="w-full">
            <label className="text-gray-800">Subject</label>
            <InputField placeholder="Subject" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-gray-800">Your Message</label>
          <textarea
            placeholder="Message"
            className="w-full h-56 rounded-md p-2"
          />
        </div>
        <button className="button">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
