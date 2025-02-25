import React from "react";

const TeamCard = ({ name, image, role, description }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-y-2">
      {/* Image */}
      <div className="w-full flex justify-center items-center">
        <img src={image} alt="team-image" className="w-52 h-52 rounded-full" />
      </div>
      <p className="font-semibold">{name}</p>
      <p>{role}</p>
      <div className="w-full lg:w-2/3 text-center">
        <p className="text-neutral-700">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
