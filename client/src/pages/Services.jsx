import React from "react";
import ServiceList from "../Components/Services/ServiceList";
import ServiceCard from "../Components/Services/ServiceCard";
import Giraffe from "../assets/ServicesImages/Giraffe.png";

const Services = () => {
  return (
    <section
      className="relative w-full h-auto bg-gradient-to-b from-blue-100 to-white py-16 px-6 lg:px-20"
      id="services"
    >
      <div className="absolute bottom-0 left-0 ">
        <img src={Giraffe} alt="Giraffe" />
      </div>
      {/* heading */}
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center mb-12">
        <p>Our services</p>
        <h1 className="heading">Provide Good Qualities for your loving kids</h1>
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-col-1 lg:grid-cols-4 space-y-4">
        {ServiceList.slice(0, 4).map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            brief={service.brief}
            color={service.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
