import React from "react";

const Card = ({ event }) => {
  return (
    <div className="flex flex-col w-[350px] h-[500px] bg-gray-100 text-gray-700 shadow-md rounded-xl overflow-hidden">
      {/* Image Section */}
      <div className="h-[50%]">
        <img
          src={event.image}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="h-[50%] p-6 flex flex-col justify-between">
        <h5 className="text-xl font-semibold text-blue-gray-900">
          {event.name}
        </h5>
        <p className="text-base font-light">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
