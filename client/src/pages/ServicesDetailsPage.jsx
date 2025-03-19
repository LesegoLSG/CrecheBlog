import React, { useEffect } from "react";
import ServiceList from "../Components/Services/ServiceList";
import ServiceCardAlt from "../Components/Services/ServiceCardAlt";

const ServicesDetailsPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full h-auto ">
      {/* Heading */}
      <div className="w-full h-[16rem] bg-accent text-white flex flex-col justify-center items-center gap-4">
        <h2 className="heading text-white">
          Exciting Services for Every Child!
        </h2>
        <p className="text-xl text-center">
          Empowering young minds through fun, learning, and creativity. Explore
          our diverse range of services designed for growth and joy!
        </p>
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto p-4">
        <div className="w-full grid grid-col-1  gap-y-4">
          {ServiceList.map((service) => (
            <ServiceCardAlt
              icon={service.icon}
              title={service.title}
              brief={service.brief}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsPage;
