import React from "react";
import teamList from "../Components/Team/TeamList";
import TeamCard from "../Components/Team/TeamCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import children from "../assets/TeamImages/children.png";
import football from "../assets/TeamImages/football.png";
import jumping from "../assets/TeamImages/jumping.png";
import swing from "../assets/TeamImages/swing.png";

const TeamItem = ({ member, index }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      key={member.id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.3 }}
    >
      <TeamCard
        name={member.name}
        image={member.image}
        role={member.role}
        description={member.description}
      />
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className="relative container h-auto px-4 py-24 lg:px-0" id="team">
      {/* Background Images */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 w-24 md:w-32 lg:w-40 opacity-30">
        <img src={swing} alt="children" className="w-full" />
      </div>

      <div className="absolute top-1/4 right-4 md:right-10 w-28 md:w-36 lg:w-44 opacity-30">
        <img src={football} alt="football" className="w-full" />
      </div>

      <div className="absolute bottom-1/3 left-0  md:bottom-10 md:left-1/3 w-28 md:w-36 lg:w-36 opacity-30">
        <img src={jumping} alt="jumping" className="w-full" />
      </div>

      <div className="absolute bottom-0 right-4 md:bottom-10 md:right-10 w-24 md:w-32 lg:w-40 opacity-30">
        <img src={children} alt="swing" className="w-full" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="subheading">Meet Our Team</h3>
          <h1 className="heading">
            Meet the Faces Behind Our Exceptional Childcare
          </h1>
        </div>

        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3  gap-6">
          {teamList.map((member, index) => (
            <div>
              <TeamItem key={member.id} member={member} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
