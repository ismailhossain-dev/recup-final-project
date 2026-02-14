//I am working AuthProvider , I looking react website
import React from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../components/Logo/firebase/firebase.init";

//email and password receive from register page
const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const authInfo = {
  registerUser,
  signInUser,
};
//main.js children access
const AuthProvider = ({ children }) => {
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
