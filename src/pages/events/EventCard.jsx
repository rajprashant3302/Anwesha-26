import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  // Safely build a combined overlay (gradient + optional card_bg)
  const overlayStyle = {
    backgroundImage: event.card_bg
      ? `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.35) 30%, rgba(0,0,0,0)), url(${event.card_bg})`
      : `linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.35) 30%, rgba(0,0,0,0))`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="relative overflow-hidden h-[100%] md:scale-105 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl">
      <Link to={event.link}>
        {/* Background image */}
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />

        {/* Single overlay (no duplicates) */}
        <div className="absolute inset-0" style={overlayStyle} />

        {/* Text overlay (only once) */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white text-center">
          <h3 className="font-[SFIronsides] text-4xl mb-2">{event.name}</h3>
          {event.shortDescription && (
            <p className="text-xl italic">{event.shortDescription}</p>
          )}
          {event.date && <p className="mt-2 text-sm text-gray-300">{event.date}</p>}
        </div>
      </Link>
    </div>
  );
}
