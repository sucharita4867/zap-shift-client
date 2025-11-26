import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-secondary text-4xl">Manage Users : {users.length}</h2>
    </div>
  );
};

export default UserManagement;
