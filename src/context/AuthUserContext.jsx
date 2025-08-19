import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const AuthUserContext = createContext();

export function AuthUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Register new user
  const registerUser = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      const userDoc = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        anweshaId: null,
        createdAt: Date.now(),
        status: "pending",
        personal: {},
        college: {},
        qrEnabled: false,
        qrTokenId: null,
        events: [],
      };

      await setDoc(doc(db, "users", user.uid), userDoc);
      setCurrentUser(userDoc);

      return userDoc;
    } catch (error) {
      toast.error(error.message);
      return null;
    }
  };

  // Update user info in Firestore
  const updateUser = async (uid, updatedData) => {
    const ref = doc(db, "users", uid);
    await setDoc(ref, updatedData, { merge: true });
    setCurrentUser((prev) => ({ ...prev, ...updatedData }));
  };

  const finalizeRegistration = async (uid, formData) => {
    const anweshaId = `ANW-MUL-${Math.floor(100000 + Math.random() * 900000)}`;
    await updateUser(uid, {
      anweshaId,
      status: "successful",
      ...formData,
    });
    return anweshaId;
  };


  return (
    <AuthUserContext.Provider value={{ currentUser, registerUser, updateUser ,finalizeRegistration}}>
      {children}
    </AuthUserContext.Provider>
  );
}

export const useAuthUser = () => useContext(AuthUserContext);
