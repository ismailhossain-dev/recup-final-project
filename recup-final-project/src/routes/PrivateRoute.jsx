//React route documentation ing github
import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../Loader/Loader";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  //if user not found then go to login page
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
