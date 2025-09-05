import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <section className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-purple-500">Anwesha</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Your gateway to events, registrations, and a seamless experience.
          Join us today and be a part of something bigger!
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-lg"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-600 transition text-lg"
          >
            Already a Member?
          </Link>
        </div>
      </section>
    </div>
  );
}
