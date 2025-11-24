import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const useUserAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useUserAuth;
