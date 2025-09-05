// src/pages/EventPage.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "./EventList";

export default function EventPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);
  const navigate = useNavigate();

  if (!event) return <h2 className="text-center mt-10">Event not found</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{event.name}</h1>
      <p className="text-gray-500">{event.date}</p>
      <p className="mt-4">{event.description}</p>
      <p className="mt-2 text-gray-700">
        Team Size: {event.minTeamSize} - {event.maxTeamSize}
      </p>
      <p className="mt-4 font-bold text-lg">Price: ₹{event.price}</p>

      <div className="mt-6">
        <button
          onClick={() => navigate(`/event/${event.id}/add-members`)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Team Members
        </button>
      </div>
    </div>
  );
}
