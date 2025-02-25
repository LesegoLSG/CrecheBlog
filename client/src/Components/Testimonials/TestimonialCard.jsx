import React from "react";

const TestimonialCard = ({ id, name, image, description, role, rating }) => {
  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        ); // Full star
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        ); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="w-full h-auto p-4 space-y-10 group  rounded-xl border border-accent">
      <p className="text-base font-normal">{description}</p>
      <div className="w-full flex items-center justify-between">
        {/* Image, name and role */}
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt="image-testimonial"
            className="w-12 h-12 object-center object-cover rounded-full border"
          />

          <div className="flex flex-col  items-start">
            <p className="font-semibold">{name}</p>
            <p>{role}</p>
          </div>
        </div>
        {/* rating */}
        <div className="text-2xl">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
