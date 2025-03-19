import React, { useState } from "react";
import InputField from "../Reusables/InputField";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { rightToLeftVariants } from "../Reusables/MotionVariants";

const ContactForm = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-4 rounded-xl " ref={ref}>
      <motion.form
        className="flex flex-col gap-2 "
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={rightToLeftVariants}
      >
        <div className="flex items-center gap-2">
          {/* First Name */}
          <div className="w-full">
            <label className="text-base font-semibold ">First Name</label>
            <InputField placeholder="John" />
          </div>
          {/* Last Name */}
          <div className="w-full">
            <label className="text-base font-semibold ">Last Name</label>
            <InputField placeholder="Doe" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Email */}
          <div className="w-full">
            <label className="text-base font-semibold ">Email</label>
            <InputField placeholder="johndoe@gmail.com" />
          </div>
          {/* Subject */}
          <div className="w-full">
            <label className="text-base font-semibold ">Subject</label>
            <InputField placeholder="Subject" />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-base font-semibold ">Your Message</label>
          <textarea
            placeholder="Message"
            className="w-full h-56 rounded-md p-2"
          />
        </div>
        <button className="button">
          <span>Submit</span>
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
