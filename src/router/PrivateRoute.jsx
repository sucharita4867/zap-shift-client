import React from "react";
import { Navigate, useLocation } from "react-router";
import useUserAuth from "../Hooks/useUserAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useUserAuth();
  const location = useLocation();
  // console.log("location", location);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
