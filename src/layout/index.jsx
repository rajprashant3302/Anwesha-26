import React from 'react';
import Navbar from '../components/Navbar'; // adjust path if needed
import Footer from '../components/Footer'; // adjust path if needed
const AuthLayouts = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 bg-[url('/harish_ka.jpg')] bg-cover h-auto">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AuthLayouts;
