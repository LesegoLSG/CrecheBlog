import React, { useRef } from "react";
import AboutImage from "../assets/AboutImages/AboutImage.png";
import { FaBookOpen } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";
const About = () => {
  const navigate = useNavigate();
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-white py-16 px-6 lg:px-20"
      id="about"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 space-y-6">
          {/* About Content */}
          <div className="mb-4">
            <h2 className="subheading">Why Choose Us</h2>
            <h2 className="heading">
              Our passion is nurturing childhood, and we're dedicated to early
              learning.
            </h2>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <div className="w-full shadow-lg rounded-lg p-2 border border-accent">
              <div className="flex justify-start items-center gap-x-2">
                <FaBookOpen className="text-green-600" />
                <h2 className="text-lg font-semibold">Play to Learn</h2>
              </div>

              <p>
                We foster creativity and curiosity through engaging, play-based
                learning.
              </p>
            </div>
            <div className="w-full shadow-lg rounded-lg p-2 border border-accent">
              <div className="flex justify-start items-center gap-x-2">
                <FaPersonChalkboard className="text-purple-600" />
                <h2 className="text-lg font-semibold">Quality Educators</h2>
              </div>

              <p>
                Our experienced teachers create a nurturing and stimulating
                environment for
              </p>
            </div>
          </div>

          <blockquote className="italic text-lg text-gray-700 border-l-4 border-accent pl-4 my-4">
            "Where little minds grow, one joyful step at a time."
            <span className="block font-bold text-accent mt-2">
              - Boitumelo Daycare
            </span>
          </blockquote>

          <p>
            At Boitumelo Daycare, we nurture young minds aged{" "}
            <span className="font-semibold">6 months to 5 years</span> through
            playful learning, creativity, and exploration. Our dedicated
            educators ensure a safe, fun-filled environment where children
            develop essential skills, confidence, and a love for learning.
          </p>
          <button className="button" onClick={() => navigate("/about-details")}>
            <span>Read More</span>
          </button>
        </div>
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 flex justify-end">
          <img src={AboutImage} alt="aboutImage" />
          <div className="bg-green-200 absolute bottom-0  w-auto h-auto p-4 rounded-lg border border-green-400 rotate-12">
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
        </div>
      </div>
    </section>
  );
};

export default About;
