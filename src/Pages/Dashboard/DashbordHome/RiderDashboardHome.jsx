import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const RiderDashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["delivery-status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders/delivery-par-day");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-4xl text-secondary">RiderDashboardHome</h2>
      <button className="btn bag-primary">out deliveris</button>
      <h2 className="text-4xl text-secondary">{console.log(data)}</h2>
    </div>
  );
};

export default RiderDashboardHome;
