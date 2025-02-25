import React from "react";
import chroma from "chroma-js";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ icon, title, brief, color }) => {
  const navigate = useNavigate();
  const lightColor = chroma(color).brighten(1.5).hex(); // Lighten the color
  const textColor = color; // Keep the text color

  return (
    <div className="relative w-full lg:w-[16rem] shadow-lg p-6 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col justify-center items-center text-center z-10">
        {/* Icon */}
        <span className="text-6xl" style={{ color: textColor }}>
          {icon}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold mt-3" style={{ color: textColor }}>
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-700">{brief}</p>

        {/* Button */}
        <span
          className="text-action hover:underline cursor-pointer mt-4 font-medium z-50"
          onClick={() => navigate("/service-details")}
        >
          Read More
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
