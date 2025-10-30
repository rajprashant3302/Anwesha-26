import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="relative overflow-hidden h-[100%] md:scale-105 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
      {/* 🟡 Changed link from /event/:id → event.link */}
      <Link to={event.link}>
        {/* Background Image */}
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />

        {/* Overlay tint */}
        <div
          className="absolute inset-0 bg-black bg-opacity-40"
          style={{ backgroundImage: `url(${event.card_bg})`, backgroundSize: "cover" }}
        ></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
          <h3 className="font-[SFIronsides] text-4xl mb-2">{event.name}</h3>
          <p className="text-xl italic">{event.shortDescription}</p>
          <p className="mt-2 text-sm text-gray-300">{event.date}</p>
        </div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
        {/* Event Name */}
        <h3 className="font-sf-ironsides text-4xl  mb-2">
          {event.name}
        </h3>
        
        {/* Short Description */}
        <p className="text-xl">{event.shortDescription}</p>
      </div>
      </Link>
    </div>
  );
}
