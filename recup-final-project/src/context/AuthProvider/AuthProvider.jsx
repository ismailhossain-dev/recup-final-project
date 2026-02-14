//step-2 : authentication
import React, { useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/Logo/firebase/firebase.init";

// email and password receive from register page
const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    registerUser,
    signInUser,
    user,
    setUser,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
