import React from "react";
import useUserAuth from "../Hooks/useUserAuth";
import Loading from "../Components/Loading/Loading";
import useRole from "../Hooks/useRole";
import Forbidden from "../Components/Forbidden/Forbidden";

const AdminRoute = () => {
  const { loading } = useUserAuth();
  const { roleLoading, role } = useRole();

  if (loading || roleLoading) {
    return <Loading />;
  }
  if (role !== "admin") {
    return <Forbidden />;
  }
  return <div></div>;
};

export default AdminRoute;
