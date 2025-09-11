import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { events } from "./EventList";

export default function EventPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);
  const navigate = useNavigate();

  if (!event) return <h2 className="text-center mt-10">Event not found</h2>;

  return (
    <div className="flex justify-center items-center min-h-screen p-6 ">
      
      {/* Frosted Glass Card Container */}
      <div className="relative bg-white/30 backdrop-blur-md shadow-2xl rounded-lg max-w-4xl w-full p-6 border border-white/20">
        
        {/* Header - Newspaper-like style */}
        <div className="text-center border-b-2 border-black pb-2 mb-4">
          <h1 className="text-4xl font-black tracking-widest uppercase text-gray-900 font-serif">
            EVENT NAME
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="absolute top-2 right-2 text-gray-800 hover:text-red-600 text-3xl font-bold p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Event Image and Buttons */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
            
            {/* Custom styled buttons */}
            <div className="flex items-center flex-col gap-8 w-2/3">
              <button
                onClick={() => alert("Register clicked!")}
                className="scale-200 sexy_button_register hover:sexy_button_register focus:sexy_button_register active:sexy_button_register sexy_btn_bg_register_black"
              >
                Register
              </button>
              <button
                onClick={() => alert("Rulebook clicked!")}
                className="invert sexy_button_rulebook hover:sexy_button_rulebook focus:sexy_button_rulebook active:sexy_button_rulebook sexy_btn_bg_rulebook"
              >
                Rulebook
              </button>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-4 text-gray-900 text-xl p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-inner">
            <p>
              <strong className="text-slate-600">Date:</strong> {event.date}
            </p>
            <p>
              <strong className="text-slate-600">Venue:</strong> {event.venue}
            </p>
            <p>{event.description}</p>
            <p>
              <strong className="text-slate-600">Individual Participation:</strong>
            </p>
            <p>
              <strong className="text-slate-600">Registration Fee:</strong> ₹{event.price}
            </p>
            <p>
              <strong className="text-slate-600">Registration closes on</strong> Thu March 16 2023
            </p>
            <p>
              <strong className="text-slate-600">Prizes Worth:</strong> ₹{event.price}
            </p>
            <p>
              <strong className="text-slate-600">Organizers:</strong> <br />
              Aryan: 7247305110 <br />
              Abhilasha: 9262293394
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}