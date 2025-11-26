import { useQuery } from "@tanstack/react-query";
import React from "react";
import useUserAuth from "./useUserAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user } = useUserAuth();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: role = "user" } = useQuery({
    queryKey: ["user-role", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      return res.data;
    },
  });
  return { isLoading, role };
};

export default useRole;
