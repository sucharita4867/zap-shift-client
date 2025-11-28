import React from "react";
import useUserAuth from "../Hooks/useUserAuth";
import useRole from "../Hooks/useRole";
import Loading from "../Components/Loading/Loading";

const RiderRoute = ({ children }) => {
  const { loading, user } = useUserAuth();
  const { roleLoading, role } = useRole();

  if (loading || roleLoading || user) {
    return <Loading />;
  }
  if (role !== "rider") {
    return <Forbidden />;
  }
  return children;
};

export default RiderRoute;
