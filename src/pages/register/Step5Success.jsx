// src/pages/register/Step5Success.jsx
import React from "react";
import { useAuthUser } from "../../context/AuthUserContext";

export default function Step5Success({ anweshaId }) {
  const { currentUser } = useAuthUser();
  const displayId = anweshaId || currentUser?.anweshaId || "N/A";

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-400"> Registration Successful!</h2>
      <p className="mt-4 text-lg">Your unique Anwesha ID is:</p>
      <p className="text-3xl font-mono font-bold text-yellow-400 mt-2">{displayId}</p>
      <p className="mt-6">Please save this ID for future reference.</p>
    </div>
  );
}
