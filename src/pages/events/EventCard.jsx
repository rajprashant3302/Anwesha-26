// src/components/EventCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{event.name}</h3>
        <p className="text-sm text-gray-500">{event.date}</p>
        <p className="text-gray-700 mt-2">{event.shortDescription}</p>
        <p className="mt-2 font-bold">₹{event.price}</p>
        <Link
          to={`/event/${event.id}`}
          className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
