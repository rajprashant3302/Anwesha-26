import React, { createContext, useContext, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc ,getDoc} from "firebase/firestore";
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
      toast.error(error.message || "error");
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

  //sign in 
  // const loginUser=async (email, password) => {
  //   try{
  //           const res=await signInWithEmailAndPassword(auth, email, password);
  //           toast.success("Login successful!");

  //           const data=await getDoc(doc(db, "users",res.user.uid));
  //           setCurrentUser(data)

  //           return data;

  //   }catch(error){
  //     toast.error(error.message)
  //   }
  // }

  const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login successful!");

    // Get Firestore user document
    const userDoc = await getDoc(doc(db, "users", res.user.uid));
    localStorage.setItem("uid",res.user.uid)

    if (userDoc.exists()) {
      const userData = userDoc.data();  // extract fields
      setCurrentUser( userData );
      return userData ;
    } else {
      console.log("No such document!");
      setCurrentUser(res.user); // fallback to auth user only
      return res.user;
    }

  } catch (error) {
    toast.error(error.message);
  }
};


  //access all info from db by uid

  

  return (
    <AuthUserContext.Provider value={{ currentUser, registerUser, updateUser ,finalizeRegistration,loginUser}}>
      {children}
    </AuthUserContext.Provider>
  );
}

export const useAuthUser = () => useContext(AuthUserContext);
