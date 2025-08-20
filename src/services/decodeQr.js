import SHA256 from "crypto-js/sha256";

// Use the same secret key
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY_QR_HASHING;

// Decode QR payload and verify
export const decodeQrPayload = (qrString) => {
  if (!qrString) return null;

  const parts = qrString.split("|");
  if (parts.length !== 2) return null;

  const [base64Data, receivedHash] = parts;
  const originalData = atob(base64Data); // decode base64

  // Recalculate hash with secret key
  const recalculatedHash = SHA256(originalData + SECRET_KEY).toString();

  if (receivedHash !== recalculatedHash) {
    return null; // ❌ invalid or tampered QR
  }

  // ✅ valid QR, parse data into object
  const dataParts = originalData.split("|");

  return {
    anweshaId: dataParts[0] || "",
    firstName: dataParts[1] || "",
    lastName: dataParts[2] || "",
    email: dataParts[3] || "",
    contact: dataParts[4] || "",
    college: dataParts[5] || "",
    dob: dataParts[6] || "",
    gender: dataParts[7] || ""
  };
};
