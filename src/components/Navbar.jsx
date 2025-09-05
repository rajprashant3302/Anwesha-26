import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
        <h1 className="text-2xl font-bold text-purple-400">Anwesha</h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-xl border border-purple-500 text-white hover:bg-purple-600 transition"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="px-4 py-2 rounded-xl border border-purple-500 text-white hover:bg-purple-600 transition"
          >
            Events
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-xl border border-purple-500 text-white hover:bg-purple-600 transition"
          >
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
