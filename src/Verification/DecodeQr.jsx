import React, { useState, useEffect, useRef } from "react";
import { decodeQrPayload } from "../services/decodeQr";
import QRCode from "react-qr-code";
import { Html5Qrcode } from "html5-qrcode";

export default function VerifyQr() {
  const [qrInput, setQrInput] = useState("");
  const [decodedData, setDecodedData] = useState(null);
  const [error, setError] = useState("");
  const [scannerActive, setScannerActive] = useState(false);
  const scannerRef = useRef(null);

  // Start QR scanner
  const startScanner = () => {
    setDecodedData(null);
    setError("");
    setScannerActive(true);

    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode
      .start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: 250,
        },
        (decodedText) => {
          html5QrCode.stop();
          setScannerActive(false);
          handleDecoded(decodedText);
        },
        (errorMessage) => {
          // Optional: console.log("QR scan error:", errorMessage);
        }
      )
      .catch((err) => {
        setError("Unable to start QR scanner: " + err);
        setScannerActive(false);
      });

    scannerRef.current = html5QrCode;
  };

  const stopScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.stop().catch(() => {});
      setScannerActive(false);
    }
  };

  const handleDecoded = (decodedText) => {
    setQrInput(decodedText);
    const result = decodeQrPayload(decodedText);
    if (result) {
      setDecodedData(result);
      setError("");
    } else {
      setDecodedData(null);
      setError("Invalid or tampered QR payload!");
    }
  };

  const handleVerify = () => {
    setError("");
    setDecodedData(null);
    handleDecoded(qrInput);
  };

  useEffect(() => {
    return () => stopScanner(); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Verify QR Payload</h2>

        {/* Manual input */}
        <input
          type="text"
          placeholder="Enter QR payload manually"
          value={qrInput}
          onChange={(e) => setQrInput(e.target.value)}
          className="w-full border rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4"
        >
          Verify QR
        </button>

        <button
          onClick={scannerActive ? stopScanner : startScanner}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-4"
        >
          {scannerActive ? "Stop Scanner" : "Scan QR with Camera"}
        </button>

        {/* Scanner preview */}
        <div id="reader" className="w-full flex justify-center mb-4"></div>

        {/* Error message */}
        {error && <p className="text-red-600 text-center mb-2">{error}</p>}

        {/* Display decoded data */}
        {decodedData && (
          <div className="bg-green-100 p-4 rounded text-gray-700">
            <h3 className="font-semibold mb-2">QR Valid! Decoded Data:</h3>
            <pre className="whitespace-pre-wrap break-words">{JSON.stringify(decodedData, null, 2)}</pre>
          </div>
        )}

        {/* Optional QR Code Preview */}
        {decodedData && (
          <div className="mt-4 flex justify-center">
            <QRCode value={qrInput} size={150} />
          </div>
        )}
      </div>
    </div>
  );
}
