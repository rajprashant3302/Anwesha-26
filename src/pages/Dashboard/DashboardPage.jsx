import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import QRCode from "react-qr-code";
import { generateQrPayload } from "../../services/qr";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [qrValue, setQrValue] = useState("");
  const navigate = useNavigate();

  const { currentUser } = useAuthUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);

          if (data.qrEnabled) {
            const payload = generateQrPayload({
              anweshaId: data.anweshaId,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              contact: data.contact?.phone,
              college: data.college?.name,
            });

            setQrValue(payload);
          } else {
            setQrValue("");
          }
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {user && currentUser ? (
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome,{" "}
            {currentUser.firstName[0].toUpperCase() +
              currentUser.firstName.slice(1) +
              " " +
              currentUser.lastName[0].toUpperCase() +
              currentUser.lastName.slice(1)}
          </h2>
          <h3 className="text-xl font-bold mb-4 text-center text-green-600 ">
            {currentUser.anweshaId}
          </h3>

          <div className="text-left space-y-3">
            <p>
              <strong>Verification Status :</strong>{" "}
              {currentUser.emailVerified ? "Verified" : "Not verified"}
            </p>
            <p>
              <strong>Email :</strong> {currentUser.email}
            </p>
            <p>
              <strong>Contact No :</strong> {currentUser.contact.phone}
            </p>
            <p>
              <strong>Date of Birth :</strong> {currentUser.dob}
            </p>
            <p>
              <strong>Sex :</strong>{" "}
              {currentUser.gender[0].toUpperCase() + currentUser.gender.slice(1)}
            </p>
            <p>
              <strong>Address :</strong> {currentUser.address}
            </p>
            <h3 className="text-xl font-bold mb-4 text-center text-red-600 ">
              College Details
            </h3>
            <p>
              <strong>College/University :</strong> {currentUser.college.name}
            </p>
            <p>
              <strong>City :</strong> {currentUser.college.city}
            </p>
            <p>
              <strong>Passing Year :</strong> {currentUser.college.passingYear}
            </p>
          </div>

          <div className="flex flex-col items-center mt-6">
            <h3 className="text-lg font-semibold mb-2">Your QR Code</h3>
            {userData?.qrEnabled ? (
              <QRCode value={qrValue} size={200} />
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-[200px] h-[200px] flex items-center justify-center bg-gray-200 blur-sm rounded-lg">
                  <p className="text-gray-500 text-sm">QR Locked</p>
                </div>
                <p className="text-red-600 font-semibold mt-2">
                  Please complete your payment to unlock your QR
                </p>
              </div>
            )}

          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
