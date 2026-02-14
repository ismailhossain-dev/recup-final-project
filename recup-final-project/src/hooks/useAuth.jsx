//setp-3 : authentication amader er use use bar bar letkte hobe na tai amra useAuth create korsi
import React, { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuth;
