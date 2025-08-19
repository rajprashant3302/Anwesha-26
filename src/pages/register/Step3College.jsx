// src/pages/register/Step3CollegeDetails.jsx
import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthUser } from "../../context/AuthUserContext";
import toast from "react-hot-toast";

export default function Step3CollegeDetails({ next }) {
  const { currentUser, updateUser } = useAuthUser();
  const [collegeName, setCollegeName] = useState(currentUser?.college?.name || "");
  const [passingYear, setPassingYear] = useState(currentUser?.college?.passingYear || "");
  const [city, setCity] = useState(currentUser?.college?.city || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser?.uid) {
      toast.error("User not found. Please login again.");
      return;
    }

    try {
      const collegeDetails = {
        name: collegeName,
        passingYear,
        city,
      };

      await updateDoc(doc(db, "users", currentUser.uid), {
        college: collegeDetails,
        status: "3",
      });

      updateUser(currentUser.uid, { 
        college: collegeDetails, 
        status: "3" 
      });

      toast.success("College details saved!");
      next(); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Step 3: College Details</h2>

      <input
        type="text"
        placeholder="College Name"
        value={collegeName}
        onChange={(e) => setCollegeName(e.target.value)}
        className="w-full p-2 rounded text-white bg-gray-800"
        required
      />

      <input
        type="number"
        placeholder="Passing Year (e.g. 2026)"
        value={passingYear}
        onChange={(e) => setPassingYear(e.target.value)}
        className="w-full p-2 rounded text-white bg-gray-800"
        required
      />

      <input
        type="text"
        placeholder="City of College"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 rounded text-white bg-gray-800"
        required
      />

      <button type="submit" className="bg-blue-500 px-4 py-2 rounded w-full">
        Save & Continue
      </button>
    </form>
  );
}
