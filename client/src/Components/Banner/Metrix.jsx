import React from "react";
import {
  FaUserGraduate,
  FaSmile,
  FaChalkboardTeacher,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import paperplane from "../../assets/MetrixImages/paperplane.png";
import trophy from "../../assets/MetrixImages/trophy.png";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Metrix = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  return (
    <section className="w-full bg-backgroundAlt" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4">
        <img src={paperplane} alt="paperplane" className="absolute top-1/3" />
        <img
          src={trophy}
          alt="trophy"
          className="absolute top-2/3 right-0 -rotate-12"
        />
        {/* List Container */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Total Graduates */}
          <li className=" p-6 rounded-lg flex flex-col items-center">
            <FaUserGraduate className="text-white text-4xl mb-3" />
            {inView ? (
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={1500} duration={3.5} />+{" "}
              </h3>
            ) : (
              "0"
            )}{" "}
            <p className="text-base text-white mt-2">Total Graduates</p>
          </li>

          {/* Parent Satisfaction Rate */}
          <li className="p-6 rounded-lg flex flex-col items-center">
            <FaSmile className="text-white text-4xl mb-3" />
            {inView ? (
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={98} duration={3.5} />%{" "}
              </h3>
            ) : (
              "0"
            )}{" "}
            <p className="text-base text-white mt-2">
              Parent Satisfaction Rate
            </p>
          </li>

          {/* Years of Experience */}
          <li className=" p-6 rounded-lg flex flex-col items-center">
            <FaAward className="text-white text-4xl mb-3" />
            {inView ? (
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={10} duration={3.5} />+{" "}
              </h3>
            ) : (
              "0"
            )}{" "}
            <p className="text-base text-white mt-2">Years of Experience</p>
          </li>

          {/* Certified Teachers */}
          <li className=" p-6 rounded-lg flex flex-col items-center">
            <FaChalkboardTeacher className="text-white text-4xl mb-3" />
            {inView ? (
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={20} duration={3.5} />+{" "}
              </h3>
            ) : (
              "0"
            )}{" "}
            <p className="text-base text-white mt-2">Certified Teachers</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Metrix;
