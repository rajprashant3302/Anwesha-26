import React from 'react';
import Navbar from '../components/Navbar'; // adjust path if needed
import Footer from '../components/Footer'; // import footer

const AuthLayouts = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1  ">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AuthLayouts;
