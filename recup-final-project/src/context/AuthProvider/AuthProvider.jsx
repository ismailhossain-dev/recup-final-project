//step-2 : authentication
import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../components/Logo/firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //google singIn Work
  const googleProvider = new GoogleAuthProvider();
  // email and password receive from register page
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //googleSignin Work
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //observe user state
  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubsCribe();
    };
  }, []);

  const authInfo = {
    registerUser,
    signInUser,
    user,
    setUser,
    signInGoogle,
    loading,
    setLoading,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
