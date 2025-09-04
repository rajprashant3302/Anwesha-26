import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import QRCode from "react-qr-code";
import { generateQrPayload } from "../../services/qr";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig.js";  // adjust path as needed

// ✅ Utility: Convert image from /public to base64
const toBase64 = (url) =>
  fetch(url)
    .then((res) => res.blob())
    .then(
      (blob) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        })
    );

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

  const handleShowQr =async () => {
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
    try {
    // Update Firestore: save QR payload in 'qrtoken' field of the user document
    const userDocRef = doc(db, "users", currentUser.uid);
    await updateDoc(userDocRef, { qrtoken: payload });

    setQrValue(payload);
    setShowQr(true);
  } catch (error) {
    console.error("Error saving QR token:", error);
    toast.error("Failed to save QR token.");
  }
  };

  // ✅ Generate PDF receipt
const handleDownloadReceipt = async (event) => {
  const doc = new jsPDF();

  try {
    const iitpLogo = await toBase64("/iitp-logo.png");
    const anweshaLogo = await toBase64("/A_logo.png");
    const signImg = await toBase64("/sign.png");

    // Header Logos
    if (iitpLogo) doc.addImage(iitpLogo, "PNG", 15, 10, 30, 30);
    if (anweshaLogo) doc.addImage(anweshaLogo, "PNG", 165, 10, 30, 30);

    // Main Heading
    doc.setFont("helvetica", "bold").setFontSize(18);
    doc.text("Anwesha - IIT Patna", 105, 25, { align: "center" });

    doc.setFont("helvetica", "normal").setFontSize(11);
    doc.text("Indian Institute of Technology Patna", 105, 32, { align: "center" });
    doc.text("Bihta, Bihar - 801106", 105, 38, { align: "center" });

    // ✅ Horizontal Line Divider
    doc.setDrawColor(100);
    doc.setLineWidth(0.5);
    doc.line(20, 44, 190, 44); // from x=20 to x=190 at y=44

    // Title Section
    doc.setDrawColor(0);
    doc.setFillColor(220, 230, 255);
    doc.rect(20, 50, 170, 10, "F");
    doc.setFont("helvetica", "bold").setFontSize(14);
    doc.text("Event Registration Receipt", 105, 57, { align: "center" });

    let y = 70;

    // Participant Section
    doc.setFontSize(12).setFont("helvetica", "bold");
    doc.text("Participant Details", 20, y);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${currentUser.personal.firstName} ${currentUser.personal.lastName}`, 20, y);
    y += 7;
    doc.text(`Anwesha ID: ${currentUser.anweshaId}`, 20, y);
    y += 7;
    doc.text(`Email: ${currentUser.email}`, 20, y);
    y += 7;
    doc.text(`Contact: ${currentUser?.contact?.phone || "N/A"}`, 20, y);
    y += 7;
    doc.text(`College: ${currentUser.college?.name || "N/A"}`, 20, y);

    // Event Info
    y += 12;
    doc.setFont("helvetica", "bold");
    doc.text("Event Details", 20, y);
    y += 8;
    doc.setFont("helvetica", "normal");
    doc.text(`Event ID: ${event?.eventId || "N/A"}`, 20, y);
    y += 7;
    doc.text(`Team ID: ${event?.teamId || "N/A"}`, 20, y);
    y += 7;
    doc.text(`Payment ID: ${event?.paymentId || "N/A"}`, 20, y);
    y += 7;
    doc.text(`Order ID: ${event?.orderId || "N/A"}`, 20, y);
    y += 7;
    doc.text(`Amount Paid: Rs.${event?.amount || "N/A"}`, 20, y);

    // QR Code
    if (qrRef.current) {
  const qrBase64 = await htmlToImage.toPng(qrRef.current, { cacheBust: true });
  doc.addImage(qrBase64, "PNG", 145, 80, 50, 50);
  doc.setFontSize(9);
  doc.text("Scan to Verify", 170, 135, { align: "center" });
}


    // Signature
    if (signImg) {
      doc.addImage(signImg, "PNG", 140, 155, 50, 20);
    }
    doc.setFontSize(10);
    doc.text("Coordinator Signature", 165, 178, { align: "center" });

    // Footer
    const today = new Date().toLocaleDateString();
    doc.setFontSize(9);
    doc.text(`Issued on: ${today}`, 20, 200);
    doc.setTextColor(100);
    doc.text(
      "This receipt is system generated. Please carry a printed or digital copy.",
      105,
      210,
      { align: "center" }
    );

    // Save PDF
    doc.save(`receipt_${currentUser.anweshaId}_${event?.eventId || "general"}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    toast.error("Failed to generate receipt PDF.");
  }
};

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!currentUser) return null;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 p-6">
      <div className="relative w-full max-w-3xl">
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute top-6 right-6 bg-red-600 text-white py-2 px-5 rounded-xl hover:bg-red-700 transition-shadow shadow-md"
        >
          Logout
        </button>

        {/* Card */}
        <div className="rounded-3xl shadow-2xl border border-gray-300 p-10 mt-10 bg-white/90 text-center animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-5 bg-gradient-to-l from-[#095DB7] to-[#41D7B7] bg-clip-text text-transparent">
            Welcome, {currentUser.personal.firstName} {currentUser.personal.lastName}
          </h2>
          <h3 className="text-xl font-bold mb-8 text-green-600">{currentUser.anweshaId}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 mb-8">
            {/* User Info */}
            <div className="space-y-3 text-left">
              <p><strong>Verification Status:</strong> {currentUser.emailVerified ? "Verified" : "Not verified"}</p>
              <p><strong>Email:</strong> {currentUser.email}</p>
              <p><strong>Contact:</strong> {currentUser?.contact?.phone || "N/A"}</p>
              <p><strong>DOB:</strong> {currentUser?.personal?.dob || "N/A"}</p>
              <p><strong>Gender:</strong> {currentUser?.personal?.gender ? currentUser.personal.gender[0].toUpperCase() + currentUser.personal.gender.slice(1) : "N/A"}</p>
              <p><strong>Address:</strong> {currentUser?.contact?.address || "N/A"}</p>
            </div>

            {/* College Info */}
            <div className="space-y-3 text-left">
              <h3 className="text-lg font-semibold text-red-600 mb-3">College Details</h3>
              <p><strong>College/University:</strong> {currentUser.college?.name || "N/A"}</p>
              <p><strong>City:</strong> {currentUser.college?.city || "N/A"}</p>
              <p><strong>Passing Year:</strong> {currentUser.college?.passingYear || "N/A"}</p>
            </div>

            {/* Event Info */}
            {Array.isArray(currentUser.events) && currentUser.events.length !== 0 && (
              <div className="md:col-span-2 text-left">
                <h3 className="text-lg font-semibold text-red-600 mb-4">Event Details</h3>

                {currentUser.events.map((event, index) => (
                  <div key={index} className="mb-5 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
                    <p><strong>Event Id:</strong> {event.eventId || "N/A"}</p>
                    <p><strong>Team Id:</strong> {event.teamId || "N/A"}</p>
                    <p><strong>Payment Id:</strong> {event.paymentId || "N/A"}</p>
                    <p><strong>Order Id:</strong> {event.orderId || "N/A"}</p>
                    <p><strong>Amount:</strong> ₹{event.amount || "N/A"}</p>

                    {/* ✅ Download Receipt Button */}
                    {event.paymentId && (
                      <button
                        onClick={() => handleDownloadReceipt(event)}
                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                      >
                        Download Receipt
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Entry Pass Button */}
          <button
            onClick={handleShowQr}
            className="bg-gradient-to-r from-[#41D7B7] to-[#095DB7] hover:from-[#095DB7] hover:to-[#41D7B7] text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-blue-400/50"
          >
            View Entry Pass
          </button>

          {/* Hidden QR for PDF (RENDERED but INVISIBLE) */}
          {qrValue && (
            <div
              ref={qrRef}
              style={{
                position: "absolute",
                visibility: "hidden",
                pointerEvents: "none",
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            >
              <QRCode value={qrValue} size={150} />
            </div>
          )}

          {/* Visible QR */}
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
