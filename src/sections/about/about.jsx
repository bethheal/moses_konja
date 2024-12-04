import React from "react";
import { aboutImg } from "../../assets";

const About = () => {
  return (
    <div
      id="about"
      className="absolute top-[25rem] my-8 mx-auto left-0 right-0 px-3 shadow-2xl h-auto w-[90%] md:w-[85%] lg:w-[80%] bg-white z-10"
    >
      <h5 className="text-lg p-5 text-red-950 font-montserrat">About Us</h5>
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-5 gap-5">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-playfair py-5 font-medium text-[24px] md:text-[28px] lg:text-[30px]">
            Empowering Farmers with Sustainable Solutions
          </h2>
          <p className="text-sm md:text-base text-slate-700">
            At [Your Business Name], we are dedicated to supporting smallholder farmers through the provision of hybrid oil palm seedlings and expert guidance on best management practices. Our goal is to help farmers improve yields, increase sustainability, and boost productivity.
          </p>
          <p className="pt-5 text-sm md:text-base text-slate-700">
            In addition to providing quality seedlings, we offer training to farmer-based organizations (FBOs), consultancy on plantation establishment, and programs on Village Savings and Loans Associations (VSLAs). Our services are designed to strengthen the agricultural value chain and promote financial independence for rural communities.
          </p>
          <button className="text-red hover:before:bg-slate-950 relative h-[40px] mt-3 w-30 overflow-hidden border border-red-950 bg-black px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-950 before:transition-all before:duration-500 hover:text-white hover:shadow-red-950 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">LEARN MORE</span>
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="About Us"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
