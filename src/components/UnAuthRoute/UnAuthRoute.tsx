import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export function UnAuthRoute({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);
  let location = useLocation();

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
