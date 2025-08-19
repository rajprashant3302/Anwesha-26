// src/pages/register/Step5Success.jsx
import React, { useEffect, useState } from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import { useNavigate } from "react-router-dom";

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
      navigate("/dashboard");
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold text-green-400">Registration Successful!</h2>
      <p className="mt-4 text-lg">Your unique Anwesha ID is:</p>
      <p className="text-3xl font-mono font-bold text-yellow-400 mt-2">{displayId}</p>
      <p className="mt-6">Please save this ID for future reference.</p>
      
      <p className="mt-8 text-gray-300">
        You will be redirected to your <span className="font-semibold">Dashboard</span> in{" "}
        <span className="text-yellow-400 font-bold">{countdown}</span> seconds.
      </p>
    </div>
  );
}
