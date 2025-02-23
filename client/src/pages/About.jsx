import React, { useRef } from "react";
import AboutImage from "../assets/AboutImages/AboutImage.png";
import { FaBookOpen } from "react-icons/fa";
import { FaPersonChalkboard } from "react-icons/fa6";

const About = () => {
  return (
    <section
      className="container h-auto bg-gradient-to-b from-blue-100 to-white py-16 px-6 lg:px-20"
      id="about"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-1/2 space-y-4">
          {/* About Content */}
          <h2 className="text-md font-semibold ">Why Choose Us</h2>
          <h2 className="heading">
            Our passion is nurturing childhood, and we're dedicated to early
            learning.
          </h2>
          <div className="w-full flex flex-col lg:flex-row ">
            <div className="w-full">
              <div className="flex justify-start items-center gap-x-2">
                <FaBookOpen className="text-green-600" />
                <h2 className="text-lg font-semibold">Play to Learn</h2>
              </div>

              <p>
                We foster creativity and curiosity through engaging, play-based
                learning.
              </p>
            </div>
            <div className="w-full">
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
          <p>
            <p className="text-xl font-bold">
              Include something visible like a signature
            </p>{" "}
            At Boitumelo Daycare, we nurture young minds aged{" "}
            <span className="font-semibold">6 months to 5 years</span> through
            playful learning, creativity, and exploration. Our dedicated
            educators ensure a safe, fun-filled environment where children
            develop essential skills, confidence, and a love for learning.
          </p>
          <button className="button">
            <span>Read More</span>
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <img src={AboutImage} alt="aboutImage" />
        </div>
      </div>
    </section>
  );
};

export default About;
