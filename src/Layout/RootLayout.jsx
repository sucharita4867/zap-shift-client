import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shred/Footer";
import Navbar from "../Pages/Shred/Navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
