import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen  bg-[url('image398.png')] text-white flex flex-col">
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
      <img width={60} src="image.png" alt=""/>
        <div className="space-x-4">
          <Link
            to="/login"
            className=" px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            Login
          </Link>
        
          <Link
            to="/register"
            className=" hidden md:inline  px-4 py-2 rounded-xl border border-purple-500 hover:bg-purple-600 transition"
          > 
            Register
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Welcome to <span
  className="text-purple-500 inline-block overflow-hidden whitespace-nowrap border-r-2 translate-y-1 border-purple-500"
  style={{
    animation: "typing 2s steps(7) forwards, cursorHide 0s 2s forwards"
  }}
>
  Anwesha
</span>

<style>
{`
@keyframes typing {
  from { width: 0ch; }
  to { width: 7ch; }
}
@keyframes cursorHide {
  to { border-color: transparent; }
}
`}
</style>

        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Your gateway to events, registrations, and a seamless experience.  
          Join us today and be a part of something bigger!
        </p>
        <div className="space-x-4 flex flex-wrap gap-1 md:gap-2.5 items-center mx-auto ">
          <Link
            to="/register"
            className="scale-90 md:scale-100 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-lg mx-auto"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className=" scale-90 md:scale-100 px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-600 transition text-lg mx-auto md:mx-0"
          >
            Already a Member?
          </Link>
        </div>
      </section>

      <footer className="text-center py-4 bg-gray-900 text-gray-400 text-sm">
        © {new Date().getFullYear()} Anwesha. All rights reserved.
      </footer>
    </div>
  );
}
