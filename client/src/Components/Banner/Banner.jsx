import React from "react";
import BannerImage from "../../assets/BannerImages/BannerImage.png";
import Rocket from "../../assets/BannerImages/Rocket.png";
import Blocks from "../../assets/BannerImages/Blocks.png";
import Planet from "../../assets/BannerImages/Planet.png";
import Digits from "../../assets/BannerImages/Digits.png";
import Alphabets from "../../assets/BannerImages/Alphabets.png";
import Birds from "../../assets/BannerImages/Birds.png";

const Banner = () => {
  return (
    <section className="relative w-full h-auto  bg-gradient-to-r from-background to-white flex justify-center items-center px-4 pt-8">
      {/* Planet image */}
      <div className="absolute inset-0 flex justify-center items-center opacity-60">
        <img src={Planet} alt="planet" className="" />
      </div>
      {/* Digits image */}
      <div className="absolute bottom-2 left-6 lg:top-6 lg:left-6">
        <img src={Digits} alt="digits" className="w-16 h-16 -rotate-12" />
      </div>
      {/* Alphabets image */}
      <div className="absolute sm:top-1/2 sm:right-0 lg:bottom-0 lg:left-1/2 ">
        <img
          src={Alphabets}
          alt="alphabets"
          className="w-16 h-16 -rotate-12 "
        />
      </div>
      {/* Birds image */}
      <div className="absolute top-2 right-6 ">
        <img src={Birds} alt="birds" className="w-32 h-32" />
      </div>
      <div className="relative max-w-7xl w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        {/* Left content */}
        <div className=" text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 font-cabinSketch">
            Building{" "}
            <span className="text-accent">
              Strong <br /> Foundation
            </span>{" "}
            Through{" "}
            <span className="text-accent">
              Play <br /> & Learning
            </span>
          </h1>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="button">
              <span>Download Program</span>
            </button>
            <button className="button-opposite">
              <span>Explore Activities</span>
            </button>
          </div>
          {/* Rocket image */}
          <div className="">
            <img src={Rocket} alt="rocket" className="w-24 h-24 rotate-45" />
          </div>
          {/* Blocks image */}
          <div className="absolute bottom-0 right-0">
            <img src={Blocks} alt="blocks" className="w-32 h-32" />
          </div>
        </div>
        {/* Right content with image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={BannerImage}
            alt="Banner Image"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
