import React from "react";
import K from "./cards"; // Importing the services data
import { vid } from "../../assets";
import Testimonials from "./testimonials";

const Services = () => {
  return (
    <div id="services" className="p-5 mt-20 flex flex-col items-center">
      {/* Heading Section */}
      <div className="text-center">
        <p className="font-montserrat text-lg p-5 text-red-950  md:text-base">
          Services
        </p>
        <h2 className="text-[20px] md:text-[25px] font-playfair">
          What we do
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-7xl">
        {K.SERVICES.map((item, index) => (
          <div
            key={index}
            className="p-5 border border-red-950 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4"
            />
            {/* Name */}
            <h3 className="font-montserrat font-medium text-sm md:text-lg text-center">
              {item.name}
            </h3>
            {/* Description */}
            <p className="font-montserrat text-gray-700 text-xs md:text-sm mt-2 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="relative bg-black w-full mt-10">
        {/* Video */}
        <video
          className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] object-cover"
          controls
          autoPlay
          loop
          muted
          poster="video-poster.jpg"
        >
          <source src={vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Services;
