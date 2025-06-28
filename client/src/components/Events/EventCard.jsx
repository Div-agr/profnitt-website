import React from "react";
import { motion } from "framer-motion";

const EventsCard = ({ title, description, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-full xs:w-[250px] md:w-[300px] mt-6 md:mt-0 p-[1px] rounded-[20px] shadow-lg bg-gradient-to-r from-green-400 to-pink-500"
    >
      <div className="bg-[#010D50] rounded-[20px] overflow-hidden">
        {/* Image Section */}
        <div className="h-[40%] bg-[#0328EE] flex justify-center items-center">
          <img
            src={image || "https://via.placeholder.com/300"}
            alt={title}
            className="h-full w-full object-cover rounded-t-[20px]"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 text-center">
          <h1 className="text-[22px] font-semibold text-white">{title}</h1>
          <p className="text-[14px] text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventsCard;
