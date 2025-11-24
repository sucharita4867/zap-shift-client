import axios from "axios";
import React, { useEffect } from "react";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user } = UseAuth();
  useEffect(() => {
    // intercept request
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });
    // interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
    };
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
