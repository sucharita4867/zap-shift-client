import React from "react";
import useRole from "../../../Hooks/useRole";
import Loading from "../../../Components/Loading/Loading";
import AdminDashboardHome from "./AdminDashboardHome";
import RiderDashboardHome from "./RiderDashboardHome";
import UserDashboardHome from "./UserDashboardHome";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading />;
  }
  if (role === "admin") {
    return <AdminDashboardHome />;
  } else if (role === "rider") {
    return <RiderDashboardHome />;
  } else {
    <UserDashboardHome />;
  }
  return (
    <div>
      <h2>dashboard home</h2>
    </div>
  );
};

export default DashboardHome;
