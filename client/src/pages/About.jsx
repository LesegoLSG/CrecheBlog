import React, { useRef } from "react";
import AboutImage from "../assets/AboutImages/AboutImage.png";
import { FaBookOpen } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import addition from "../assets/AboutImages/addition.png";
import brick from "../assets/AboutImages/brick.png";
import crayon from "../assets/AboutImages/crayon.png";
import homeworkhelp from "../assets/AboutImages/homeworkhelp.png";
import podium from "../assets/AboutImages/podium.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  leftToRightVariants,
  rightToLeftVariants,
} from "../Components/Reusables/MotionVariants";

const About = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-b from-blue-100 to-white py-32 px-6 lg:px-20 overflow-hidden"
      id="about"
      ref={ref}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 space-y-6">
          {/* About Content */}
          <div className="mb-16">
            <h2 className="subheading">Why Choose Us</h2>
            <h2 className="heading">
              Our passion is nurturing childhood, and we're dedicated to early
              learning.
            </h2>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <motion.div
              className="w-full shadow-lg rounded-lg p-2 border border-accent"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={leftToRightVariants}
            >
              <div className="flex justify-start items-center gap-x-2">
                <FaBookOpen className="text-green-600" />
                <h2 className="text-lg font-semibold">Play to Learn</h2>
              </div>

              <p>
                We foster creativity and curiosity through engaging, play-based
                learning.
              </p>
            </motion.div>
            <motion.div
              className="w-full shadow-lg rounded-lg p-2 border border-accent"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={rightToLeftVariants}
            >
              <div className="flex justify-start items-center gap-x-2">
                <FaPersonChalkboard className="text-purple-600" />
                <h2 className="text-lg font-semibold">Quality Educators</h2>
              </div>

              <p>
                Our experienced teachers create a nurturing and stimulating
                environment for
              </p>
            </motion.div>
          </div>

          <motion.blockquote
            className="italic text-lg text-gray-700 border-l-4 border-accent pl-4 my-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={leftToRightVariants}
          >
            "Where little minds grow, one joyful step at a time."
            <span className="block font-bold text-accent mt-2">
              - Mamoriti Daycare
            </span>
          </motion.blockquote>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={rightToLeftVariants}
          >
            At <span className="font-semibold">Mamoriti Daycare</span>, we
            nurture young minds aged{" "}
            <span className="font-semibold">6 months to 5 years</span> through
            playful learning, creativity, and exploration. Our dedicated
            educators ensure a safe, fun-filled environment where children
            develop essential skills, confidence, and a love for learning.
          </motion.p>
          <motion.div
            className="flex gap-2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={leftToRightVariants}
          >
            <button
              className="button"
              onClick={() => navigate("/about-details")}
            >
              <span>Read More</span>
            </button>
            <button
              className="button-opposite"
              onClick={() => navigate("/donation")}
            >
              <span>Get Involved</span>
            </button>
          </motion.div>
        </div>
        {/* Image Section */}
        <motion.div
          className="relative w-full lg:w-1/2 flex justify-end"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightToLeftVariants}
        >
          <img src={AboutImage} alt="aboutImage" />
          <div className="bg-green-200 absolute bottom-0  w-auto h-auto p-2 rounded-lg border border-green-400 rotate-12">
            <p className="subheading">Open Hours</p>
            <div className=" flex items-center gap-4">
              {/* Clock icon */}
              <div>
                <FaClock />
              </div>
              {/* details */}
              <div>
                <p>Mon-Fri</p>
                <p>08:00 - 15:00</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Unused Images Positioned Around the Page */}
      <img
        src={addition}
        alt="Addition"
        className="absolute top-10 left-6 w-16 opacity-30 rotate-12"
      />
      <img
        src={brick}
        alt="Brick"
        className="absolute top-1/3 right-10 w-20 opacity-40 rotate-[-10deg]"
      />
      <img
        src={crayon}
        alt="Crayon"
        className="absolute bottom-20 left-8 w-16 opacity-30 rotate-6"
      />
      <img
        src={homeworkhelp}
        alt="Homework Help"
        className="absolute bottom-10 right-16 w-24 opacity-40 rotate-3"
      />
      <img
        src={podium}
        alt="Podium"
        className="absolute top-1/4 left-1/2 w-20 opacity-35 -translate-x-1/2"
      />
    </section>
  );
};

export default About;
