// src/pages/register/Step5Success.jsx
import React, { useEffect, useState } from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function Step5Success({ anweshaId }) {
  const { currentUser } = useAuthUser();
  const navigate = useNavigate();
  const displayId = anweshaId || currentUser?.anweshaId || "N/A";

  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const timer = setTimeout(() => {
      navigate("/login");
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center mb-14 px-6">
      <div className="rounded-3xl shadow-emerald-800 shadow-2xl  p-10 w-full max-w-md text-center animate-fade-in bg-none ">
        
        {/* Heading */}
        <h3 className="text-4xl font-extrabold mb-6 text-white  bg-gradient-to-l from-[#095DB7] to-[#41D7B7] bg-clip-text ">
          Registration Successful !!
        </h3>

        {/* Success Icon */}
        <div className="flex items-center scale-110 justify-center w-20 h-20 mx-auto rounded-full bg-green-700   mb-6">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>

        {/* Anwesha ID */}
        <p className="text-lg text-gray-700">Your unique Anwesha ID is:</p>
        <p className="text-3xl font-mono font-bold text-white mt-3 tracking-wide">
          {displayId}
        </p>

        {/* Save Notice */}
        <p className="mt-3 text-gray-500 text-sm italic">
          ⚠️ Please save this ID for future reference.
        </p>

        {/* Redirect Info */}
        <div className="mt-8 bg-none px-5 py-3 rounded-xl shadow-inner border-2 border-slate-500">
          <p className="text-gray-700">
            Redirecting to your <span className="font-semibold text-black">Login Page</span> in{" "}
            <span className="text-yellow-600 font-bold">{countdown}</span> seconds...
          </p>
        </div>

        {/* Manual Redirect Button */}
        <button
          onClick={() => navigate("/login")}
          className="mt-7 bg-gradient-to-r to-[#0ce66b] from-[rgb(72,235,200)] hover:from-[#0ce66b] hover:to-[rgb(72,235,200)] 
                       text-white font-bold py-5 rounded-xl w-fit px-10 cursor-pointer mx-auto shadow-sm transition-all duration-300 
                       transform hover:scale-105 hover:shadow-blue-400/50 disabled:opacity-50 "
        >
          Go to Login Page Now
        </button>
      </div>
    </div>
  );
}
