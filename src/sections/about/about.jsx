import React from "react";
import { aboutImg, ceoImg } from "../../assets";

const About = () => {
  return (
    <div>
      <div
        id="about"
        className="absolute top-[25rem] md:top-[50rem] my-8 mx-auto left-0 right-0 px-3 shadow-2xl h-auto w-[90%] md:w-[85%] lg:w-[80%] bg-white z-10"
      >
        <h5 className="text-lg p-5 text-red-950 font-montserrat">About Us</h5>
        <div className="flex flex-col lg:flex-row items-center lg:items-start mx-5 gap-5">
          {/* Text Section */}
          <div className="w-full  lg:w-1/2">
            <h2 className="font-playfair py-5 font-medium text-[24px] md:text-[28px] lg:text-[30px]">
              Empowering Farmers with Sustainable Solutions
            </h2>
            <p className="text-sm md:text-base text-slate-700">
              At [Your Business Name], we are dedicated to supporting
              smallholder farmers through the provision of hybrid oil palm
              seedlings and expert guidance on best management practices. Our
              goal is to help farmers improve yields, increase sustainability,
              and boost productivity.
            </p>
            <p className="pt-5 text-sm md:text-base text-slate-700">
              In addition to providing quality seedlings, we offer training to
              farmer-based organizations (FBOs), consultancy on plantation
              establishment, and programs on Village Savings and Loans
              Associations (VSLAs). Our services are designed to strengthen the
              agricultural value chain and promote financial independence for
              rural communities.
            </p>
            <button className="text-red hover:before:bg-slate-950 relative h-[40px] mt-3 mb-10 w-30 overflow-hidden border border-red-950 bg-black px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-950 before:transition-all before:duration-500 hover:text-white hover:shadow-red-950 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">LEARN MORE</span>
            </button>
          </div>
          {/* Image Section */}
          <div className="w-full mb-2 lg:w-1/2">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-[55rem] sm:mt-[50rem] md:mt-[50rem] mx-5 lg:px-20 lg:mt-[60rem]">
  {/* CEO Section */}
  <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center lg:items-start gap-8">
    {/* CEO Image */}
    <div className="w-full sm:w-3/4 md:w-1/3 lg:w-1/3 flex justify-center mb-5 sm:mb-0">
      <img
        src={ceoImg}
        alt="CEO"
        className="rounded-md md:h-96  w-64 h-96 object-cover sm:h-60 shadow-lg"
      />
    </div>

    {/* CEO Description */}
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3 text-center lg:text-left">
      <h3 className="text-2xl font-bold text-red-950 mb-5 sm:mb-8">CEO & Founder</h3>
      <p className="text-sm md:text-base text-slate-700 leading-relaxed">
        I’m the CEO and Founder of Mr Kay AGRO Consult, located in Ashanti
        Mampong. The company started by selling hybrid germinated oil palm
        seeds to smallholder oil palm farmers until we realized that the
        farmers' knowledge in nursery establishment was very poor.
        <br />
        <br />
        To address this, we decided to raise the germinated seeds into
        seedlings through nursery establishment and sell the seedlings
        instead of the germinated seeds. This approach has greatly
        enhanced the success of smallholder farmers in the region.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
