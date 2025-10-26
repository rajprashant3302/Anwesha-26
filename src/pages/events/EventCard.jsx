// src/components/EventCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="relative overflow-hidden w-[] h-[100%] md:scale-105 rounded-lg shadow-lg ">
      <Link to={`/event/${event.id}`}>
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />
      {/* Darkening Overlay */}
      <div
  className="absolute inset-0 bg-cover bg-opacity-50"
  style={{ backgroundImage: `url(${event.card_bg})` }}
></div>

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