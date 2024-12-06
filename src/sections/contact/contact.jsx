import React from "react";
import { contactUs } from "../../assets";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="relative my-10">
      {/* Background Image */}
      <img
        src={contactUs}
        alt="Contact Us"
        className="w-full h-[20rem] md:h-[25rem] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
        <div className="p-6 w-[90%] sm:w-[80%] md:w-[40rem] bg-white text-black shadow-2xl rounded-xl space-y-6">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-red-950 text-center">
            Contact Us
          </h3>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone size={24} />
              <span className="text-sm md:text-lg">+233 207 695 058</span>
            </div>

            <div className="flex items-center space-x-2">
              <Mail size={24} />
              <span className="text-sm md:text-lg"> mkayagroconsult@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin size={24} />
              <span className="text-sm md:text-lg">
              Ashanti Mampong, opposite St. Monica’s College of Education blue gate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
