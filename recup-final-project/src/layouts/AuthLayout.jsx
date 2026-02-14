import React from "react";
import Logo from "../components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
//authentication all work
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo />
      {/*add the image with the outlet. */}
      <div className="flex  items-center">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
