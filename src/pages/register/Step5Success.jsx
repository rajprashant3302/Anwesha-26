// src/pages/register/Step5Success.jsx
import React from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import { Link } from "react-router-dom";
export default function Step5Success({ anweshaId }) {
  const { currentUser } = useAuthUser();
  // Use the anweshaId from props if available, otherwise get it from currentUser
  const displayId = anweshaId || currentUser?.anweshaId || "N/A";

  return (
    <>
      <div className="font-sans max-w-sm mx-auto p-8 text-center bg-white rounded-lg shadow-xl mt-10 sm:p-5">
        
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 mx-auto text-green-500 sm:w-12 sm:h-12">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold leading-tight mb-3 text-gray-900 sm:text-2xl">Registration successful</h2>
        
        <p className="text-gray-600 mb-6 sm:text-sm">
          Thank you for registering! Your access data will be sent by email shortly.
        </p>

        <p className="text-sm font-medium text-gray-700 mb-2">
          Your unique Anwesha ID is:
        </p>
        <p className="text-2xl font-mono font-bold text-black mb-8 sm:text-xl">
          {displayId}
        </p>

        <button className="w-full py-3 px-4 font-semibold text-white cursor-pointer bg-blue-600 hover:bg-blue-500 rounded-md transition-colors duration-200">
          <Link to = "/dashboard">Go to Dashboard</Link>
        </button>
      </div>
    </>
  );
}