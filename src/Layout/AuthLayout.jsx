import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto h-screen ">
      <Logo />
      <div className="flex  items-center  mt-12 ">
        <div className="flex-1 items-center justify-center ">
          <Outlet />
        </div>
        <div className="flex-1">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
