//React route documentation ing github
import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../Loader/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  //We will move from one place to another through useLocation.

  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <Loader />;
  }

  //if user not found then go to login page
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
