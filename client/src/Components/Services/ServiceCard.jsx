import React from "react";
import chroma from "chroma-js";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ icon, title, brief, color }) => {
  const navigate = useNavigate();
  const lightColor = chroma(color).brighten(1.5).hex(); // Lighten the color by 1.5 steps
  const textColor = color; // Keep the text color as the original color
  return (
    <div
      className="w-full lg:w-[16rem] shadow-lg p-4 overflow-hidden rounded-lg "
      style={{ backgroundColor: lightColor }}
    >
      <div className="flex flex-col justify-center items-center">
        {/* Icon */}
        <span style={{ color: `${textColor}` }}>{icon}</span>
        {/* Title */}
        <h3
          className="text-lg font-bold text-${color}/50 mt-2"
          style={{ color: `${textColor}` }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className=" mt-2">{brief}</p>

        {/* Button */}
        <span
          className="text-action hover:underline cursor-pointer mt-4"
          onClick={() => navigate("/service-details")}
        >
          Read More
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
