import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import QRCode from "react-qr-code";
import { generateQrPayload } from "../../services/qr";

export default function Dashboard() {
  const [showQr, setShowQr] = useState(false);
  const [qrValue, setQrValue] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuthUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const docRef = doc(db, "users", authUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
        } else {
          toast.error("User data not found in Firestore!");
        }
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const handleShowQr = () => {
    // console.log(currentUser)
    if (!currentUser.qrEnabled) {
      toast.error("Please register in any event to unlock your Entry Pass.");
      return;
    }

    const payload = generateQrPayload({
      anweshaId: currentUser.anweshaId,
      firstName: currentUser.personal.firstName,
      lastName: currentUser.personal.lastName,
      email: currentUser.email,
      contact: currentUser.contact?.phone,
      college: currentUser.college?.name,
      dob:currentUser.personal.dob,
      gender:currentUser.personal.gender,

    });
    // console.log(payload)

    setQrValue(payload);
    setShowQr(true);
  };

  if ( !currentUser)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 p-4">
      <div className="relative w-full max-w-2xl">

        {/* Logout Button Top Right */}
        <button
          onClick={handleLogout}
          className="absolute top-15 right-7  bg-red-500 text-white py-2 px-4 rounded-xl  hover:bg-red-600 transition"
        >
          Logout
        </button>

        {/* Card */}
        <div className="rounded-3xl shadow-2xl border p-10 mt-8 bg-white/80 text-center animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-l from-[#095DB7] to-[#41D7B7] bg-clip-text text-transparent">
            Welcome, {currentUser.personal.firstName} {currentUser.personal.lastName}
          </h2>
          <h3 className="text-xl font-bold mb-6 text-green-600">
            {currentUser.anweshaId}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 mb-6">
            <div className="space-y-2 text-left">
              <p><strong>Verification Status:</strong> {currentUser.emailVerified ? "Verified" : "Not verified"}</p>
              <p><strong>Email:</strong> {currentUser.email}</p>
              <p><strong>Contact:</strong> {currentUser?.contact?.phone || "N/A"}</p>
              <p><strong>DOB:</strong> {currentUser?.personal?.dob || "N/A"}</p>
              <p><strong>Gender:</strong> {currentUser?.personal?.gender ? currentUser.personal.gender[0].toUpperCase() + currentUser.personal.gender.slice(1) : "N/A"}</p>
              <p><strong>Address:</strong> {currentUser?.contact?.address || "N/A"}</p>
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-lg font-semibold text-red-600">College Details</h3>
              <p><strong>College/University:</strong> {currentUser.college?.name || "N/A"}</p>
              <p><strong>City:</strong> {currentUser.college?.city || "N/A"}</p>
              <p><strong>Passing Year:</strong> {currentUser.college?.passingYear || "N/A"}</p>
            </div>
          </div>

          {/* Entry Pass Button */}
          <button
            onClick={handleShowQr}
            className="bg-gradient-to-r from-[#41D7B7] to-[#095DB7] hover:from-[#095DB7] hover:to-[#41D7B7] 
                       text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-400/50"
          >
            View Entry Pass
          </button>

          {/* QR Code */}
          {showQr && (
            <div className="mt-6 p-4 bg-transparent rounded-xl flex flex-col items-center">
              <QRCode value={qrValue} size={200} />
              <p className="mt-2 text-gray-700">Show this QR at the entry</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
