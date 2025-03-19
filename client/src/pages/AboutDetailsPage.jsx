import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Aboutdetails from "../assets/AboutImages/Aboutdetails.jpg";
const AboutDetailsPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full h-auto">
      {/* Heading */}
      <div className="w-full h-[16rem] bg-accent text-white flex flex-col justify-center items-center gap-4">
        <h2 className="heading text-white">
          Discover More About Mamoriti Daycare
        </h2>
        <p className="text-xl text-center">
          A safe, nurturing, and inspiring place where little learners grow
          through love, play, and discovery.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {/* Our Story */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-primary">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 2001, our journey began with a simple vision: to create
            solutions that make a difference. What started as a small idea has
            grown into something much greater, thanks to our dedication and our
            incredible community.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md shadow-accent">
            <h3 className="text-2xl font-semibold text-primary">
              <span className="text-purple-600">10+</span> Years of Excellence
            </h3>
            <p className="text-gray-700 mt-2">
              Delivering quality solutions since 2001.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md shadow-accent">
            <h3 className="text-2xl font-semibold text-primary">
              {" "}
              <span className="text-yellow-600">50+</span> Awards
            </h3>
            <p className="text-gray-700 mt-2">
              Recognized for innovation and impact.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md shadow-accent">
            <h3 className="text-2xl font-semibold text-primary">
              <span className="text-red-600">1k+ </span>Happy Parents
            </h3>
            <p className="text-gray-700 mt-2">
              Building trust through excellence.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md shadow-accent"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
            <p className="text-gray-700 mt-4">
              To innovate and provide world-class solutions that empower
              individuals and businesses to reach their full potential.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md shadow-accent"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-green-600">Our Vision</h2>
            <p className="text-gray-700 mt-4">
              To be a globally recognized leader in [industry/niche],
              transforming lives through cutting-edge solutions and innovation.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-orange-600">
            Our Core Values
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-neutral-900">
            <span className="bg-primary  px-6 py-3 rounded-full shadow-md shadow-accent">
              Safety & Security
            </span>
            <span className="bg-primary px-6 py-3 rounded-full shadow-md shadow-accent">
              Love & Nurturing
            </span>
            <span className="bg-primary px-6 py-3 rounded-full shadow-md shadow-accent">
              Learning Through Play
            </span>
            <span className="bg-primary px-6 py-3 rounded-full shadow-md shadow-accent">
              Growth & Development
            </span>
            <span className="bg-primary  px-6 py-3 rounded-full shadow-md shadow-accent">
              Strong Partnerships
            </span>
          </div>
        </motion.div>

        {/* Why Choose Us? */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={Aboutdetails}
            alt="Why Choose Us"
            className="rounded-lg shadow-md w-full"
          />
          <div>
            <h2 className="text-3xl font-bold text-primary">Why Choose Us?</h2>
            <p className="text-gray-700 mt-4">
              At <span className="font-semibold">Mamoriti Daycare</span>, we
              understand that early childhood is a crucial stage for growth and
              development. That’s why we provide a{" "}
              <span className="font-semibold">
                safe, nurturing, and engaging environment
              </span>{" "}
              where children can explore, learn, and build essential skills. Our
              passionate and experienced caregivers are dedicated to fostering
              creativity, curiosity, and confidence in every child. Through
              structured learning activities, interactive play, and personalized
              attention, we ensure that each child receives the care and
              guidance they need to thrive.
              <br /> We prioritize{" "}
              <span className="font-semibold">
                safety, education, and emotional well-being
              </span>
              , creating a warm and inclusive space where children feel valued
              and supported. Our programs are designed to{" "}
              <span className="font-semibold">
                promote social, cognitive, and motor skill development,
                preparing little ones for a bright future. With a commitment to
                quality education, fun learning experiences, and strong
                partnerships with parents
              </span>
              , we strive to make every day a joyful and enriching experience
              for your child.
            </p>
          </div>
        </motion.div>
        <div className="flex gap-2">
          <button className="button">
            <span>Contact Us</span>
          </button>
          <button>
            <span>Get Involved</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailsPage;
