import React from "react";
import { Outlet } from "react-router";
import Footer from "../routes/Shared/Footer/Footer";
import Navbar from "../routes/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
      <Navbar />

      <main className="flex-grow px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
