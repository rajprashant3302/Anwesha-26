// src/pages/register/Step4Preview.jsx
import React from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import toast from "react-hot-toast";

export default function Step4Preview({ formData, next }) {
  const { currentUser, finalizeRegistration, updateUser } = useAuthUser();

  const handleFinalSubmit = async () => {
    try {
      if (!currentUser?.uid) {
        toast.error("User not found. Please login again.");
        return;
      }


      const anweshaId = await finalizeRegistration(currentUser.uid, formData);


      await updateUser(currentUser.uid, { status: "successful" });

      toast.success("Registration completed successfully!");

      next(anweshaId);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Confirm Your Details</h2>

      <div className="bg-gray-800 p-4 rounded text-white">
        <h3 className="font-semibold">Personal</h3>
        <p><b>Name:</b> {currentUser.personal?.firstName + " " + currentUser.personal?.lastName}</p>
        <p><b>Gender:</b> {currentUser.personal?.gender}</p>

        <h3 className="mt-3 font-semibold">College</h3>
        <p><b>College:</b> {currentUser.college?.name}</p>
        <p><b>City:</b> {currentUser.college?.city}</p>
        <p><b>Passing Year:</b> {currentUser.college?.passingYear}</p>

        <h3 className="mt-3 font-semibold">Contact</h3>
        <p><b>Phone:</b> {currentUser.contact?.phone}</p>
        <p><b>Address:</b> {currentUser.contact?.address}</p>
      </div>

      <button
        onClick={handleFinalSubmit}
        className="bg-green-600 px-4 py-2 rounded w-full"
      >
        ✅ Submit & Register
      </button>
    </div>
  );
}
