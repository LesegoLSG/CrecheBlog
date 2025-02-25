import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceList from "../Components/Services/ServiceList";
import ServiceCard from "../Components/Services/ServiceCard";
import hobby from "../assets/ServicesImages/hobby.png";
import painting from "../assets/ServicesImages/painting.png";
import studying from "../assets/ServicesImages/studying.png";

const ServiceItem = ({ service, index }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      key={service.id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <ServiceCard
        icon={service.icon}
        title={service.title}
        brief={service.brief}
        color={service.color}
      />
    </motion.div>
  );
};

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="relative w-full h-auto bg-gradient-to-b from-background to-white py-32 px-6 lg:px-20"
      id="services"
    >
      {/* Background images */}
      <div className="absolute bottom-1/2 left-6 opacity-30">
        <img src={hobby} alt="hobby" />
      </div>
      <div className="absolute top-2 right-24 opacity-30">
        <img src={painting} alt="painting" />
      </div>
      <div className="absolute bottom-0 right-1/2 opacity-30">
        <img src={studying} alt="studying" />
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center mb-12">
        <h3 className="subheading">Our services</h3>
        <h1 className="heading">Provide Good Qualities for your loving kids</h1>
      </div>

      {/* Service Cards */}
      <div className="w-full max-w-7xl mx-auto space-y-4">
        <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4 lg:gap-16">
          {ServiceList.slice(0, showMore ? ServiceList.length : 4).map(
            (service, index) => (
              <ServiceItem key={service.id} service={service} index={index} />
            )
          )}
        </div>

        {/* View All Button */}
        <div className="flex justify-end items-center px-8">
          <span
            className="text-action cursor-pointer hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "View All"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
