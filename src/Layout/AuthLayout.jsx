import React from "react";
import Logo from "../Components/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Logo />
      <div className="flex ">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="border border-black flex-1">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
