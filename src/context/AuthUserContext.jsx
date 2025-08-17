// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../lib/firebase";

// Default context structure
const AuthUserContext = createContext({
  authUser: null,
  loading: true,
  signOutUser: async () => {},
  signInWithEmail: async () => {},
  signUpWithEmail: async () => {},
});

export function AuthUserProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Sign out
  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error.message);
      throw error;
    }
  };

  // Sign up with email/password
  const signUpWithEmail = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      console.error("Sign up error:", error.message);
      throw error;
    }
  };

  // Sign in with email/password
  const signInWithEmail = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      console.error("Sign in error:", error.message);
      throw error;
    }
  };

  // Prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      authUser,
      loading,
      signOutUser,
      signInWithEmail,
      signUpWithEmail,
    }),
    [authUser, loading]
  );

  return (
    <AuthUserContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthUserContext.Provider>
  );
}

// Custom hook
export const useAuth = () => useContext(AuthUserContext);
