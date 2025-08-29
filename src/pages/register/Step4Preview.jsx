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
    <div className="flex items-center justify-center mb-14 px-6">
      <div className="rounded-3xl shadow-2xl  p-10 w-full max-w-lg text-center animate-fade-in  bg-none backdrop-blur-lg">
        
        {/* Heading */}
        <h3 className="text-4xl font-extrabold mb-6 bg-gradient-to-l from-[#095DB7] to-[#41D7B7] bg-clip-text text-transparent">
          Confirm Your Details
        </h3>

        {/* Icon */}
        {/* <div className="flex  items-center justify-center w-20 h-20 mx-auto rounded-full bg-blue-500/10 border border-blue-500 mb-6">
          <ClipboardList className="w-12 h-12 text-blue-400" />
        </div> */}

        {/* Preview Details */}
        <div className="text-left space-y-6">
          {/* Personal */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 border-b-2 border-slate-400 pb-1">Personal Details</h4>
            <p className="text-gray-800 mt-2 text-lg">
              <b className="mr-3">Name:</b> {currentUser.personal?.firstName} {currentUser.personal?.lastName}
            </p>
            <p className="text-gray-800 text-lg">
              <b className="mr-3">Gender:</b> {currentUser.personal?.gender}
            </p>
          </div>

          {/* College */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 border-b border-slate-400 pb-1 mb-2">College Details</h4>
            <p className="text-gray-800 text-lg "><b className="mr-3"> College:</b> {currentUser.college?.name}</p>
            <p className="text-gray-800 text-lg"><b className="mr-3">City:</b> {currentUser.college?.city}</p>
            <p className="text-gray-800 text-lg"><b className="mr-3">Passing Year:</b> {currentUser.college?.passingYear}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 border-b border-slate-400 pb-1 mb-2">Contact Details</h4>
            <p className="text-gray-800 text-lg"><b className="mr-3">Phone:</b> {currentUser.contact?.phone}</p>
            <p className="text-gray-800 text-lg"><b className="mr-3">Address:</b> {currentUser.contact?.address}</p>
          </div>
        </div>

        {/* Submit Button */}
        {/* <button
          onClick={handleFinalSubmit}
          className="mt-8  py-3 rounded-xl w-fit mx-auto px-5 bg-gradient-to-r from-[#41D7B7] to-[#095DB7] text-white font-bold shadow-lg 
                     hover:from-[#095DB7] hover:to-[#41D7B7] hover:shadow-blue-400/50 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
        >
          ✅ Submit & Register
        </button> */}
        <button
          onClick={handleFinalSubmit}
          className="w-[193.15px] mx-auto h-[62.96px] mt-10 text-[#00ff00] text-2xl bg-[url('http://localhost:3000/pics/Subtract.svg')] bg-cover bg-center scale-80 md:scale-100 cursor-pointer hover:[filter:drop-shadow(0px_-3.623px_3.623px_#03fa24)] hover:translate-0.5"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
