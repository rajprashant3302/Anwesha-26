

import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc,getDoc } from "firebase/firestore";
import toast from "react-hot-toast";

import {  runTransaction } from "firebase/firestore";

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
      // await setDoc(doc(db,'lastID'),'000001');


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
    const lastIdRef = doc(db, 'lastId', 'FSnK4Uxwu1faW1jfy0wk');
  
    try {
      const anweshaId = await runTransaction(db, async (transaction) => {
        const docSnapshot = await transaction.get(lastIdRef);
  
        if (!docSnapshot.exists()) {
          throw new Error("Last ID document not found!");
        }
  
        let lastId = docSnapshot.data().lastId;
        lastId++; // Increment the counter
        const newAnweshaId = `ANW-MUL-${lastId.toString().padStart(6, '0')}`;
  
        // Update the user's document
        await updateUser(uid, {
          anweshaId: newAnweshaId,
          status: "successful",
          ...formData,
        });
  
        // Update the lastId document within the transaction
        transaction.update(lastIdRef, { lastId: lastId });
  
        return newAnweshaId;
      });
  
      toast.success("Anwesha ID generated successfully.");
      return anweshaId;
  
    } catch (error) {
      toast.error("Failed to generate Anwesha ID: " + error.message);
      console.log(error.message);
      return null;
    }
  };
  


  return (
    <AuthUserContext.Provider value={{ currentUser, registerUser, updateUser ,finalizeRegistration}}>
      {children}
    </AuthUserContext.Provider>
  );
}

 export const useAuthUser = () => useContext(AuthUserContext);

