import React from "react";
import { Navigate, useLocation } from "react-router";
import useUserAuth from "../Hooks/useUserAuth";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useUserAuth();
  const location = useLocation();
  // console.log("location", location);

  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
