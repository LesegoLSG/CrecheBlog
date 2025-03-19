import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialList from "../Components/Testimonials/TestimonialList";
import TestimonialCard from "../Components/Testimonials/TestimonialCard";

import fathersday from "../assets/TestimonialImages/fathersday.png";
import footprint from "../assets/TestimonialImages/footprint.png";

const Testimonials = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const breakpointsResponsive = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  const handleSwiperEvents = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return (
    <section
      className="relative w-full h-auto bg-backgroundAlt text-white space-y-5 py-8 lg:px-24 md:px-16 sm:px-7 px-4 flex justify-center items-center flex-col"
      id="testimonials"
    >
      {/* Background Decorative Images */}
      <img
        src={fathersday}
        alt="Father's Day"
        className="absolute top-0 left-0 w-16 lg:w-24"
      />
      <img
        src={footprint}
        alt="Footprint"
        className="absolute bottom-0 right-0 w-16 lg:w-24 "
      />

      <div className="w-full max-w-7xl mx-auto space-y-4">
        <div className="">
          <h3 className="subheading">Testimonials</h3>
          <h1 className="heading text-white">
            Why Parents Trust Us: Hear From Them
          </h1>
        </div>
        {/* Custom buttons */}
        <div className="w-full max-w-7xl flex justify-end items-center gap-6">
          <button
            className={`custom-prev text-white bg-action hover:bg-action/50 p-2 rounded-full z-10 ${
              isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()} // Go to previous slide
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className={`custom-next text-white bg-action hover:bg-action/50 p-2 rounded-full z-10 ${
              isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()} // Go to next slide
          >
            <FaChevronRight size={20} />
          </button>
        </div>
        {/* Testimonial content display */}
        <div className="w-full py-2">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={5}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={breakpointsResponsive}
            onSlideChange={handleSwiperEvents}
            onInit={handleSwiperEvents}
            modules={[Navigation]}
            className="mySwiper p-1"
          >
            {testimonialList.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  role={item.role}
                  rating={item.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
