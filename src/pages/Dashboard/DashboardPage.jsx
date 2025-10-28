import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import QRCode from "react-qr-code";
import { generateQrPayload } from "../../services/qr";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";
import { generatePdf } from "../../services/pdf.js"; // ✅ import PDF function

export default function Dashboard() {
  const [showQr, setShowQr] = useState(false);
  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser, loading } = useAuthUser();

  useEffect(() => {
    if (!loading && !currentUser) {
      navigate("/login");
    }
  }, [loading, currentUser, navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const handleShowQr = async () => {
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
      dob: currentUser.personal.dob,
      gender: currentUser.personal.gender,
    });
    console.log(payload)

    try {
      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, { qrtoken: payload });

      setQrValue(payload);
      setShowQr(true);
    } catch (error) {
      console.error("Error saving QR token:", error);
      toast.error("Failed to save QR token.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!currentUser) return null;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[url('/tajmahal_bg.jpg')] bg-center bg-cover  p-6 text-[1.3rem]">
      <div className="relative w-full max-w-3xl">
        <button
          onClick={handleLogout}
          className="absolute top-6 right-6 bg-red-600 text-2xl text-white py-2 px-5 rounded-xl hover:bg-red-700 transition-shadow shadow-md"
        >
          Logout
        </button>

        <div className="rounded-3xl shadow-2xl border border-gray-300 p-10 mt-10 bg-white/60 text-center animate-fade-in">
          <h2 className="text-[2rem] md:text-[5rem] text-nowrap font-extrabold mb-5 bg-gradient-to-l from-[#095DB7] to-[#41D7B7] bg-clip-text text-transparent">
            Welcome&nbsp;to&nbsp;<i>IIT-P</i> <br /> {currentUser.personal.firstName} {currentUser.personal.lastName}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-green-600">{currentUser.anweshaId}</h3>

          {/* User & College Info */}
          <div className="grid grid-cols-1 text-2xl tracking-wider md:grid-cols-2 gap-8 text-gray-800 mb-8">
            <div className="space-y-3 text-left">
              <p><strong>Verification Status:</strong> {currentUser.emailVerified ? "Verified" : "Not verified"}</p>
              <p><strong>Email:</strong> {currentUser.email}</p>
              <p><strong>Contact:</strong> {currentUser?.contact?.phone || "N/A"}</p>
              <p><strong>DOB:</strong> {currentUser?.personal?.dob || "N/A"}</p>
              <p><strong>Gender:</strong> {currentUser?.personal?.gender ? currentUser.personal.gender[0].toUpperCase() + currentUser.personal.gender.slice(1) : "N/A"}</p>
              <p><strong>Address:</strong> {currentUser?.contact?.address || "N/A"}</p>
            </div>
            <div className="space-y-3 text-left">
              <h3 className="text-3xl font-semibold text-red-600 mb-3">College Details</h3>
              <p><strong>College/University:</strong> {currentUser.college?.name || "N/A"}</p>
              <p><strong>City:</strong> {currentUser.college?.city || "N/A"}</p>
              <p><strong>Passing Year:</strong> {currentUser.college?.passingYear || "N/A"}</p>
            </div>
          </div>

          {/* Event Info */}
          {Array.isArray(currentUser.events) && currentUser.events.length > 0 && (
            <div className="md:col-span-2 text-left">
              <h3 className="text-3xl font-semibold text-red-600 mb-4">Event Details</h3>
              {currentUser.events.map((event, index) => (
                <div key={index} className="mb-5 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
                  <p><strong>Event Id:</strong> {event.eventId || "N/A"}</p>
                  <p><strong>Team Id:</strong> {event.teamId || "N/A"}</p>
                  <p><strong>Payment Id:</strong> {event.paymentId || "N/A"}</p>
                  <p><strong>Order Id:</strong> {event.orderId || "N/A"}</p>
                  <p><strong>Amount:</strong> ₹{event.amount || "N/A"}</p>

                  {event.paymentId && (
                    // <button
                    //   onClick={() => generatePdf(currentUser, event, qrRef)}
                    //   className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                    // >
                    //   Download Receipt
                    // </button>
                    <button onClick={() => generatePdf(currentUser, event, qrRef)}>Download</button>
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleShowQr}
            // className="bg-gradient-to-r from-[#41D7B7] to-[#095DB7] hover:from-[#095DB7] hover:to-[#41D7B7] text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-blue-400/50"
            className="text-white  font-bold bg-[url('/bg_2_cropped.jpg')] bg-cover bg-bottom py-3 px-8 rounded-xl shadow-lg transition-transform duration-300 transform text-[1.7rem] tracking-wider hover:scale-110"
          >
            View Entry Pass
          </button>

          {qrValue && (
            <div ref={qrRef} style={{ position: "absolute", visibility: "hidden", pointerEvents: "none", top: 0, left: 0, zIndex: -1 }}>
              <QRCode value={qrValue} size={150} />
            </div>
          )}

          {showQr && (
            <div className="mt-8 p-6 bg-white/80 rounded-xl flex flex-col items-center shadow-md">
              <QRCode value={qrValue} size={200} />
              <p className="mt-3 text-gray-700 font-medium">Show this QR at the entry</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
