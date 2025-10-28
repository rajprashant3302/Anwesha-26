// src/pages/register/Step4Preview.jsx
import React from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import toast from "react-hot-toast";
import { ClipboardList } from "lucide-react";

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
    <div className="flex items-center justify-center mb-14 px-6 ">
      <div className="rounded-3xl shadow-2xl border p-10 w-full max-w-lg text-center animate-fade-in  bg-white/80 backdrop-blur-lg">
        
        {/* Heading */}
        <h3 className="text-5xl text-[#433D7F] font-extrabold mb-12 bg">
          Confirm Your Details
        </h3>
        {/* Preview Details */}
        <div className="text-left space-y-6 ">
          {/* Personal */}
          <div >
            <h4 className=" font-semibold text-gray-800 text-2xl border-b pb-1">Personal Details</h4>
            <p className="text-gray-800 mt-2 text-xl mb-1">
              <b>Name:</b> {currentUser.personal?.firstName} {currentUser.personal?.lastName}
            </p>
            <p className="text-gray-800 text-xl mb-1">
              <b>Gender:</b> {currentUser.personal?.gender}
            </p>
          </div>

          {/* College */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 border-b border-gray-600 pb-1 mb-2">College Details</h4>
            <p className="text-gray-800 text-xl mb-1"><b>College:</b> {currentUser.college?.name}</p>
            <p className="text-gray-800 text-xl mb-1"><b>City:</b> {currentUser.college?.city}</p>
            <p className="text-gray-800 text-xl  mb-1"><b>Passing Year:</b> {currentUser.college?.passingYear}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 border-b pb-1 mb-2">Contact Details</h4>
            <p className="text-gray-800 text-xl mb-1"><b>Phone:</b> {currentUser.contact?.phone}</p>
            <p className="text-gray-800 text-xl mb-1"><b>Address:</b> {currentUser.contact?.address}</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleFinalSubmit}
          className="mt-8 px-6 py-3 w-full text-2xl tracking-widest bg-[url('/bg_2_cropped.jpg')] bg-cover bg-bottom rounded-xl text-white mb-4 hover:scale-102"
        >
          Submit & Register
        </button>
      </div>
    </div>
  );
}
