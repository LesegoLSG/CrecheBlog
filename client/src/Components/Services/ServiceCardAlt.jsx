import React from "react";
import chroma from "chroma-js";

const ServiceCardAlt = ({ icon, title, brief, description, color }) => {
  const lightColor = chroma(color).brighten(1.5).hex(); // Lighten the color by 1.5 steps
  const textColor = color; // Keep the text color as the original color
  return (
    <div className="w-full min-h-40 flex shadow-lg hover:scale-105 ease-in-out">
      {/* icon */}
      <div className="w-1/4 h-full flex justify-center items-center">
        <span
          className="rounded-full p-6"
          style={{
            color: `${textColor}`,
            borderRadius: "50%",
            border: `2px solid ${textColor}`,
          }}
        >
          {icon}
        </span>
      </div>
      {/* Content */}
      <div className="w-full h-ful p-2 space-y-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className="">{description}</h1>
      </div>
    </div>
  );
};

export default ServiceCardAlt;
