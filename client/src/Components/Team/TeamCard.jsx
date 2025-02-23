import React from "react";

const TeamCard = ({ name, image, role }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-y-2">
      {/* Image */}
      <div className="w-full flex justify-center items-center">
        <img src={image} alt="team-image" className="w-52 h-52 rounded-full" />
      </div>
      <p className="font-semibold">{name}</p>
      <p>{role}</p>
    </div>
  );
};

export default TeamCard;
