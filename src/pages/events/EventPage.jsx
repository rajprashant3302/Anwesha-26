// src/pages/EventPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { events } from "./EventList";
import Razorpay from "../../services/Razorpay";

export default function EventPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

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
      <p className="mt-4 font-bold text-lg">Price: ₹{event.price}</p>
      <div className="mt-6">
        <Razorpay event={event} />
      </div>
    </div>
  );
}
