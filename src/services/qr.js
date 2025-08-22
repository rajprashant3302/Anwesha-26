import SHA256 from "crypto-js/sha256";

export const generateQrPayload = (user) => {
  if (!user) return "";

  const userDataString = `${user.anweshaId}|${user.firstName}|${user.lastName}|${user.email}|${user.contact}|${user.college}`;

  const hash = SHA256(userDataString).toString();

  return `${hash}`;
};

export const verifyQrPayload = (qrString) => {
  if (!qrString) return false;

  const parts = qrString.split("|");
  const receivedHash = parts.pop();
  const originalData = parts.join("|");

  const recalculatedHash = SHA256(originalData).toString();

  return receivedHash === recalculatedHash;
};
