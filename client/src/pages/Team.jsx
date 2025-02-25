import React from "react";
import teamList from "../Components/Team/TeamList";
import TeamCard from "../Components/Team/TeamCard";

const Team = () => {
  return (
    <section className="container h-auto px-4 lg:px-0" id="team">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="subheading">Meet Our Team</h3>
          <h1 className="heading">
            Meet the Faces Behind Our Exceptional Childcare
          </h1>
        </div>

        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3  gap-6">
          {teamList.map((member) => (
            <div>
              <TeamCard
                name={member.name}
                image={member.image}
                role={member.role}
                description={member.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
